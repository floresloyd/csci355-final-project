import { signInWithEmailAndPassword } from "firebase/auth";
import { userLoginDatabase } from "../FirebaseClient";
import { useNavigate } from "react-router-dom";
import "./Login.css"; // Import the CSS file
import logo from "../assets/jobdock-logo.png";
import { useEffect, useRef, useState } from "react";

function Login() {
  const reroute = useNavigate();
  // AutoText variables
  const [autoText, setAutoText] = useState("Welcome");
  const textAutoComplete = " to JobDock!";
  const index = useRef(1);
  let speed = 60;
  // eslint-disable-next-line no-unused-vars
  const [restartDelay, setRestartDelay] = useState(5000);


  useEffect(() => {
    if (index.current > textAutoComplete.length) {
      setTimeout(() => {
        index.current = 1;
        setAutoText("Welcome");
      }, restartDelay);
    } else {
      const timer = setTimeout(() => {
        setAutoText("Welcome" + textAutoComplete.slice(0, index.current));
        index.current++;
      }, speed);
      return () => clearTimeout(timer); // Cleanup the timer on component unmount
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [autoText, restartDelay]);


  const handleSignIn = (e) => {
    e.preventDefault(); // This prevents the default form submission behavior. Does not refresh the page
    const email = e.target.email.value;
    const password = e.target.password.value;

    signInWithEmailAndPassword(userLoginDatabase, email, password)
      .then((data) => {
        console.log("Login Success");
        console.log(data, "authData");

        reroute("/home"); // Make sure this route is defined in your router
      })
      .catch((error) => {
        console.error(error.message);
        // Here, you would handle the error, e.g., display a login error message to the user
        alert("Invalid Credentials")
      });
  };

  const handleForgotPassword = () => {
    reroute("/forgot");
  };

  // SIGN IN BUTTON RIPPLE EFFECT EVENT HANDLER
  const createRipple = (event) => {
    const button = event.currentTarget;

    // Create a new span element for the ripple effect
    const ripple = document.createElement("span");
    const diameter = Math.max(button.clientWidth, button.clientHeight);
    const radius = diameter / 2;

    // Set the size and position of the ripple
    ripple.style.width = ripple.style.height = `${diameter}px`;
    ripple.style.left = `${event.clientX - button.offsetLeft - radius}px`;
    ripple.style.top = `${event.clientY - button.offsetTop - radius}px`;
    ripple.className = 'ripple';

    // Add the ripple element to the button and remove it after animation
    button.appendChild(ripple);
    setTimeout(() => ripple.remove(), 600); // Corresponds with the animation duration
  };

  return (
    <div className="login-container">
      <div className="login-content">
        <div className="logo-section">
          <div className="logo">
            <img className="logo-image" src={logo} alt="JobDock Logo" />
          </div>
          <p className="tagline">
            No need to venture out into rough waters to keep track of all those
            job applications. With JobDock, <br />
            anchor all your applications to one place⚓
          </p>
        </div>
        <div className="form-section">
          <h1 id='auto-text'>{autoText}</h1>
          <form onSubmit={handleSignIn}>
            <input name="email" type="email" placeholder="email" required />
            <input
              name="password"
              type="password"
              placeholder="password"
              required
            />
          <div className="form-footer">
              <button type="submit" className="signin-content-button" onClick={createRipple}>
                  Sign In
              </button>
              <button type="button" onClick={() => reroute("/register")}>
                  Register
              </button>
              <button type="button" onClick={handleForgotPassword}>
                  Forgot Password?
              </button>
            </div>
          </form>
        </div>
      </div>
      <div className="about-description">
          <h3>Developers: Loyd Flores & Ehab Abdalla </h3>
          <a className="about-link" href="/about">About</a>

      </div>

    </div>
  );
}

export default Login;
