const firebaseConfig = {
    apiKey: "AIzaSyAA5LX0yATUZdlEc31I1w8Qi6VaSbUCKL4",
    authDomain: "teamsweet-197cf.firebaseapp.com",
    databaseURL: "https://teamsweet-197cf-default-rtdb.firebaseio.com",
    projectId: "teamsweet-197cf",
    storageBucket: "teamsweet-197cf.appspot.com",
    messagingSenderId: "623218877629",
    appId: "1:623218877629:web:738e08637aef3cdbc043d4"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);


user_name=localStorage.getItem("user_name");

document.getElementById("user_name").innerHTML="Welcome   " + user_name + "!";

function sweet_team_page(){
    room_name_sweet=document.getElementById("room_name_sweet").value;

    firebase.database().ref("/" ).child(room_name_sweet).update({
          purpose:"adding room name"
    });



    localStorage.setItem("room_name_sweet", room_name_sweet);
    window.location="teamsweet.html";
}


function getData() {
    firebase.database().ref("/").on('value', 
    function(snapshot) 
    {document.getElementById("output").innerHTML = "";
    snapshot.forEach(function(childSnapshot) 
    {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("Room Name-" + room_name_sweet);
      row="<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)'>#"+Room_names+"</div><hr>";
      document.getElementById("output").innerHTML=row;
      //End code
      });});}
getData();

function redirectToRoomName(name){
    console.log(name);
    localStorage.setItem("room_name_sweet", name);
    window.location="teamsweet.html";
}

function logout(){
    localStorage.removeItem("user_name");
    localStorage.removeItem("room_name_sweet");
    window.location="index.html";
}
