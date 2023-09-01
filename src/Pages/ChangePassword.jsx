import React, { useState } from "react";
import { Link } from "react-router-dom";
import jwt_decode from "jwt-decode";
function ChangePassword() {
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmNewPassword, setConfirmNewPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleChangePassword = async () => {
    try {
      const token = localStorage.getItem("access_token");

      const response = await fetch("/api/change_password/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${token}`,
        },
        body: JSON.stringify({
          old_password: oldPassword,
          new_password1: newPassword,
          new_password2: confirmNewPassword,
        }),
      });
      

      // const storedToken = localStorage.getItem("access_token");
      // console.log("Stored token:", storedToken);
      
      // // Token'ı direkt olarak kullanın
      // const token = storedToken;
      // console.log("Token:", token);
      

      const toke = localStorage.getItem("access_token");
      console.log("Token:", toke);
      
      try {
        const decodedToken = JSON.parse(atob(token.split('.')[1]));
        console.log("Decoded Token:", decodedToken);
      } catch (error) {
        console.error("Error while parsing token:", error);
      }
      

      const tokens = `${toke}`;
      const decoded = jwt_decode(tokens);
      console.log(decoded);
      

      const data = await response.json();

      if (response.ok) {
        setMessage(data.message);
        // Clear password fields
        setOldPassword("");
        setNewPassword("");
        setConfirmNewPassword("");
      } else {
        setMessage(data.error);
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div className="ChangePassword">
      <div className="container">

      <h1>Parolu Dəyişdir</h1>
      <p>{message}</p>
      <input
        type="password"
        placeholder="Köhnə parol"
        value={oldPassword}
        onChange={(e) => setOldPassword(e.target.value)}
        />
      <input
        type="password"
        placeholder="Yeni parol"
        value={newPassword}
        onChange={(e) => setNewPassword(e.target.value)}
        />
      <input
        type="password"
        placeholder="Yeni parolu təsdiqləyin"
        value={confirmNewPassword}
        onChange={(e) => setConfirmNewPassword(e.target.value)}
        />
      <button onClick={handleChangePassword}>Parolu Dəyişdir</button>
      <Link to="/">Ana Səhifəyə Qayıt</Link>
        </div>
    </div>
  );
}

export default ChangePassword;
