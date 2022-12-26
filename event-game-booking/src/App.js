
import './App.css';
import Home from './components/Home';
import Login from './components/Login';
import Navbar from './components/Navbar';
import {Route,Routes} from "react-router-dom";
import Signup from './components/Signup';

function App() {
  return (
    <>
      <Navbar/>
      <Routes className="App">
        <Route path="/" element={<Home/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/Signup" element={<Signup/>} />
      </Routes>
    </>
  );
}

export default App;
