import logo from './logo2.png';
import './App.css';
import Home from "./routes/Home"
import Classes from "./routes/Classes"
import Navbar2 from "./components/Navbar"
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar2/>
        <div className="content">
          <Routes>
            <Route path="/" element={<Home/>}></Route>
            <Route path="/classes" element={<Classes/>}></Route>
          </Routes>
        </div>
      </div>
    </Router>
    
  );
}

export default App;
