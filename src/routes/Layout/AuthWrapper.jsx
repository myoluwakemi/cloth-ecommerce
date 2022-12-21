import { Link } from "react-router-dom";

import { signInWithGooglePopup } from "../../utils/firebase/firebase.utils";

//** third party components */
import {
  CardTitle,
  Card,
  CardBody,
  CardText,
  Button,
} from "reactstrap";
import { Mail } from "react-feather";


// **

const AuthWrapper= ({title, subText, children, acctStatus, acctToCreate}) => {

  const signInWithGoogle = async (e) => {
    e.preventDefault()
    await signInWithGooglePopup()
  }
  return (
    <div className="wrapper">
      <div className="auth-wrapper auth-basic px-2">
        <div className="auth-inner my-2">
          <Card className="auth-card mb-0">
            <CardBody>
              <Link className="text-center logo" to="/">
                LOGO
              </Link>
              <CardTitle className="card-title">{title}</CardTitle>
              <CardText className="card-text">
               {subText}
              </CardText>
              
            {children}
              <p className="text-center mt-2">
                <span className="me-2">{acctStatus}?</span>
                <Link to="/">
                  <span>{acctToCreate}</span>
                </Link>
              </p>
               <div className='divider my-2'>
              <div className='divider-text'>or</div>
            </div>
             <div className='auth-footer-btn d-flex justify-content-center'>
             
              <Button color='google'  onClick={signInWithGoogle}>
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
export default AuthWrapper;
