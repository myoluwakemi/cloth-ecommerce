import { Link } from "react-router-dom";

//** third party components */
import {
  CardTitle,
  Card,
  CardBody,
  CardText,
  Form,
  Label,
  Input,
  Button,
} from "reactstrap";
import { Mail } from "react-feather";

// **
import InputPasswordToggle from "../../components/InputPasswordToggle";

import "./styles.scss";

const Login = () => {
  return (
    <div className="wrapper">
      <div className="auth-wrapper auth-basic px-2">
        <div className="auth-inner my-2">
          <Card className="auth-card mb-0">
            <CardBody>
              <Link className="text-center logo" to="/">
                LOGO
              </Link>
              <CardTitle className="card-title">Welcome to ecommerce! 👋</CardTitle>
              <CardText className="card-text">
                Please sign-in to your account and start the adventure
              </CardText>
              <Form className="auth-login-form">
                <div className="mb-1">
                  <Label className="form-label" for="login-email">
                    Email
                  </Label>
                  <Input
                
                    type="email"
                    id="login-email"
                    placeholder="john@example.com"
                   
                  />
                </div>
                <div className='mb-1'>
                <div className='d-flex justify-content-between'>
                  <Label className='form-label' for='login-password'>
                    Password
                  </Label>
                  <Link to='/' className="to-forgotp">
                    <small>Forgot Password?</small>
                  </Link>
                </div>
                <InputPasswordToggle className='input-group-merge' id='login-password' />
              </div>
              <div className='form-check mb-1'>
                <Input type='checkbox' id='remember-me' />
                <Label className='form-check-label' for='remember-me'>
                  Remember Me
                </Label>
              </div>
              <Button color='primary' block>
                Sign in
              </Button>
              </Form>
              <p className="text-center mt-2">
                <span className="me-2">New on our platform?</span>
                <Link to="/register">
                  <span>Create an account</span>
                </Link>
              </p>
               <div className='divider my-2'>
              <div className='divider-text'>or</div>
            </div>
             <div className='auth-footer-btn d-flex justify-content-center'>
             
              <Button color='google' >
                <Mail color="white"  size={14} />
              </Button>
              
            </div>
            </CardBody>
          </Card>
        </div>
      </div>
    </div>
  );
};
export default Login;
