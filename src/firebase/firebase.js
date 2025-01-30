import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
const firebaseConfig = {
  apiKey: 'AIzaSyCHfF3SIRKm4-8EvnEQ_agYro2zIX49TgI',
  authDomain: 'ecomfracture.firebaseapp.com',
  projectId: 'ecomfracture',
  storageBucket: 'ecomfracture.firebasestorage.app',
  messagingSenderId: '649341461247',
  appId: '1:649341461247:web:731c506066194a491222ca',
  measurementId: 'G-ZPN8W3P3DW',
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
