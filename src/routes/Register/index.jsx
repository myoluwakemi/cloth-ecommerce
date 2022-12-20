import AuthWrapper from "../Layout/AuthWrapper";
import { Link } from "react-router-dom";

//** third party components */
import {
  Form,
  Label,
  Input,
  Button,
} from "reactstrap";

import InputPasswordToggle from "../../components/InputPasswordToggle";

const Register = () => {
  return (
    <AuthWrapper title="Adventure starts here 🚀" subText='Make your app management easy and fun!' acctStatus='Already have an account' acctToCreate="Sign in instead"  >
      <Form className="auth-login-form">
         <div className='mb-1'>
                <Label className='form-label' for='register-username'>
                  Username
                </Label>
                <Input type='text' id='register-username' placeholder='johndoe' autoFocus />
              </div>
        <div className="mb-1">
          <Label className="form-label" for="login-email">
            Email
          </Label>
          <Input type="email" id="login-email" placeholder="john@example.com" />
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
            id="login-password"
          />
        </div>
        <div className="form-check mb-1">
         <Input type='checkbox' id='terms' />
                <Label className='form-check-label' for='terms'>
                  I agree to
                  <a className='ms-25' href='/' onClick={e => e.preventDefault()}>
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
