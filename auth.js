const firebaseConfig = {
    apiKey: "AIzaSyD4XFlrHOwqHgjw2YaMUCubhUOUfV-lGDo",
    authDomain: "signupform-296a8.firebaseapp.com",
    databaseURL: "https://signupform-296a8-default-rtdb.firebaseio.com",
    projectId: "signupform-296a8",
    storageBucket: "signupform-296a8.appspot.com",
    messagingSenderId: "960895790195",
    appId: "1:960895790195:web:38ccd67949e400cd790e06"
  };

  //firebase initialise
  firebase.initializeApp(firebaseConfig);

  //reference for database
 const signupformDB=firebase.database().ref('signupform');

 document.getElementById("signupform").addEventListener("submit", submitForm);

 function submitForm(e) {
    e.preventDefault();
  
    var username = getElementVal("username");
    var firstname = getElementVal("fname");
    var lastname = getElementVal("lname");
    var email = getElementVal("email");
    var password = getElementVal("password");
  
    saveMessages(username, firstname, 
        lastname, email, password);
  
    //   enable alert
    document.querySelector(".alert").style.display = "block";
  
    //   remove the alert
    setTimeout(() => {
      document.querySelector(".alert").style.display = "none";
    }, 3000);
  
    //   reset the form
    document.getElementById("signupform").reset();
  }
  
  const saveMessages = (username, email, password, firstname,lastname) => {
    var newContactForm = signupformDB.push();
  
    newContactForm.set({
      username: username,
      email: email,
      password: password,
      firstname: firstname,
      lastname:lastname
    });
  };
  
  const getElementVal = (id) => {
    return document.getElementById(id).value;
  };