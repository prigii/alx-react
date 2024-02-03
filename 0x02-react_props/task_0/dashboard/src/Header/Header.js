import logo from '../assets/holberton-logo.jpg';
import './Header.css';
import Notifications from '../Notifications/Notifications';

function App() {
  return (
    <div className="App">
       <Notifications />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>School dashboard</h1>
      </header>
     
    </div>
  );
}

export default App;