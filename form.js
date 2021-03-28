$(document).ready(function(){
    $("#sel1").on('change',function(){
        $(".data").hide();
        $("#" + $(this).val()).fadeIn(700);
    }).change();
});
// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyA36jXrj-Ooc5c04p9J1U4DRBSYig20S1A",
    authDomain: "complaints-22653.firebaseapp.com",
    projectId: "complaints-22653",
    storageBucket: "complaints-22653.appspot.com",
    messagingSenderId: "415274201008",
    appId: "1:415274201008:web:a6ab522355459b1b11f075"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  const db = firebase.firestore();

  function formReset(){
    document.querySelector("#namer").value = ''   
    document.querySelector("#contr").value =''    
    document.querySelector("#relr").value = '' 
    document.querySelector("#namev").value =''  
    document.querySelector("#contv").value=''  
    document.querySelector("#addv").value =''  
    document.querySelector("#nameab").value =''  
    document.querySelector("#relab").value =''   
    document.querySelector("#sel1").value =''   
    document.querySelector("#comm").value = ''
}


    document.querySelector('#submitBtn').addEventListener('click', function(){
        let nameReporter= document.querySelector("#namer").value;
        let contactReporter= document.querySelector("#contr").value;
        let relationToVictim= document.querySelector("#relr").value;
        let NameVictim= document.querySelector("#namev").value;
        let contactVictim = document.querySelector("#contv").value;
        let addressVictim = document.querySelector("#addv").value;
        let nameAbuser = document.querySelector("#nameab").value;
        let relationAbuser = document.querySelector("#relab").value;
        let kindofAbuse = document.querySelector("#sel1").value;
        let comment = document.querySelector("#comm").value;
       
        if(
            nameReporter === ''    ||
            relationToVictim===''     ||
            contactReporter===''     ||
            NameVictim ===''  ||
            addressVictim===''   ||
            nameAbuser ===''  ||
            relationAbuser ===''  ||
            kindofAbuse ===''  
    )   {
        alert('Fields Empty');
    } 
    else if(
        contactReporter <=6000000000
    ){
        alert('Enter Mobile Number Correctly');
    }
    else{
        var today = new Date();
var dd = String(today.getDate()).padStart(2, '0');
var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
var yyyy = today.getFullYear();

today = dd + '/' + mm + '/' + yyyy;
        var postRef = db.collection("complaints");
        postRef.doc(contactReporter).set({
            ReporterName:nameReporter,
            ReporterContact:contactReporter,
            RelationtoVictim:relationToVictim,
            VictimName:NameVictim,
            VictimContact: contactVictim,
            VictimAddress: addressVictim,
            AbuserName: nameAbuser,
            RelationofAbuser: relationAbuser,
            AbuseKind: kindofAbuse,
            Comment: comment,
            Status: "Complaint Recieved",
            date: today
        })
        alert('Complaint Recieved Succesfully.');
        formReset();
        
    }
    });

  



    
