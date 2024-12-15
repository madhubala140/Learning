import React, { useState } from 'react';
import axios from '../services/api';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleRegister = async () => {
    try {
      const res = await axios.post('/auth/register', { name: 'Test User', email, password });
      alert('Registration successful!');
      localStorage.setItem('token', res.data.token);
    } catch (err) {
      console.error(err.response.data.msg);
    }
  };

  return (
    <div>
      <h2>Register</h2>
      <input type="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
      <input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
      <button onClick={handleRegister}>Register</button>
    </div>
  );
};

export default Login;
