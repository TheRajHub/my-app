import { useContext, useState } from "react";
import styles from "./Login.module.css";
import UserDataContext from './Context/UserDataContext'
import { useNavigate } from 'react-router-dom';
export default function Auth() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [isSignup, setIsSignup] = useState(false);
  const {setData}=useContext(UserDataContext)
  const navigate=useNavigate()


  const handleSubmit = async(e) => {
    e.preventDefault();
    if (!email || !password || (isSignup && !confirmPassword)) {
      setError("Please fill in all fields");
      return;
    }
    if (isSignup && password !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }
    setError("");
    try{
      let d=await fetch('http://localhost:8000/',{
        method:'POST',
        headers:{ 'Content-Type': 'application/json' },
        body:JSON.stringify({username:email,password:password})
      })
      d=await d.json()
      setData(d)
      navigate('/dashboard')
    }catch(a){
      console.log(a)
      alert(a)
    }

  };

  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <h2 className={styles.title}>{isSignup ? "Create Account" : "Login"}</h2>
        <form onSubmit={handleSubmit}>
          <div className={styles.inputGroup}>
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className={styles.input}
            />
          </div>
          <div className={styles.inputGroup}>
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className={styles.input}
            />
          </div>
          {isSignup && (
            <div className={styles.inputGroup}>
              <input
                type="password"
                placeholder="Confirm Password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                className={styles.input}
              />
            </div>
          )}
          {error && <p className={styles.error}>{error}</p>}
          <button type="submit" className={styles.button}>
            {isSignup ? "Create Account" : "Login"}
          </button>
        </form>
        <p className={styles.toggleText}>
          {isSignup ? "Already have an account? " : "Don't have an account? "}
          <span className={styles.toggleLink} onClick={() => setIsSignup(!isSignup)}>
            {isSignup ? "Login" : "Sign up"}
          </span>
        </p>
      </div>
    </div>
  );
}
