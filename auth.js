// Import Firebase modules
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-auth.js";

// Firebase config
const firebaseConfig = {
  apiKey: "AIzaSyAi5ErvB5aZL5-37Fz-rPTdckQIbSYzVhg",
  authDomain: "rock-paper-scissors-7700d.firebaseapp.com",
  projectId: "rock-paper-scissors-7700d",
  storageBucket: "rock-paper-scissors-7700d.appspot.com",
  messagingSenderId: "205011769936",
  appId: "1:205011769936:web:25c8a47bc02a5e7b740f55"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

// Handle login
document.getElementById("login-btn").addEventListener("click", () => {
  signInWithPopup(auth, provider)
    .then((result) => {
      const user = result.user;
      alert(`Welcome, ${user.displayName}!`);
      // window.location.href = "game.html";
    })
    .catch((error) => {
      console.error("Login failed:", error.code, error.message);
      alert("Login failed: " + error.message);
    });
});
