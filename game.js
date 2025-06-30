// Firebase config (copied from your screenshot)
const firebaseConfig = {
  apiKey: "AIzaSyAi5ErvB5aZL5-37Fz-rPTdckQlSbYzVhg",
  authDomain: "rock-paper-scissors-7700d.firebaseapp.com",
  projectId: "rock-paper-scissors-7700d",
  storageBucket: "rock-paper-scissors-7700d.appspot.com",
  messagingSenderId: "205011769936",
  appId: "1:205011769936:web:25c8a47bc02a5e7b740f55",
  measurementId: "G-8MCNCRX1TZ"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();

let currentUser = null;
let gameUsername = null;

// Google login function
function googleLogin() {
  const provider = new firebase.auth.GoogleAuthProvider();
  auth.signInWithPopup(provider)
    .then(result => {
      currentUser = result.user;
      checkUsername();
    })
    .catch(console.error);
}

// Check if user has a stored username
function checkUsername() {
  gameUsername = localStorage.getItem('rps_username_' + currentUser.uid);
  if (gameUsername) {
    startGame();
  } else {
    document.getElementById('login').style.display = 'none';
    document.getElementById('username-setup').style.display = 'block';
  }
}

// Save entered username
function saveUsername() {
  const input = document.getElementById('username-input').value.trim();
  if (input.length < 2) {
    alert("Username must be at least 2 characters.");
    return;
  }
  gameUsername = input;
  localStorage.setItem('rps_username_' + currentUser.uid, gameUsername);
  startGame();
}

// Show game UI
function startGame() {
  document.getElementById('login').style.display = 'none';
  document.getElementById('username-setup').style.display = 'none';
  document.getElementById('game').style.display = 'block';
  document.getElementById('player-name').innerText = gameUsername;
}

// Game logic placeholder
function play(choice) {
  document.getElementById('result').innerText = `You chose ${choice}. (Add game logic here.)`;
}
