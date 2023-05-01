// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
console.log('Envrioment variable: ', import.meta.env.VITE_storageBucket);
const firebaseConfig = {
  // apiKey: "AIzaSyCpNfnDywOgEUQ3ppk_VZXWAQbl8WxnLjM",
  // authDomain: "news-website-client.firebaseapp.com",
  // projectId: "news-website-client",
  // storageBucket: "news-website-client.appspot.com",
  // messagingSenderId: "577042277955",
  // appId: "1:577042277955:web:7811795d263182cf39d6f6"

  apiKey: import.meta.env.VITE_apiKey,
  authDomain: import.meta.env.VITE_authDomain,
  projectId: import.meta.env.VITE_projectId,
  storageBucket: import.meta.env.VITE_storageBucket,
  messagingSenderId: import.meta.env.VITE_messagingSenderId,
  appId: import.meta.env.VIT_appId
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;