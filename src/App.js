import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import './App.css';
import Navbar from './navbar';
import Login from './login';
import Home from './home';
import Contact from './contact';
import Post from './post';
import { auth } from './firebase';
import { onAuthStateChanged, signOut } from 'firebase/auth';

const App = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
    });
    return () => unsubscribe();
  }, []);

  const handleLogout = () => {
    signOut(auth);
    setUser(null);
  };

  return (
    <Router>
      <Navbar user={user} onLogout={handleLogout} />
      <Routes>
        <Route path="/" element={<Home />} />
        { <Route path="/contact" element={<Contact />} />}
        <Route path="/login" element={<Login onLogin={setUser} />} />
        <Route path="/post" element={<Post />} />
      </Routes>
    </Router>
  );
};

export default App;

