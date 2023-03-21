import logo from './logo.svg';
import './App.css';
import TellMeAJoke from './components/pure/TellMeAJoke';
import Likes from './components/pure/Likes'

function App() {
  return (
    <div id='appContainer'>
      <TellMeAJoke></TellMeAJoke>
      <Likes></Likes>
    </div>
    
  );
}

export default App;
