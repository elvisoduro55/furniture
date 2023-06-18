//   enable alert
document.querySelector(".alert").style.display = "block";
  
//   remove the alert
setTimeout(() => {
  document.querySelector(".alert").style.display = "none";
}, 3000);

document.getElementById("login").reset();

// Sign in with email and password
function signIn() {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  firebase.auth().signInWithEmailAndPassword(email, password)
    .then((userCredential) => {
      // User signed in successfully
      const user = userCredential.user;
      console.log("User signed in:", user);
    })
    .catch((error) => {
      // Handle sign in errors
      const errorCode = error.code;
      const errorMessage = error.message;
      console.error("Sign in error:", errorCode, errorMessage);
    });
}