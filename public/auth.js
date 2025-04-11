import { auth } from "./firebase.js";
import { signInWithEmailAndPassword, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";

// Sign Up
document.getElementById("signup-form").addEventListener("submit", async (e) => {
  e.preventDefault();
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  
  try {
    await createUserWithEmailAndPassword(auth, email, password);
    alert("Account created!");
  } catch (error) {
    console.error("Signup error:", error);
  }
});

// Sign In (similar logic)