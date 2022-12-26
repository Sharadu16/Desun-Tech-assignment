
import './App.css';
import Home from './components/Home';
import Login from './components/Login';
import Navbar from './components/Navbar';
import {Route,Routes} from "react-router-dom";
import Signup from './components/Signup';
import GameList from './components/GameList';

function App() {
  return (
    <>
      <Navbar/>
      <Routes className="App">
        <Route path="/" element={<Home/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/Signup" element={<Signup/>} />
        <Route path="/gameList" element={<GameList/>} />
      </Routes>
    </>
  );
}

export default App;
