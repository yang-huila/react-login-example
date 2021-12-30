import React, { useRef } from 'react';

function Signup() {
  const idRef = useRef();
  const passwordRef = useRef();
  const passwordConfirmRef = useRef();

  return (
    <div>
      <h2>Sign Up</h2>
      <form>
        <div>
          <label>Id:</label>
          <input type="text" ref={idRef} />
        </div>
        <div>
          <label>Password:</label>
          <input type="password" ref={passwordRef} />
        </div>
        <div>
          <label>Password Confirmation:</label>
          <input type="password" ref={passwordConfirmRef} />
        </div>
        <button type="submit">Sign Up</button>
      </form>
      <div>Already have an account? Log In</div>
    </div>
  );
}

export default Signup;
