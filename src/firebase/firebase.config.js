// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.ENV_APIKEY,
  authDomain: import.meta.env.ENV_AUTHDOMAIN,
  projectId: import.meta.env.ENV_PROJECTID,
  storageBucket: import.meta.env.ENV_SORAGEBUKKET,
  messagingSenderId: import.meta.env.ENV_MASSEGESENDERID,
  appId: import.meta.env.ENV_APPID,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;