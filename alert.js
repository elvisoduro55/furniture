//   enable alert
document.querySelector(".alert").style.display = "block";
  
//   remove the alert
setTimeout(() => {
  document.querySelector(".alert").style.display = "none";
}, 3000);

document.getElementById("login").reset();