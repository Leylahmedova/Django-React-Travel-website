import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Profil() {
  const navigate = useNavigate();
  const [userData, setUserData] = useState({});
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [activeTab, setActiveTab] = useState("profil");
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageChange = (event) => {
    setSelectedImage(event.target.files[0]);
  };

  useEffect(() => {
    const userEmail = localStorage.getItem("user_email");
    setEmail(userEmail);
    fetchUserData();
  }, []);

  const fetchUserData = () => {
    fetch(`/api/get_user_data/?email=${email}`)
      .then((response) => response.json())
      .then((data) => {
        setUserData(data);
        setFirstName(data.first_name);
        setLastName(data.last_name);
      })
      .catch((error) => {
        console.error("Error fetching user data:", error);
      });
  };

  const handleSaveChanges = () => {
    const updatedUserData = {
      email: email,
      first_name: firstName,
      last_name: lastName,
    };

    fetch("/api/update_profile/", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedUserData),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Profile updated successfully");
        navigate("/login");
        fetchUserData();
      })
      .catch((error) => {
        console.error("Error updating profile:", error);
      });
  };

  const handlePasswordChange = () => {
    const passwordData = {
      email: email,
      old_password: oldPassword,
      new_password: newPassword,
      confirm_password: confirmPassword,
    };

    fetch("/api/update_password/", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(passwordData),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Password updated successfully");
        navigate("/login");
        setOldPassword("");
        setNewPassword("");
        setConfirmPassword("");
      })
      .catch((error) => {
        console.error("Error updating password:", error);
      });
  };

  return (
    <section className="Profil">
      <div className="user_page">
        <div className="user_page_title">
          <h1>User Page</h1>
        </div>
        <div className="tab-buttons">
          <button
            className={activeTab === "profil" ? "active" : ""}
            onClick={() => setActiveTab("profil")}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="profil_svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
              />
            </svg>
            Profile
          </button>
          <button
            className={activeTab === "privacy" ? "active" : ""}
            onClick={() => setActiveTab("privacy")}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="profil_svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z"
              />
            </svg>
            Privacy
          </button>
          <button
            className={activeTab === "photo" ? "active" : ""}
            onClick={() => setActiveTab("photo")}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="profil_svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6.827 6.175A2.31 2.31 0 015.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574V18a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 00-1.134-.175 2.31 2.31 0 01-1.64-1.055l-.822-1.316a2.192 2.192 0 00-1.736-1.039 48.774 48.774 0 00-5.232 0 2.192 2.192 0 00-1.736 1.039l-.821 1.316z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M16.5 12.75a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zM18.75 10.5h.008v.008h-.008V10.5z"
              />
            </svg>
            Photo
          </button>
        </div>
      </div>
      <div className="content-wrapper">
        {activeTab === "profil" && (
          <div className="input-section">
            <span>First name</span>
            <input
              type="text"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              placeholder="Narmin"
            />
            <span>Last name</span>
            <input
              type="text"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              placeholder="Orujova"
            />
            <span>Email</span>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="leylaahmadova2003@gmail.com"
            />
            <div className="input_ctr">
              <button className="pass_btn" onClick={handleSaveChanges}>
                Save Changes
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="reset_icn"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M8.25 4.5l7.5 7.5-7.5 7.5"
                  />
                </svg>
              </button>
            </div>
          </div>
        )}
        {activeTab === "privacy" && (
          <div className="input-section">
            <span>Old password</span>
            <input
              type="password"
              value={oldPassword}
              onChange={(e) => setOldPassword(e.target.value)}
              placeholder="*********"
            />
            <span>New password</span>
            <input
              type="password"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              placeholder="*********"
            />
            <span>Confirm new password</span>
            <input
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              placeholder="*********"
            />
            <div className="input_ctr">
              <button className="pass_btn" onClick={handlePasswordChange}>
                Change Password
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="reset_icn"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M8.25 4.5l7.5 7.5-7.5 7.5"
                  />
                </svg>
              </button>
            </div>
          </div>
        )}
        {activeTab === "photo" && (
          <div className="input-section">
            <div className="photo_ctr">
              {/* <h4>Image preview</h4> */}
              <img
                data-purpose="image-preview"
                src={
                  selectedImage
                    ? URL.createObjectURL(selectedImage)
                    : "https://img-c.udemycdn.com/user/200_H/anonymous_3.png"
                }
                alt=""
              />
              <input
                type="file"
                accept="image/*"
                onChange={handleImageChange}
              />
              <div className="input_ctr">
                 <button className="pass_btn">
                Update photo
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="reset_icn"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M8.25 4.5l7.5 7.5-7.5 7.5"
                  />
                </svg>
              </button>
              </div>
             
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

export default Profil;
