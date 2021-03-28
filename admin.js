firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
      document.getElementById("login-div").style.display = "none";
 document.getElementById("user-div").style.display = "block";
 getPosts();
  } else {
      document.getElementById("login-div").style.display = "block";
      document.getElementById("user-div").style.display = "none";
  }
});

var input = document.getElementById("password_field");
input.addEventListener("keyup", function(event) {
  if (event.keyCode === 13) {
   event.preventDefault();
   document.getElementById("loginBtn").click();
  }
});

function login(){
  var userEmail = document.getElementById("email_field").value;
  var userPass = document.getElementById("password_field").value; 

  firebase.auth().setPersistence(firebase.auth.Auth.Persistence.SESSION)
  .then(() => {
    firebase.auth().signInWithEmailAndPassword(userEmail, userPass)
.then((userCredential) => {
  // Signed in
  var user = userCredential.user;
  // ...
})
  })
.catch((error) => {
  var errorCode = error.code;
  var errorMessage = error.message;
  window.alert("Wrong username or Password");
});
}
function logout(){
firebase.auth().signOut().then(() => {
  // Sign-out successful.
}).catch((error) => {
  // An error happened.
});
}


function createSinglePost(nameReporter,contactReporter,relationToVictim,NameVictim,contactVictim,addressVictim,nameAbuser,relationAbuser,kindofAbuse,statusReport,dateRec){


  let div=document.createElement('div');
  let divRep = document.createElement('div');
  let divVic = document.createElement('div');
  let divAbs = document.createElement('div');
  div.setAttribute('class', 'col-md-12');
  div.setAttribute('id','parent-div-2');
  divRep.setAttribute('class', 'col-md-12');
  divVic.setAttribute('class', 'col-md-12');
  divAbs.setAttribute('class', 'col-md-12');
  div.style.cssText='margin-bottom:2em;';
  divRep.style.cssText='margin-bottom:0.5em'
  divRep.innerHTML = "<H3> Details of Reporter</h3>"
  divVic.innerHTML = "<H3> Details of Victim</h3>"
  divAbs.innerHTML = "<H3> Details of Abuser</h3>"
  let nameRep = document.createElement("p");
  let contRep = document.createElement("p");
  let relVic = document.createElement("p");
  let nameVic = document.createElement("p");
  let contVic = document.createElement("p");
  let addVic = document.createElement("p");
  let nameAbs = document.createElement("p");
  let relAbs = document.createElement("p");
  let absKind = document.createElement("p");
  let statusComp = document.createElement("p");
  let dateR = document.createElement("p");

  nameRep.textContent = "Name : "+ nameReporter;
  contRep.textContent = "Contact :  "+contactReporter;
  relVic.textContent = "Relation to Victim : "+relationToVictim;
  nameVic.textContent ="Name :"+ NameVictim;
  contVic.textContent = "Contact : "+contactVictim;
  addVic.textContent = "Address: "+addressVictim;
  nameAbs.textContent = "Name : "+nameAbuser;
  relAbs.textContent ="Relation to Victim: "+ relationAbuser;
  absKind.textContent = "Abuse Type : "+kindofAbuse;
  absKind.style.cssText = "color: red; font-weight: bold;";
  statusComp.textContent ="Status of Application : "+ statusReport;
  dateR.textContent = "Date Recieved : " + dateRec;
  statusComp.style.cssText = "margin-top: 0.5em; color: green; font-weight: bold; font-size: 20px;";
  dateR.style.cssText = "margin-top: 0.5em; color: #1826BD; font-weight: bold; font-size: 20px;";
  div.appendChild(dateR);
  div.appendChild(statusComp);
  divRep.appendChild(nameRep);
  divRep.appendChild(contRep);
  divRep.appendChild(relVic);
  div.appendChild(divRep);
  divVic.appendChild(nameVic);
  divVic.appendChild(contVic);
  divVic.appendChild(addVic);
  div.appendChild(divVic);
  divAbs.appendChild(nameAbs);
  divAbs.appendChild(relAbs);
  divAbs.appendChild(absKind);
  div.appendChild(divAbs);
 
  document.getElementById("upd-div").appendChild(div);
}


let postCollection = document.querySelector("#complaints");
document.getElementById("updatediv").style.display = "none";

function createMultiplePost(nameReporter,contactReporter,relationToVictim,NameVictim,contactVictim,addressVictim,nameAbuser,relationAbuser,kindofAbuse,statusReport,dateRec,Postid){
let div=document.createElement('div');
let divRep = document.createElement('div');
let divVic = document.createElement('div');
let divAbs = document.createElement('div');
div.setAttribute('class', 'row col-md-12 col-sm-12 col-xs-12');
divRep.setAttribute('class', 'col-md-4');
divVic.setAttribute('class', 'col-md-4');
divAbs.setAttribute('class', 'col-md-4');
div.style.cssText='margin-bottom:2em; margin-top:1em;';
divRep.style.cssText='margin-bottom:0.5em;'
divRep.innerHTML = "<H3> Details of Reporter</h3>"
divVic.innerHTML = "<H3> Details of Victim</h3>"
divAbs.innerHTML = "<H3> Details of Abuser</h3>"
let nameRep = document.createElement("p");
let contRep = document.createElement("p");
let relVic = document.createElement("p");
let nameVic = document.createElement("p");
let contVic = document.createElement("p");
let addVic = document.createElement("p");
let nameAbs = document.createElement("p");
let relAbs = document.createElement("p");
let absKind = document.createElement("p");
let statusComp = document.createElement("p");
let dateR = document.createElement("p");

nameRep.textContent = "Name : "+ nameReporter;
contRep.textContent = "Contact :  "+contactReporter;
relVic.textContent = "Relation to Victim : "+relationToVictim;
nameVic.textContent ="Name :"+ NameVictim;
contVic.textContent = "Contact : "+contactVictim;
addVic.textContent = "Address: "+addressVictim;
nameAbs.textContent = "Name : "+nameAbuser;
relAbs.textContent ="Relation to Victim: "+ relationAbuser;
absKind.textContent = "Abuse Type : "+kindofAbuse;
absKind.style.cssText = "color: red; font-weight: bold;";
statusComp.textContent ="Status of Application : "+ statusReport;
dateR.textContent = "Date Recieved : " + dateRec;
statusComp.style.cssText = "margin-top: 0.5em; color: green; font-weight: bold; font-size: 20px;";
dateR.style.cssText = "margin-top: 0.5em; color: #1826BD; font-weight: bold; font-size: 20px;";

div.appendChild(statusComp);
div.appendChild(dateR);
divRep.appendChild(nameRep);
divRep.appendChild(contRep);
divRep.appendChild(relVic);
div.appendChild(divRep);
divVic.appendChild(nameVic);
divVic.appendChild(contVic);
divVic.appendChild(addVic);
div.appendChild(divVic);
divAbs.appendChild(nameAbs);
divAbs.appendChild(relAbs);
divAbs.appendChild(absKind);
div.appendChild(divAbs);

document.getElementById("complaints").appendChild(div);

}
 
function createFilterPost(nameReporter,contactReporter,relationToVictim,NameVictim,contactVictim,addressVictim,nameAbuser,relationAbuser,kindofAbuse,statusReport,dateRec,filterSel,size){
  let div=document.createElement('div');
  let divRep = document.createElement('div');
  let divVic = document.createElement('div');
  let divAbs = document.createElement('div');
  div.setAttribute('class', 'row col-md-12 col-sm-12 col-xs-12');
  divRep.setAttribute('class', 'col-md-4');
  divVic.setAttribute('class', 'col-md-4');
  divAbs.setAttribute('class', 'col-md-4');
  div.style.cssText='margin-bottom:2em; margin-top:1em;';
  divRep.style.cssText='margin-bottom:0.5em;'
  divRep.innerHTML = "<H3> Details of Reporter</h3>"
  divVic.innerHTML = "<H3> Details of Victim</h3>"
  divAbs.innerHTML = "<H3> Details of Abuser</h3>"
  let nameRep = document.createElement("p");
  let contRep = document.createElement("p");
  let relVic = document.createElement("p");
  let nameVic = document.createElement("p");
  let contVic = document.createElement("p");
  let addVic = document.createElement("p");
  let nameAbs = document.createElement("p");
  let relAbs = document.createElement("p");
  let absKind = document.createElement("p");
  let statusComp = document.createElement("p");
  let dateR = document.createElement("p");
  
  nameRep.textContent = "Name : "+ nameReporter;
  contRep.textContent = "Contact :  "+contactReporter;
  relVic.textContent = "Relation to Victim : "+relationToVictim;
  nameVic.textContent ="Name :"+ NameVictim;
  contVic.textContent = "Contact : "+contactVictim;
  addVic.textContent = "Address: "+addressVictim;
  nameAbs.textContent = "Name : "+nameAbuser;
  relAbs.textContent ="Relation to Victim: "+ relationAbuser;
  absKind.textContent = "Abuse Type : "+kindofAbuse;
  absKind.style.cssText = "color: red; font-weight: bold;";
  statusComp.textContent ="Status of Application : "+ statusReport;
  dateR.textContent = "Date Recieved : " + dateRec;
  statusComp.style.cssText = "margin-top: 0.5em; color: green; font-weight: bold; font-size: 20px;";
  dateR.style.cssText = "margin-top: 0.5em; color: #1826BD; font-weight: bold; font-size: 20px;";
  
  div.appendChild(statusComp);
  div.appendChild(dateR);
  divRep.appendChild(nameRep);
  divRep.appendChild(contRep);
  divRep.appendChild(relVic);
  div.appendChild(divRep);
  divVic.appendChild(nameVic);
  divVic.appendChild(contVic);
  divVic.appendChild(addVic);
  div.appendChild(divVic);
  divAbs.appendChild(nameAbs);
  divAbs.appendChild(relAbs);
  divAbs.appendChild(absKind);
  div.appendChild(divAbs);
  

 let CompRec =  document.getElementById("CompRec");
 let ActTaken =  document.getElementById("ActTaken");
 let FieldVer =  document.getElementById("FieldVer");
 let closed =  document.getElementById("closed");



  if(filterSel==="Complaint Recieved"){

    CompRec.appendChild(div);
    CompRec.style.display="block";
    console.log("Hello");
    console.log(size);
  
  
  }

  else if(filterSel==="Field Verification Pending"){
    
    FieldVer.appendChild(div);
    FieldVer.style.display="block";
  }

  else if(filterSel==="Action Taken"){
    
    ActTaken.appendChild(div);
    ActTaken.style.display="block";
  }

  else if(filterSel==="Case Closed"){
    
    closed.appendChild(div);
    closed.style.display="block";
  }


}


//Get Posts
   function getPosts(){
    
    db.collection("complaints")
    .get().then(snapshot =>{ snapshot.docs.forEach((doc) =>{
     
      
      var Postid = doc.id;
         createMultiplePost(
             doc.data().ReporterName,
             doc.data().ReporterContact,
             doc.data().RelationtoVictim,
             doc.data().VictimName,
             doc.data().VictimContact,
             doc.data().VictimAddress,
             doc.data().AbuserName,
             doc.data().RelationofAbuser,
             doc.data().AbuseKind,
             doc.data().Status,
             doc.data().date,
             Postid

         )
        
      });
  }).catch(err =>{
    console.log(err);
  });
  }
  


var MobNo = document.getElementById("postID");
MobNo.addEventListener("keyup", function(event) {
  if (event.keyCode === 13) {
   event.preventDefault();
   document.getElementById("Sub").click();
  }
});

document.querySelector('#Sub').addEventListener('click', function(){
  let Postid = document.querySelector("#postID").value;
  if(
      Postid === ''   
  ){
      alert('Fields Empty');
  }
  else if(
      Postid <'5000000000'
  ){
      alert('Enter Mobile Number Correctly');
  }
 else{
     
        
        var ParentDiv2 = document.getElementById("parent-div-2");
        var upd = document.getElementById("upd-div");
        if(typeof(ParentDiv2) != 'undefined' && ParentDiv2 != null){
            upd.removeChild(ParentDiv2);
            getSinglePost(Postid);
        } else{
            getSinglePost(Postid);
        }
        document.getElementById("updatediv").style.display = "block";
    }
     
     
   
}
);


function statusChange(){

  let Postid = document.querySelector("#postID").value;
  let Current =  document.getElementById("status-list").value;
  var Ref = db.collection("complaints").doc(Postid);
  Ref.get().then((doc) => {
      if (doc.exists) {
        Ref.update({
          Status: Current
        })
       
      } else {
          console.log("No such document!");
      }
  }).catch((error) => {
      console.log("Error getting document:", error);
  });

}
function rel(){
  alert("Updated Succesfully.");
 window.location.reload(); 
}

function showbyFilter(){
  let CompRec =  document.getElementById("CompRec");
  let ActTaken =  document.getElementById("ActTaken");
  let FieldVer =  document.getElementById("FieldVer");
  let closed =  document.getElementById("closed");
  let filterSel = document.getElementById("filter").value;  

    ActTaken.style.display="none";
    CompRec.style.display="none";
    FieldVer.style.display="none";
    closed.style.display="none";  
    $('#CompRec').empty();
              $('#ActTaken').empty();
              $('#FieldVer').empty();
              $('#closed').empty();
      document.getElementById("complaints").style.display = "none";
      db.collection("complaints").where("Status", "==", filterSel)
      .get()
      .then((querySnapshot) => {
          querySnapshot.forEach((doc) => {
            var counting = document.querySelectorAll('#CompRec div').length;
            size=querySnapshot.size;
            if(counting==(size*4)){
             
              createFilterPost(
                doc.data().ReporterName,
                doc.data().ReporterContact,
                doc.data().RelationtoVictim,
                doc.data().VictimName,
                doc.data().VictimContact,
                doc.data().VictimAddress,
                doc.data().AbuserName,
                doc.data().RelationofAbuser,
                doc.data().AbuseKind,
                doc.data().Status,
                doc.data().date,
                filterSel,
                size
   
            )
            }
             
            else{
              createFilterPost(
                doc.data().ReporterName,
                doc.data().ReporterContact,
                doc.data().RelationtoVictim,
                doc.data().VictimName,
                doc.data().VictimContact,
                doc.data().VictimAddress,
                doc.data().AbuserName,
                doc.data().RelationofAbuser,
                doc.data().AbuseKind,
                doc.data().Status,
                doc.data().date,
                filterSel,
                size
   
            )
            }
            
              // doc.data() is never undefined for query doc snapshots
            
          });
      })
      .catch((error) => {
          console.log("Error getting documents: ", error);
      });

      if(document.getElementById('filter').value == "default") {
        document.getElementById("complaints").style.display = "block";
    }
 
 
} 


