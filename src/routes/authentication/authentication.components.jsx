
import SignUpForm from "../../components/sign-up-form/sign-up-form.component";
import SignInForm from "../../components/sign-in-form/sign-form.component";
import {
  signInWithGooglePopup,
  createUserDocumentFromAuth,
} from "../../utils/firebase/firebase.utils";
import './authentication.scss'
// import { getRedirectResult } from "firebase/auth";

const SignIn = () => {
//   const fetchUser = async () => {
//     const response = await getRedirectResult(auth);
//     if(response){
//         const userDocRef = await createUserDocumentFromAuth(response.user)
//     }
  
//   };
//   useEffect(() => {
//     fetchUser();
//   }, []);

  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopup();
    const userDocRef = await createUserDocumentFromAuth(user);
    console.log(userDocRef);
  };
//   const logGoogleUserWithRedirect = async () => {
//     const { user } = await signInWithGoogleRedirect();
//     console.log(user);
//   };
  return (
    <div className="authentication-container">
  
      <SignInForm/>
      <SignUpForm/>

    </div>
  );
};
export default SignIn;
