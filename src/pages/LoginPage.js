import axios from 'axios';
import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react/cjs/react.development';
import { getFormData } from '../components/API';
import AuthContext from '../contexts/AuthContext';

function LoginPage() {
  const navigate = useNavigate();
  const { auth, setAuth } = useContext(AuthContext);
  const [inputs, setInputs] = useState({
    admin_id: '',
    admin_password: '',
  });

  useEffect(() => {
    if (auth.isAuth) {
      navigate('/');
    }
  }, [auth]);

  function handleChange(e) {
    const { value, name } = e.target;
    setInputs({
      ...inputs,
      [name]: value,
    });
  }

  function handleReset() {
    setInputs({
      admin_id: '',
      admin_password: '',
    });
  }

  function handleSubmit(e) {
    e.preventDefault();
    const baseUrl = 'https://huila919.cafe24.com/react/ajax/ajax.login.php';
    const formData = getFormData(inputs);
    axios
      .post(baseUrl, formData, { 'Content-Type': 'multipart/form-data' })
      .then((response) => {
        const { msg, rows } = response.data;
        if (msg) {
          setAuth({
            admin_id: rows[0]['admin'],
            isAuth: true,
          });
        }
      })
      .catch((e) => {
        console.log(e);
      });
    handleReset();
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>아이디</label>
        <input
          name="admin_id"
          type="text"
          placeholder="아이디를 입력하세요"
          onChange={handleChange}
        />
      </div>
      <div>
        <label>패스워드</label>
        <input
          name="admin_password"
          type="password"
          placeholder="패스워드를 입력하세요"
          onChange={handleChange}
        />
      </div>
      <input type="submit" value="로그인" />
    </form>
  );
}

// function LoginPage() {
//   const [inputs, setInputs] = useState({
//     admin_id: '',
//     admin_pw: '',
//   });
//   const { auth, setAuth } = useContext(AuthContext);
//   const baseUrl = 'https://huila919.cafe24.com/react/ajax/ajax.login.php';
//   function handleClick() {
//     const data = { admin_id: 'admin', admin_password: '1234' };
//     const formData = getFormData(data);

//     axios
//       .post(baseUrl, formData, {
//         'Content-Type': 'multipart/form-data',
//       })
//       .then((response) => {
//         console.log(response.data.msg);
//       })
//       .catch((e) => {
//         console.log(e);
//       });
//   }
//   return (
//     <div>
//       <button onClick={handleClick}>테스트</button>
//     </div>
//   );
// }

export default LoginPage;
