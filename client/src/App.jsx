import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import CreateProgram from './components/CreateProgram';
import RegisterClient from './components/RegisterClient';
import EnrollClient from './components/EnrollClient';
import SearchClient from './components/SearchClient';
import ClientProfile from './components/ClientProfile';
import './App.css'; // Import the CSS file

function App() {
  return (
    <Router>
      <div className="app-container">
        <header>
          <h1>Health Information System</h1>
        </header>
        <nav className="nav-bar">
          <Link to="/create-program">Create Program</Link>
          <Link to="/register-client">Register Client</Link>
          <Link to="/enroll-client">Enroll Client</Link>
          <Link to="/search-client">Search Client</Link>
        </nav>
        <main>
          <Routes>
            <Route path="/create-program" element={<CreateProgram />} />
            <Route path="/register-client" element={<RegisterClient />} />
            <Route path="/enroll-client" element={<EnrollClient />} />
            <Route path="/search-client" element={<SearchClient />} />
            <Route path="/client/:id" element={<ClientProfile />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;