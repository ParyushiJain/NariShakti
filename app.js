let statusDiv = document.querySelector("#statusdiv");



    function createSinglePost(nameReporter,contactReporter,relationToVictim,NameVictim,contactVictim,addressVictim,nameAbuser,relationAbuser,kindofAbuse,statusReport,dateRec){


    let div=document.createElement('div');
    let divRep = document.createElement('div');
    let divVic = document.createElement('div');
    let divAbs = document.createElement('div');
    div.setAttribute('class', 'col-md-12');
    div.setAttribute('id','parent-div');
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
   
    document.getElementById("statusdiv").appendChild(div);
  }

  var input = document.getElementById("postID");
  input.addEventListener("keyup", function(event) {
    if (event.keyCode === 13) {
     event.preventDefault();
     document.getElementById("submitBtn").click();
     document.getElementById("Sub").click();
    }
  });

    //single-post
  function getSinglePost(Postid){
  
    // document.getElementById("statusDiv").style.display = "block";
    var docRef = db.collection("complaints").doc(Postid);
    docRef.get().then((doc) => {
        if (doc.exists) { 
            console.log(Postid);
            createSinglePost(
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
                doc.data().date
            )
       
        } else {
            // doc.data() will be undefined in this case
            console.log("No such document!");
            alert('Record not found');
        }
    }).catch((error) => {
        console.log("Error getting document:", error);
    });
  
}



  document.querySelector('#submitBtn').addEventListener('click', function(){
    let Postid = document.querySelector("#postID").value;
    if(
        Postid === ''   
    ){
        alert('Fields Empty');
    }
    else if(
        Postid <'000000000'
    ){
        alert('Enter Mobile Number Correctly');
    }
    else{
        var ParentDiv = document.getElementById("parent-div");
        if(typeof(ParentDiv) != 'undefined' && ParentDiv != null){
            statusDiv.removeChild(ParentDiv);
            getSinglePost(Postid);
        } else{
            getSinglePost(Postid);
        }
  }
});

  

