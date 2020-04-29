import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import LoginForm from "../forms/LoginForm";
import { login } from "../../actions/auth";


const LoginPage = (props) => {
  const handleSubmit = (data) =>
    props.login(data).then(() => props.history.push("/"));
  return (
    <div>
      <h1>Login page</h1>
      <LoginForm submit={handleSubmit} />
    </div>
  );
};

LoginPage.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
  login: PropTypes.func.isRequired,
};

export default connect(null, { login })(LoginPage);
