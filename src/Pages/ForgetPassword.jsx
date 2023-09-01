import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../Components/Navbar";

function ForgetPassword() {
  const [step, setStep] = useState(1);
  const [email, setEmail] = useState("");
  const [resetCode, setResetCode] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const navigate = useNavigate();

  const handleSendCode = async () => {
    try {
      const response = await fetch("/api/send-reset-code-email/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });

      if (response.ok) {
        setStep(2);
      } else {
        console.error("Error sending reset code.");
      }
    } catch (error) {
      console.error("Error sending reset code:", error);
    }
  };

  const handleResetPassword = async () => {
    try {
      const response = await fetch("/api/reset-password-with-code/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          reset_code: resetCode,
          new_password: newPassword,
        }),
      });

      if (response.ok) {
        navigate("/login");
      } else {
        const errorData = await response.json();
        console.error("Error resetting password:", errorData.error);
      }
    } catch (error) {
      console.error("Error resetting password:", error);
    }
  };

  const getSvgIcon1 = () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className="msj"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
      />
    </svg>
  );
  const getSvgIcon2 = () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className="msj"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
      />
    </svg>
  );
  const getSvgIcon3 = () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className="msj"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z"
      />
    </svg>
  );
  return (
    <section className="ChangePassword">
      <h1>Change Password</h1>
      <div className="container">
        <div className="password_intro">
          <div className="code_intro">
            {step === 1 && (
              <div>
                <h4>Email</h4>
                <div className="input-container">
                  <div className="icon-container">{getSvgIcon1()}</div>
                  <input
                    type="email"
                    placeholder="Email address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div className="input_ctr">
                  <button className="pass_btn" onClick={handleSendCode}>
                    Reset password{" "}
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

            {step === 2 && (
              <div>
                <div>
                  <h4>Reset code</h4>

                  <div className="input-container">
                    <div className="icon-container">{getSvgIcon2()}</div>
                    <input
                      type="number"
                      placeholder="Reset code"
                      value={resetCode}
                      onChange={(e) => setResetCode(e.target.value)}
                    />
                  </div>
                </div>
                <div>
                  <h4>New password</h4>

                  <div className="input-container">
                    <div className="icon-container">{getSvgIcon3()}</div>
                    <input
                      type="password"
                      value={newPassword}
                      placeholder="New Password"
                      onChange={(e) => setNewPassword(e.target.value)}
                    />
                  </div>
                  <div className="input_ctr">
                    <button className="pass_btn" onClick={handleResetPassword}>
                      Submit
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
          <img
            className="pass2"
            src="https://www.svgheart.com/wp-content/uploads/2020/08/airplane-clipart-free-svg-file.png"
            alt=""
          />
          <img
            className="pass1"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e9/Airplane.svg/669px-Airplane.svg.png?20111014192415"
            alt=""
          />
        </div>
      </div>
    </section>
  );
}

export default ForgetPassword;
