import { useState } from "react";

// Комментарии - различные варианты написания кода

const Login = () => {
  // const [username, setUsername] = useState("");
  // const [password, setPassword] = useState("");
  const [data, setData] = useState({ username: "", password: "" });

  const handleFormSubmit = (event) => {
    event.preventDefault();

    // const userData = {
    //   username,
    //   password,
    // };

    // alert(JSON.stringify(userData));
    alert(JSON.stringify(data));
  };

  const handleInputChange = (e, name) => {
    setData({ ...data, [name]: e.target.value });
  };

  return (
    <>
      <h1>Login Form</h1>
      <form onSubmit={handleFormSubmit}>
        <label>
          Username:
          <input
            type="text"
            // value={username}
            // onChange={(e) => setUsername(e.target.value)}
            value={data.username}
            // onChange={(e) => setData({ ...data, username: e.target.value })}
            onChange={(e) => handleInputChange(e, "username")}
          />
        </label>
        <label>
          Password:
          <input
            type="password"
            // value={password}
            // onChange={(e) => setPassword(e.target.value)}
            value={data.password}
            // onChange={(e) => setData({ ...data, password: e.target.value })}
            onChange={(e) => handleInputChange(e, "password")}
          />
        </label>
        <button type="submit">Login</button>
      </form>
    </>
  );
};

export default Login;
