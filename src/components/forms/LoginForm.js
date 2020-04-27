import React, { useState } from "react";
import PropTypes from "prop-types";
import { Form, Button } from "semantic-ui-react";
import Validator from "validator";
import InlineError from "../messages/InlineError";

const validate = (email, password) => {
  const errs = {};
  if (!Validator.isEmail(email)) errs.email = "Invalid email";
  if (!password) errs.password = "Can't be blank";
  return errs;
};

function useFormInput(initialValue) {
  const [value, setValue] = useState(initialValue);

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  return {
    value,
    onChange: handleChange,
  };
}

function LoginForm(props) {
  const email = useFormInput("");
  const password = useFormInput("");
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

  const handleSubmit = () => {
    const errs = validate(email.value, password.value);
    setErrors(errs);

    if (Object.keys(errs).length === 0) {
      props.submit(email.value, password.value);
    }
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Field error={!!errors.email}>
        <label htmlFor="email">
          Email
          <input
            type="text"
            placeholder="example@example.com"
            value={email.value}
            onChange={email.onChange}
          />
        </label>
        {errors.email && <InlineError text={errors.email} />}
      </Form.Field>

      <Form.Field error={!!errors.password}>
        <label htmlFor="password">
          Password
          <input type="password" onChange={password.onChange} />
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
