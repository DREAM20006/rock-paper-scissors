// Import Firebase
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-auth.js";

// ✅ Replace with your own Firebase config
const firebaseConfig = {
  apiKey: "AIzaSyAi5ErvB5aZL5-37Fz-rPTdckQIbSYzVhg",
  authDomain: "rock-paper-scissors-7700d.firebaseapp.com",
  projectId: "rock-paper-scissors-7700d",
  storageBucket: "rock-paper-scissors-7700d.appspot.com",
  messagingSenderId: "205011769936",
  appId: "1:205011769936:web:25c8a47bc02a5e7b740f55"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

document.getElementById("loginBtn").addEventListener("click", async () => {
  try {
    const result = await signInWithPopup(auth, provider);
    const user = result.user;

    // Ask for username (once)
    let username = localStorage.getItem("username");
    if (!username) {
      username = prompt("Choose a username:");
      localStorage.setItem("username", username);
    }

    // Save data for use in game.html
    localStorage.setItem("user", JSON.stringify({
      displayName: user.displayName,
      email: user.email,
      photoURL: user.photoURL,
      username
    }));

    window.location.href = "game.html";
  } catch (error) {
    alert("Login failed: " + error.message);
  }
});
