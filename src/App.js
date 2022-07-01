import './App.css';



function App() {
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
          <input type='password' placeholder='Enter password' />
        </div>

        <button>LOGIN</button>
      </form>
    </>
  );
}

export default App;
