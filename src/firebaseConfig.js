// firebase.js
import { initializeApp } from '@react-native-firebase/app';
import auth from '@react-native-firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyCS721BILbzoSE1uS5yUncwuTtDxfWhuxk",
  authDomain: "fb-app-cli.firebaseapp.com",
  projectId: "fb-app-cli",
  storageBucket: "fb-app-cli.firebasestorage.app",
  messagingSenderId: "49476995375",
  appId: "1:49476995375:android:bd6000129c9efe731af9da",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Auth
const authInstance = auth();

export { authInstance as auth };