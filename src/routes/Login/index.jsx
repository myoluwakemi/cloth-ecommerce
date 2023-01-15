import { useState } from "react";
import { Link , useNavigate} from "react-router-dom";

import { signInAuthUserWithEmailAndPassword } from "../../utils/firebase/firebase.utils";

//** third party components */
import { Form, Label, Input, Button } from "reactstrap";

// **
import InputPasswordToggle from "../../components/InputPasswordToggle";

import "./styles.scss";
import AuthWrapper from "../Layout/AuthWrapper";

const defaultFormFields = {
  email: '',
  password: '',
};


const Login = () => {
  const nagivate = useNavigate()
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { email, password } = formFields;

  //reseting input fields
  const resetFormFields = () => {
    setFormFields(defaultFormFields)
    console.log('hee')
  }

  //track the changes in the input field
  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormFields({ ...formFields, [name]: value });
  };
  const handleSubmit = async(e) => {
    e.preventDefault();
    try{
     await signInAuthUserWithEmailAndPassword(email, password);
     nagivate('/shop')
     console.log('HRER')
     resetFormFields();
    }catch(error){
      switch (error.code) {
        case 'auth/wrong-password':
          alert('incorrect password for email');
          break;
        case 'auth/user-not-found':
          alert('no user associated with this email');
          break;
        default:
          console.log(error);
      }
    }
  }

  return (
    <AuthWrapper
      title="Welcome to Myk shop! 👋"
      subText="Please sign-in to your account and start the adventure"
      acctStatus="New on our platform?"
      acctToCreate="Create an account"
    >
      <Form onSubmit={ handleSubmit} className="auth-login-form">
        <div className="mb-1">
          <Label className="form-label" for="email">
            Email
          </Label>
          <Input
            type="email"
            id="email"
            placeholder="john@example.com"
            name="email"
            value={email}
            required
            onChange={handleChange}
        
          />
        </div>
        <div className="mb-1">
          <div className="d-flex justify-content-between">
            <Label className="form-label" for="login-password">
              Password
            </Label>
            <Link to="/register" className="to-forgotp">
              <small>Forgot Password?</small>
            </Link>
          </div>
          <InputPasswordToggle
          name="password"
          value={password}
          onChange={handleChange}
            className="input-group-merge"
            id="login-password"
            
          />
        </div>
        <div className="form-check mb-1">
          <Input type="checkbox" id="remember-me" />
          <Label className="form-check-label" for="remember-me">
            Remember Me
          </Label>
        </div>
        <Button color="primary" block>
          Sign in
        </Button>
      </Form>
    </AuthWrapper>
  );
};
export default Login;
