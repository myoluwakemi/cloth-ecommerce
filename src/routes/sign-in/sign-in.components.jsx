
import SignUpForm from "../../components/sign-up-form/sign-up-form.component";
import {
  signInWithGooglePopup,
  createUserDocumentFromAuth,
} from "../../utils/firebase/firebase.utils";
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
    <div>
      <h1>Sign in page</h1>
      <button onClick={logGoogleUser}>sign in with google popup</button>
      <SignUpForm/>

    </div>
  );
};
export default SignIn;
