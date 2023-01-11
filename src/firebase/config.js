
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyCM5Uud7CAQ4Yq607nxxCzQlMwiEjzbuEU",
  authDomain: "compar-7d2aa.firebaseapp.com",
  projectId: "compar-7d2aa",
  storageBucket: "compar-7d2aa.appspot.com",
  messagingSenderId: "488963479795",
  appId: "1:488963479795:web:1bf6425a3498b13017ff86"
};


const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export { db };