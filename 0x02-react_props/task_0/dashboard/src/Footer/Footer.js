import './Footer.css';
import { getFooterCopy, getFullYear } from './utils';


function App() {
  return (
 
      <footer className="App-footer">
        <p>{`${getFooterCopy(true)} - ${getFullYear()}`}</p>
      </footer>
   
  );
}

export default App;