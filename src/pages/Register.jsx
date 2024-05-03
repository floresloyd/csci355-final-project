import { createUserWithEmailAndPassword } from "firebase/auth";
import { userLoginDatabase } from "../FirebaseClient";
import { useNavigate } from "react-router-dom";
import './Register.css'
import { useState } from "react";

function Register() {
  // Redirect to home
  const reroute = useNavigate();
  // States for password strength bar
  const [password, setPassword] = useState("");
  const [passwordStrength, setPasswordStrength] = useState({ color: 'transparent', message: '' });



  const handleRegister = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    // Passowrd must be at least 6 characters
    // Valid email must occur
    // email already in use
      createUserWithEmailAndPassword(userLoginDatabase, email, password).then(
        (data) => {
          console.log(data, "authData");
          // If we login succesfully, we can login
          alert("Account Creation Complete!")
          reroute("/");
          }
      ); 
    };

    const handlePasswordChange = (event) => {
      const newPassword = event.target.value;
      setPassword(newPassword);
  
      if (newPassword.length < 6) {
        setPasswordStrength({ color: 'red', message: 'Weak' });
      } else if (newPassword.length >= 6 && !/\d/.test(newPassword)) {
        setPasswordStrength({ color: 'yellow', message: 'Moderate' });
      } else if (newPassword.length > 10 && /\d/.test(newPassword)) {
        setPasswordStrength({ color: 'green', message: 'Strong' });
      }
    };



    // Function to handle random password generation
    const generateRandomPassword = () => {
      const chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
      let newPassword = '';
      for (let i = 0; i < 12; i++) {
        newPassword += chars.charAt(Math.floor(Math.random() * chars.length));
      }
      setPassword(newPassword);
      evaluatePasswordStrength(newPassword); // Recalculate strength for the generated password
      alert(`Generated Password: ${newPassword}`);
    };

      // Extracted password strength evaluation function
  const evaluatePasswordStrength = (password) => {
    if (password.length < 6) {
      setPasswordStrength({ color: 'red', message: 'Weak' });
    } else if (password.length >= 6 && password.length <= 10) {
      setPasswordStrength({ color: 'yellow', message: 'Moderate' });
    } else if (password.length > 10 && /\d/.test(password)) {
      setPasswordStrength({ color: 'green', message: 'Strong' });
    } else {
      setPasswordStrength({ color: 'green', message: 'Moderate' }); // Adjust as needed
    }
  };
  


      return (
        <div className="register-container">
          <button className="back-button" onClick={() => reroute(-1)}>⬅</button>
          <div className="register-content">
            <h1>Sign Up for JobDock!</h1>
            <form onSubmit={handleRegister}>
              <input name="email" type="email" placeholder="Email" required />
              {password && (
                <div className="password-strength-bar" style={{ backgroundColor: passwordStrength.color }}>
                  {passwordStrength.message}
                </div>
              )}
              <input className="pw-strength" name="password" type="password" placeholder="Password" required value={password} onChange={handlePasswordChange} />
              <button type="submit">Sign Up</button>
              <button type="button" className="generate-password" onClick={generateRandomPassword}>Generate Strong Password</button>
            </form>
          </div>
        </div>
      );
}

export default Register;
