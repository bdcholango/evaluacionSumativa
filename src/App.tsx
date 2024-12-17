// src/App.tsx

import React, { useState } from 'react';
import './App.css';
import Login from './Login';

const App: React.FC = () => {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);

  const handleLogin = (username: string, password: string) => {
    // Lógica de validación (puedes conectar a una API aquí)
    if (username === 'admin' && password === 'password123') {
      setIsLoggedIn(true);
      alert('Login successful!');
    } else {
      alert('Invalid credentials');
    }
  };

  return (
    <div className="App">
      {!isLoggedIn ? (
        <Login onLogin={handleLogin} />
      ) : (
        <h2>Welcome, you are logged in!</h2>
      )}
    </div>
  );
};

export default App;
