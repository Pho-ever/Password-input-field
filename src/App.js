import './App.css';
import { useState } from 'react'



function App() {
  const [showPassword, setShowPassword] = useState(false);
  const handlePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  return (
    <>
      <form className="form">
        <div className="heading">LOGIN</div>
        <div className="email">
          <label>
            Email:
          </label>
          <input type='email' placeholder='Enter email address' />
        </div>
        <div className="password">
          <label>
            Password:
          </label>
          <input
            // type={showPassword ? 'text' : 'password'}
            type="password"
            placeholder='Enter password'
          />
          <div
            // className={`${showPassword ? 'show-password' : 'hide-password'}`}
            className="show-password"
          ></div>
        </div>

        <button>LOGIN</button>
      </form>
    </>
  );
}

export default App;
