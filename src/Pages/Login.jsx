import { Link } from "react-router-dom";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { setAuthToken } from "./Auth";
import jwt_decode from "jwt-decode";
const loginImage = "loginImage.png";
const loginImagePath = `/static/${loginImage}`;
const faceBook = "face.svg";
const faceBookPath = `/static/${faceBook}`;
const apple = "apple.svg";
const applePath = `/static/${apple}`;
const google = "google.svg";
const googlePath = `/static/${google}`;
function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userName, setUserName] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const setCookie = (name, value, days) => {
    const expires = new Date();
    expires.setDate(expires.getDate() + days);
    document.cookie = `${name}=${value};expires=${expires.toUTCString()};path=/`;
  };
  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("/api/login/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          password,
        }),
      });

      if (response.ok) {
        const data = await response.json();
        const access_token = data.access_token;

        setAuthToken(access_token);

        console.log("Access token:", access_token);
        const decodedToken = jwt_decode(access_token);
        console.log("Decoded Token:", decodedToken);
        console.log("Logged in:", data);
        if (data.user_data) {
          const user = data.user_data;
          const reviewname = `${user.first_name} ${user.last_name}`;

          if (user.first_name && user.last_name) {
            const formattedUserName =
              (user.first_name[0].toUpperCase() || "") +
              (user.last_name[0].toUpperCase() || "");
            setUserName(formattedUserName);
            localStorage.setItem("user_name", reviewname);
            setCookie("user_name", formattedUserName, 1);
          } else {
            console.error(
              "Error: First name or last name is missing in user_data"
            );
          }
        } else {
          console.error("Error: user_data is missing in data");
        }
        navigate("/");
      } else {
        const errorData = await response.json();
        const errorMessage =
          errorData.error || "An error occurred during login.";
        setError(errorMessage);
        console.error("Login error:", errorMessage);
      }
    } catch (error) {
      const errorMessage = "An error occurred during login.";
      setError(errorMessage);
      console.error("Error:", error);
    }
  };

  return (
    <section>
      <div className="container">
        <div className="login_page">
          <div>
            <h1>Login</h1>
            <p>Login to access your Golobe account</p>
            <form onSubmit={handleLogin}>
              <fieldset>
                <legend>Email</legend>
                <input
                  type="email"
                  name="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="john.doe@gmail.com"
                />
              </fieldset>
              <fieldset>
                <legend>Password</legend>
                <input
                  type="password"
                  name="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="•••••••••••••••••••••••••"
                />
              </fieldset>
              <div>
                <div className="remember">
                  <input type="checkbox" name="remember-me" id="" />
                  <h5>Remember Me</h5>
                </div>
                <Link to="/ForgetPassword">
                  {" "}
                  <span> Forget Password </span>
                </Link>
              </div>
              <button className="login_btn" onClick={handleLogin}>
                Login
              </button>

              <h4>
                Don’t have an account?
                <span>
                  <Link to="/sign-up"> Sign up</Link>
                </span>
              </h4>

              {error && (
                <div className="error-message-container">
                  <h6 className="error-message">{error}</h6>
                </div>
              )}
              <span className="or_login">Or login with</span>
              <div>
                <div>
                  <img src={faceBookPath} alt="" />
                </div>
                <div>
                  <img src={applePath} alt="" />
                </div>
                <div>
                  <img src={googlePath} alt="" />
                </div>
              </div>
            </form>
          </div>
          <div>
            <img src={loginImagePath} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Login;
