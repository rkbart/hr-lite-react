import './index.css';
import { useState } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Layout from './layout';
import Login from './components/pages/login';

function App() {

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <Router>
      {isLoggedIn ? (
        <Layout onLogout={() => setIsLoggedIn(false)} />
      ) : (
        <Login onLogin={() => setIsLoggedIn(true)} />
      )}
    </Router>
  );
}

export default App;
