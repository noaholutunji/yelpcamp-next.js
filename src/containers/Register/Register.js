import React, { useState } from 'react';
import Router from 'next/router';
import axios from '../../axios-order';


const Register = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleUsernameChange = event => setUsername(event.target.value);
  const handlePasswordChange = event => setPassword(event.target.value);

  const handleSubmit = event => {
    event.preventDefault();
    const data = {
      username,
      password,
    };
    axios
      .post('/register', data)
      .then(response => {
        if (response.data) {
          localStorage.setItem('token', response.data.token);
          Router.push('/login');
        } else {
          console.log('Register Error');
        }
      })
      .catch(error => {
        console.log(error.response);
      });
  };

  return (
    <div className="container">
      <h1 style={{ textAlign: 'center' }}>Register</h1>
      <div style={{ width: '30%', margin: '25px auto' }}>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <input
              className="form-control"
              type="text"
              placeholder="username"
              value={username}
              onChange={handleUsernameChange}
            />
          </div>
          <div className="form-group">
            <input
              className="form-control"
              type="password"
              placeholder="password"
              value={password}
              onChange={handlePasswordChange}
            />
          </div>
          <button className="btn btn-primary" type="submit">
            Submit
          </button>
        </form>
        <p style={{ paddingTop: '10px' }}>
          <a href="/login">Click here to login</a>
        </p>
      </div>
    </div>
  );
};

export default Register;
