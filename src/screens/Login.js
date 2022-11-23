import React, { useState } from "react";
import axios from "axios";

const Login = () => {
  const [username, setUsername] = useState("");
  
  const [emailForRegister, setEmailForRegister] = useState("");
  const [passwordForRegister, setPasswordForRegister] = useState("");

  const [emailForLogin, setEmailForLogin] = useState("");
  const [passwordForLogin, setPasswordForLogin] = useState("");

  const handleLoginSubmit = async (e) => {
    e.preventDefault();
    console.log("login form data", {
      email: emailForLogin,
      password: passwordForLogin,
    })

    // await axios
    //   .post(
    //     // "http://localhost:8000/api/v1/login/admin",
    //     "https://cgc-ecommerce-app.herokuapp.com/api/v1/login/admin",
    //     // "https://yourposhub.com/api/v1/login/admin",
    //     // http://35.154.23.158:4000
    //     //http://35.154.23.158:4000/api/v1/login/admin,
    //     { email:"test@test.com", password:"test@1234" } ,
    //     {
    //       headers: { "Content-Type": "application/json" },
    //       withCredentials: true,
    //     }
    //   )
    //   .then((res) => console.log(res));

        const requestOptions1 = {
          mode: 'no-cors',
          method: "POST",
          headers: { "Content-Type": "application/json" },
          credentials: 'same-origin',
          body: JSON.stringify({
            email: emailForLogin,
            password: passwordForLogin,
          }),
        };
      // await fetch("https://yourposhub.com/api/v1/login/admin",requestOptions).then((res) => console.log(res));
      // await fetch("http://localhost:8000/api/v1/login/admin",requestOptions).then((res) => console.log(res));
      await fetch("https://cgc-ecommerce-app.herokuapp.com/api/v1/login/admin",requestOptions1).then((res) => console.log(res));
  };
  const handleRegisterSubmit = async (e) => {
    e.preventDefault();
    console.log("registeration form data",{
      username:username,
      email: emailForRegister,
      password: passwordForRegister,
    })
    // await axios
    //   .post(
    //     "http://localhost:8000/api/v1/register/admin",
    //     // "https://yourposhub.com/api/v1/register/admin",
    //     // http://35.154.23.158:4000
    //     //http://35.154.23.158:4000/api/v1/register/admin
    //     // {
    //     //   email: "test@test.com",
    //     //   password: "test@1234",
    //     // },
    //     { username:"testuser", email:"test@test.com", password:"test@1234" } ,
    //     {
    //       headers: { "Content-Type": "application/json" },
    //       withCredentials: true,
    //     }
    //   )
    //   .then((res) => console.log(res));

        const requestOptions2 = {
          mode: 'no-cors',
          method: "POST",
          headers: { "Content-Type": "application/json" },
          // body: JSON.stringify({
          //   email: "test@test.com",
          //   password: "test@1234",
          // }),
          credentials: 'same-origin',
          body: JSON.stringify({
            username:username,
            email: emailForRegister,
            password: passwordForRegister,
          }),
        };
      // await fetch("https://yourposhub.com/api/v1/login/admin",requestOptions).then((res) => console.log(res));
      // await fetch("http://localhost:8000/api/v1/register/admin",requestOptions).then((res) => console.log(res));
      await fetch("https://cgc-ecommerce-app.herokuapp.com/api/v1/register/admin",requestOptions2).then((res) => console.log(res));
  };

  return (
    <>
      <div>
        <h1>Registeration Form</h1>
        <form onSubmit={handleRegisterSubmit}>
          <input
            placeholder="enter username" value={username}
            onChange={(e) => setUsername(e.target.value)}
          /><br />
          <input
            placeholder="enter email" value={emailForRegister}
            onChange={(e) => setEmailForRegister(e.target.value)}
          /><br />
          <input
            placeholder="enter password" value={passwordForRegister}
            onChange={(e) => setPasswordForRegister(e.target.value)}
          /><br />

          <button type="submit">register</button>

        </form>
      </div>
      
      <br />

    <div>
      <h1>Login Form</h1>
      <form onSubmit={handleLoginSubmit}>
        <input
          placeholder="enter email" value={emailForLogin}
          onChange={(e) => setEmailForLogin(e.target.value)}
        /><br />
        <input
          placeholder="enter password" value={passwordForLogin}
          onChange={(e) => setPasswordForLogin(e.target.value)}
        /><br />
        <button type="submit">register</button>
      </form>
    </div>
    </>
  );
};

export default Login;
