import React, { useState } from 'react';

function Contact() {
  const password = 'swordfish';
  const [authorized, setAuthorized] = useState(false);

  function handleSubmit(e) {
    const enteredPassword = e.target.querySelector(
      'input[type="password"]').value;
    const auth = enteredPassword == password;
    setAuthorized(auth)
  }

  const login = (
  <div>
    <h1>Password</h1>
    <form action="#" onSubmit={handleSubmit}>
      <input type="password" placeholder="Password" /> 
      <input type="submit" /> 
    </form>
  </div>);

  const contactInfo = (
  <div>
    <h1>Contact</h1>
    <ul>
      <li>
        client@example.com
      </li>
      <li>
        555.555.5555
      </li>
    </ul>
  </div>);

  return (
      <div id="authorization">
        {(authorized ? contactInfo : login)}
      </div>
  );
};

export default Contact;