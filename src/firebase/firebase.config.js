// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCt-iEVdchY7vC8nZIweT_eErKcLEaLzjA",
  authDomain: "my-toy-project-eb4f6.firebaseapp.com",
  projectId: "my-toy-project-eb4f6",
  storageBucket: "my-toy-project-eb4f6.appspot.com",
  messagingSenderId: "117740889281",
  appId: "1:117740889281:web:864db781adac3cbda0e040"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;