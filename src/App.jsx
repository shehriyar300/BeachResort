import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./Components/Home";
import Rooms from "./Components/Rooms";
import Imj from "./assets/logo.svg";
function App() {
  return (
    <>
      <Router>
        <nav className="nav">
          <ul>
            <li>
              <img src={Imj} alt="Logo" />
            </li>
            <li>
              <Link to="/">
                <p>Home</p>
              </Link>
            </li>
            <li>
              <Link to="/rooms">
                <p>Rooms</p>
              </Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/rooms" element={<Rooms />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
