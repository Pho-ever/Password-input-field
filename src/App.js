import './App.css';



function App() {
  return (
    <>
      <form className="form">
        <div className="heading">LOGIN</div>
        <div>
          <label>
            Email:
          </label>
          <input type='email' placeholder='Enter email address' />
        </div>
        <div>
          <label>
            password
          </label>
          <input type='password' placeholder='Enter password' />
        </div>

      </form>
    </>
  );
}

export default App;
