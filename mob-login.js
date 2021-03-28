window.onload=function () {
    render();
  };
  firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
        document.getElementById('mob-auth').style.display = "none";
   document.getElementById('mob-auth-done').style.display = "block";
    } else {
        document.getElementById('mob-auth').style.display = "block";
        document.getElementById('mob-auth-done').style.display = "none";
    }
  });   
  function render() {
      window.recaptchaVerifier=new firebase.auth.RecaptchaVerifier('recaptcha-container');
      recaptchaVerifier.render();
  }
  function phoneAuth() {
      //get the number
      var number=document.getElementById('number').value;
      //phone number authentication function of firebase
      //it takes two parameter first one is number,,,second one is recaptcha
      
      firebase.auth().signInWithPhoneNumber(number,window.recaptchaVerifier).then(function (confirmationResult) {
          //s is in lowercase
          window.confirmationResult=confirmationResult;
          coderesult=confirmationResult;
         
          alert("Message sent");
      }).catch(function (error) {
          alert(error.message);
      });


     
  }

  function codeverify() {
    var code=document.getElementById('verificationCode').value;
    coderesult.confirm(code).then(function (result) {
        alert("Successfully registered");
     
        var user=result.user;
       
        
    }).catch(function (error) {
        alert(error.message);
    });
}
 
  
function logout(){
    firebase.auth().signOut().then(() => {
      // Sign-out successful.
    }).catch((error) => {
      // An error happened.
    });
    }
    

