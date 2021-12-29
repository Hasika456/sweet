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
room_name_sweet=localStorage.getItem("room_name_sweet");

function send(){
  msg=document.getElementById("msg").value;
  firebase.database().ref(room_name_sweet).push({
      name:user_name,
      message:msg,
      like:0
  });
  document.getElementById("msg").value="";
}

function getData() { firebase.database().ref("/"+room_name_sweet).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
  firebase_message_id = childKey;
  message_data = childData;
//Start code
console.log(firebase_message_id);
console.log(message_data);
name=message_data['name'];
message=message_data['message'];
like=message_data['like'];
name_with_tag="<h4>"+name+"<img class='user_tick' src='tick.png'> </h4>";
message_with_tag="<h4 class='message_h4'>"+message+"</h4>";
like_button="<button class='btn btn-danger' id="+firebase_message_id+" value="+like+" onclick='updateLike(this.id);'>";
span_with_tag="<h4><span class='glyphicon glyphicon-thumbs-up'>Like  :" + like +"</span> </h4></button> <hr>";
row=name_with_tag+message_with_tag+like_button+span_with_tag;
document.getElementById("output").innerHTML=row;

//End code
} });  }); }
getData();


function updateLike(message_id){
console.log("clicked On the Like button-" + message_id);
button_id=message_id;
likes=document.getElementById(button_id).value;
updated_likes=Number(likes)+1;
console.log(updated_likes);

firebase.database().ref(room_name_sweet).child(message_id).update({
like:updated_likes
});
}

function logout(){
  localStorage.removeItem("user_name");
  localStorage.removeItem("room_name_sweet");
  window.location.replace("index.html");
}