// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCegRItFl45yFVYlewbmvp7PIGMDt0UY28",
  authDomain: "computer-web-1033f.firebaseapp.com",
  projectId: "computer-web-1033f",
  storageBucket: "computer-web-1033f.appspot.com",
  messagingSenderId: "467082966609",
  appId: "1:467082966609:web:1278151f69056d046aaa70",
  measurementId: "G-FGMY0HZGJG"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);