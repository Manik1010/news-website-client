// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCpNfnDywOgEUQ3ppk_VZXWAQbl8WxnLjM",
  authDomain: "news-website-client.firebaseapp.com",
  projectId: "news-website-client",
  storageBucket: "news-website-client.appspot.com",
  messagingSenderId: "577042277955",
  appId: "1:577042277955:web:7811795d263182cf39d6f6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;