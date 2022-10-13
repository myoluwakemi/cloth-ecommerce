import { useState} from "react";

import {
  createAuthWithEmailandPassword,
  createUserDocumentFromAuth,
} from "../../utils/firebase/firebase.utils";


import FormInput from "../form-input/form-input.component";
import Button from "../button/button.component";

import './sign-up-form.component.scss'


const defaultFormField = {
  displayName: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const SignUpForm = () => {
  const [formFields, setFormFields] = useState(defaultFormField);
  const { displayName, email, password, confirmPassword } = formFields;

  const resetFormField = () => {
    setFormFields(defaultFormField);
  };
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
  };
  const handleSubmit = async (event) => {
    event.preventDefault();

    if (password !== confirmPassword) {
      alert("password has to be the same");
      return;
    }
    try {
      const { user } = await createAuthWithEmailandPassword(email, password);


      const userDocRef = await createUserDocumentFromAuth(user, {
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
    <div className="sign-up-container">
        <h2>Don't have an account?</h2>
      <span>Sign up with your email and password</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          label="Display Name"
          inputOptions={{
            required: true,
            type: "text",
            onChange: handleChange,
            name: "displayName",
            value: displayName,
          }}
        />

        <FormInput
          label="Email"
          inputOptions={{
            required: true,
            type: "email",
            onChange: handleChange,
            name: "email",
            value: email,
          }}
        />

        <FormInput
          label="Password"
          inputOptions={{
            required: true,
            type: "password",
            onChange: handleChange,
            name: "password",
            value: password,
          }}
        />

        <FormInput
          label="Confirm Password"
          inputOptions={{
            required: true,
            type: "password",
            onChange: handleChange,
            name: "confirmPassword",
            value: confirmPassword,
          }}
        />
        <Button type="submit">sign up</Button>
      </form>
    </div>
  );
};
export default SignUpForm;
