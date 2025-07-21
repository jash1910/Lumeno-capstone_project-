// firebase.js
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyD-aTYK_6anedQI2Ke4lHD50-c9dxz4tmE",
  authDomain: "lumeno-96560.firebaseapp.com",
  projectId: "lumeno-96560",
  storageBucket: "lumeno-96560.appspot.com",
  messagingSenderId: "1077135283431",
  appId: "1:1077135283431:web:dd95f04a5258bfd3783e42",
  measurementId: "G-FH46YB281B"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
