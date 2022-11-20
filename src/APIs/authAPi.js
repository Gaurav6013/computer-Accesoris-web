import {
  createUserWithEmailAndPassword,
  getAuth,
  GoogleAuthProvider,
  onAuthStateChanged,
  sendEmailVerification,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import {auth} from '../Firebase';
import { history } from "../history";

export const SignupApi = (values) => {
  console.log("SignupApi", values);
  return new Promise((resolve, reject) => {
    createUserWithEmailAndPassword(auth, values.Email, values.Password)
      .then((userCredential) => {
        const user = userCredential.user;
        onAuthStateChanged(auth, (user) => {
          console.log(user);
          if (user) {
            const uid = user.uid;
            sendEmailVerification(auth.currentUser).then(() => {
              console.log(" Email verification sent!");
            });
          }
        });
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode);
      });
  });
};
export const SignInApi = (values) => {
  console.log(values, "user Done");
  return new Promise((resolve, reject) => {
    signInWithEmailAndPassword(auth, values.email, values.password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log(user);
        if (!user.emailVerified) {
          console.log("Please verify your email");
        } else {
          console.log("Login in successfully");
        }
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
      });
  });
};

export const signOutAPI = () => {
  console.log("logout successfully");
   return new Promise((resolve,reject) => {
        signOut(auth).then(() => {
          resolve("Sign-out successful");
          history.push("/login");
        }).catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            reject(errorCode,"something went to wrong");
        });
   });
}

export const googleSigninAPI = () => {
  return new Promise((resolve,reject) => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
    .then((result) => {
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential.accessToken;
      const user = result.user;
      console.log(user);
      resolve({payload:user});
      history.push("/");
    }).catch((error) => {
      const errorCode = error.code;
      reject(errorCode);
      const errorMessage = error.message;
      const email = error.customData.email;
      const credential = GoogleAuthProvider.credentialFromError(error);
    })
  });
}
export const resetPasswordAPI =({email}) =>{
    return new Promise((resolve,reject) => {
      const auth = getAuth();
      sendPasswordResetEmail(auth, email)
        .then(() => {
            resolve("Password reset email sent!");
            history.push("/");
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          if (errorCode.localeCompare("auth/invalid-value-(email),-starting-an-object-on-a-scalar-field") === 0) {
            reject("Please Enter registred email");
          } else {
            reject("Somthing went wrong");
          }
        });
    })
}
