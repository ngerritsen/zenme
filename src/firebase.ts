import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyBaPaoiNM45fDfpSeSsbWUsqWZ6R2AL-u4",
  authDomain: "zenme-ad023.firebaseapp.com",
  projectId: "zenme-ad023",
  storageBucket: "zenme-ad023.appspot.com",
  messagingSenderId: "861685100652",
  appId: "1:861685100652:web:248ffcbeb8f55074c3e849"
};

const app = initializeApp(firebaseConfig);

export default app;