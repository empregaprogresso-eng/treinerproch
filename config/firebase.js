const firebaseConfig = {
  apiKey: "AIzaSyDU5tNXOQF9i0F_uuEyBvqWsNtmhgl9jrY",
  authDomain: "treinerproch.firebaseapp.com",
  projectId: "treinerproch",
  storageBucket: "treinerproch.firebasestorage.app",
  messagingSenderId: "497545364595",
  appId: "1:497545364595:web:bb634bf57a77bb56841606"
};

firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const db = firebase.firestore();
const storage = firebase.storage();
const analytics = firebase.analytics();
