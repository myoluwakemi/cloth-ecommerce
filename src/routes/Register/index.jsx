import AuthWrapper from "../Layout/AuthWrapper";
import { Link } from "react-router-dom";

import {
  createAuthWithEmailandPassword,
  createUserDocumentFromAuth,
} from "../../utils/firebase/firebase.utils";

//** third party components */
import { Form, Label, Input, Button } from "reactstrap";

import InputPasswordToggle from "../../components/InputPasswordToggle";
import { useState } from "react";

const defaultFormField = {
  displayName: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const Register = () => {
  const [formFields, setFormFields] = useState(defaultFormField);

  const { displayName, email, password, confirmPassword } = formFields;

  const handleChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    setFormFields({ ...formFields, [name]: value });
  };
  const resetFormField = () => {
    setFormFields(defaultFormField);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (password !== confirmPassword) {
      alert("password has to be the same");
      return;
    }
    try {
      const { user } = await createAuthWithEmailandPassword(email, password);


      await createUserDocumentFromAuth(user, {
        displayName,
      });
      resetFormField();
    } catch (error) {
      console.log(error);
      const errorCode = error.code;
      console.log(errorCode);
    }
  };
  return (
    <AuthWrapper
      title="Adventure starts here 🚀"
      subText="Make your app management easy and fun!.................."
      acctStatus="Already have an account"
      acctToCreate="Sign in instead"
    >
      <Form onSubmit={handleSubmit} className="auth-login-form">
        <div className="mb-1">
          <Label className="form-label" for="register-username">
            Username
          </Label>
          <Input
            type="text"
            id="name"
            placeholder="johndoe"
            name="displayName"
            value={displayName}
            onChange={handleChange}
            autoFocus
          />
        </div>
        <div className="mb-1">
          <Label className="form-label" for="login-email">
            Email
          </Label>
          <Input
            type="email"
            id="email"
            placeholder="john@example.com"
            name="email"
            value={email}
            onChange={handleChange}
          />
        </div>
        <div className="mb-1">
          <div className="d-flex justify-content-between">
            <Label className="form-label" for="login-password">
              Password
            </Label>
            <Link to="/" className="to-forgotp">
              <small>Forgot Password?</small>
            </Link>
          </div>
          <InputPasswordToggle
            className="input-group-merge"
            id="password"
            name="password"
            value={password}
            onChange={handleChange}
          />
        </div>
        <div className="mb-1">
          <div className="d-flex justify-content-between">
            <Label className="form-label" for="login-password">
              Confirm Password
            </Label>
          </div>
          <InputPasswordToggle
            className="input-group-merge"
            id="confirm-password"
            name="confirmPassword"
            value={confirmPassword}
            onChange={handleChange}
          />
        </div>
        <div className="form-check mb-1">
          <Input type="checkbox" id="terms" />
          <Label className="form-check-label" for="terms">
            I agree to
            <a className="ms-25" href="/" onClick={(e) => e.preventDefault()}>
              privacy policy & terms
            </a>
          </Label>
        </div>
        <Button color="primary" block>
          Sign up
        </Button>
      </Form>
    </AuthWrapper>
  );
};
export default Register;
