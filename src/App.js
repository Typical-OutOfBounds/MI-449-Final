import './App.css';
import Home from "./routes/Home"
import Classes from "./routes/Classes"
import Personal from "./routes/Personal"
import Navbar2 from "./components/Navbar"
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import NavContext from './contexts/NavContext';
import React from 'react';
import Feedback from './routes/Feedback';

function App() {
  const [activePage, setActivePage] = React.useState('/');

  const handlePageChange = (newPage) => {
    console.log("Changing the active page to ", newPage);
    setActivePage(newPage);
    console.log("I am here")
    console.log("The active page is ", activePage);
  };

  // const location = useLocation();

  // useEffect(() => {
  //   const activeLink = localStorage.getItem('activeLink');
  //   if (activeLink) {
  //     location.replace(activeLink);
  //   }
  // }, [location]);

  return (
    <Router>
      <div className="App">
        <NavContext.Provider value={{ activePage, onNavClick: handlePageChange }}>
          <Navbar2/>
          <div className="content">
            <Routes>
              <Route path="/" element={<Home/>}></Route>
              <Route path="/classes" element={<Classes/>}></Route>
              <Route path="/personal" element={<Personal/>}></Route>
              <Route path="/feedback" element={<Feedback/>}></Route>
            </Routes>
          </div>
        </NavContext.Provider>
        
      </div>
    </Router>
    
  );
}

export default App;
