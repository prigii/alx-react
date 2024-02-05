import './Login.css';


function App() {
  return (
    
      <body className="App-body">
        <p>Login to access the full dashboard</p>

        <form>

          {/* Email */}
          <div>
            <label htmlFor="email">Email: </label>
              <input type="email" id="email" />            
          </div>

          {/* Password Input */}
          <div>
            <label htmlFor="password">Password: </label>
            <input type="password" id="password" />
          </div>

          {/* OK Button */}
          <button>OK</button>
        </form>
      </body>
    
  );
}

export default App;