// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";


// // Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: "AIzaSyB6cb7i9V6zuQwGBfln-5MxXvPGkrugF9c",
//   authDomain: "rentifydrive.firebaseapp.com",
//   projectId: "rentifydrive",
//   storageBucket: "rentifydrive.appspot.com",
//   messagingSenderId: "587298739445",
//   appId: "1:587298739445:web:b1dd910bfcc43d0923e1bc",
//   measurementId: "G-XF6F8MNJBC"
// };

// // Initialize Firebase
// export const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID,
  measurementId: import.meta.env.VITE_FIREBASE_MEASUREMENT_ID
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
