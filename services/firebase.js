import { initializeApp } from 'firebase/app';
import { 
  getAuth,
  initializeAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  GoogleAuthProvider
} from 'firebase/auth';
import { getReactNativePersistence } from 'firebase/auth/react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyDj5bH-7SQto_-CE0Lnc3rnozun-l9qza0",
  authDomain: "fb-app-cli.firebaseapp.com",
  projectId: "fb-app-cli",
  storageBucket: "fb-app-cli.appspot.com",
  messagingSenderId: "49476995375",
  appId: "1:49476995375:web:3620f92ff44bda661af9da",
  measurementId: "G-EQKZJMRYNX"
};

const app = initializeApp(firebaseConfig);

// Initialize auth with persistence
const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(AsyncStorage)
});

const db = getFirestore(app);
const googleProvider = new GoogleAuthProvider();

export { 
  auth, 
  db, 
  googleProvider,
  signInWithEmailAndPassword, 
  createUserWithEmailAndPassword
};