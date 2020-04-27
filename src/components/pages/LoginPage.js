import React from "react";
import LoginForm from "../forms/LoginForm";

const LoginPage = () => {
  const handleSubmit = (data) => {
    console.log(data);
  };

  return (
    <div>
      <h1>Login page</h1>
      <LoginForm submit={handleSubmit} />
    </div>
  );
};

export default LoginPage;
