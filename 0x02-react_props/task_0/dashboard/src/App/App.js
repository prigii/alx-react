import logo from './holberton-logo.jpg';
import './App.css';
import { getFooterCopy, getFullYear } from './utils';
import Notifications from '../Notifications/Notifications';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Login from '..Login/Login';

function App() {
  return (
    <React.Fragment>
      <Notifications />
      <div className="App">        
        <Header />        
          <Login />       
          <Footer />             
      </div>
    </React.Fragment>
  );
}

export default App;