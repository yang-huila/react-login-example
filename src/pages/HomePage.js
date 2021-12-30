import React, { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import AuthContext from '../contexts/AuthContext';

function HomePage() {
  const { auth, setAuth } = useContext(AuthContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (!auth.isAuth) {
      navigate('/login');
    }
  }, []);

  return <div>home</div>;
}

export default HomePage;
