import './App.css';
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom'
import Register from './Components/Register'
import Login from './Components/Login'


function App() {
  
  return (
    <Router>
      <div>
        <header>
      <nav className="navbar">
          <Link className="navlinks" to="/">Home</Link>
          <Link className="navlinks" to="/register">Register</Link>
          <Link className="navlinks" to="/login">Login</Link>
        </nav>
        </header>
      <Routes>
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
      </Routes>
      </div>
    </Router>
  );
}

export default App;
