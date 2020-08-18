import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firebase-firestore";

var firebaseConfig = {
  apiKey: "AIzaSyDOoD24r7pSDPKP_mZhJMjB2AGypUdeC_U",
  authDomain: "web-product-8bf10.firebaseapp.com",
  databaseURL: "https://web-product-8bf10.firebaseio.com",
  projectId: "web-product-8bf10",
  storageBucket: "web-product-8bf10.appspot.com",
  messagingSenderId: "10092948350",
  appId: "1:10092948350:web:870e041197cd2574a1212f",
  measurementId: "G-DNLZES75PT",
};

class Firebase {
  constructor(props) {
    firebase.initializeApp(firebaseConfig);
    this.auth = firebase.auth();
    this.db = firebase.firestore();
  }

  login(email, password) {
    return this.auth.signInWithEmailAndPassword(email, password);
  }

  logout() {
    return this.auth.signOut();
  }

  async register(name, email, password) {
    await this.auth.createUserWithEmailAndPassword(email, password);
    return this.auth.currentUser.updateProfile({
      displayName: name,
    });
  }

  isInitialCheck() {
    return new Promise((res, rej) => {
      this.auth.onAuthStateChanged((user) => {
        res(user);
      });
    });
  }

  currentUsername() {
    return this.auth.currentUser && this.auth.currentUser.displayName;
  }
}

export default new Firebase();
