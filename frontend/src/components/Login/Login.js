import React, { useState } from "react";
import { Button, FormGroup, FormControl, ControlLabel } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import "../../styles/Login.css";
import fetchDataGeneral from "../../utilities/generalFetch";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loginError, setLoginError] = useState("");
  const history = useHistory();

  const onUsernameChange = (e) => {
    if (loginError) {
      setLoginError("");
    }
    setUsername(e.target.value);
  };

  const onPasswordChange = (e) => {
    if (loginError) {
      setLoginError("");
    }
    setPassword(e.target.value);
  };

  const loginUser = async () => {
    const endpoint = "/login";
    const method = "POST";
    const loginData = {
      username,
      password,
    };

    try {
      const loginResponse = await fetchDataGeneral(endpoint, method, loginData);
      window.localStorage.token = loginResponse.token;
      setPassword("");
      setUsername("");
      history.push("/main");
    } catch (error) {
      setLoginError(error.message);
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!username || !password) {
      setLoginError("All the input fields are required");
      return null;
    }
    loginUser();
    return null;
  };

  const errorStyle = {
    borderBottom: "2px solid rgb(221,67,48)",
  };
  return (
    <div>
      <h1>Reddit Login</h1>
      <form onSubmit={handleSubmit} className="user-form">
        <input
          type="text"
          id="username-input"
          value={username}
          placeholder="Username"
          onChange={onUsernameChange}
        />
        <input
          type="password"
          id="password-input"
          value={password}
          placeholder="Password"
          onChange={onPasswordChange}
          style={loginError ? errorStyle : null}
        />
        {loginError && (
          <div className="error-message">
            <p>{loginError}</p>
            <i className="fas fa-exclamation-triangle" />
          </div>
        )}
        <button type="submit">LOGIN</button>
      </form>
    </div>
  );
}
