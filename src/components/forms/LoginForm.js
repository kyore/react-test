import React, { useState } from "react";
import PropTypes from "prop-types";
import { Form, Button } from "semantic-ui-react";
import Validator from "validator";
import InlineError from "../messages/InlineError";

const validate = (data) => {
  const errs = {};
  if (!Validator.isEmail(data.email)) errs.email = "Invalid email";
  if (!data.password) errs.password = "Can't be blank";
  return errs;
};

function LoginForm(props) {
  const [data, setData] = useState({ email: "", password: "" });
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

  const handleInput = (e) => {
    if (e.target.name === "email") setData({ ...data, email: e.target.value });
    if (e.target.name === "password")
      setData({ ...data, password: e.target.value });
  };

  const handleSubmit = () => {
    const errs = validate(data);
    setErrors(errs);

    if (Object.keys(errs).length === 0) {
      props.submit(data);
    }
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Field error={!!errors.email}>
        <label htmlFor="email">
          Email
          <input
            type="text"
            id="email"
            name="email"
            placeholder="example@example.com"
            value={data.email}
            onChange={handleInput}
          />
        </label>
        {errors.email && <InlineError text={errors.email} />}
      </Form.Field>

      <Form.Field error={!!errors.password}>
        <label htmlFor="password">
          Password
          <input
            type="password"
            id="password"
            name="password"
            onChange={handleInput}
          />
        </label>
        {errors.password && <InlineError text={errors.password} />}
      </Form.Field>
      <Button primary>Login</Button>
    </Form>
  );
}

LoginForm.propTypes = {
  submit: PropTypes.func.isRequired,
};

export default LoginForm;
