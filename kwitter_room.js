
//ADD YOUR FIREBASE LINKS HERE
  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyD4CvEWrQKMyWdA2wtJgM3_QVPsgOb5uVw",
    authDomain: "kiwter-1d9db.firebaseapp.com",
    databaseURL: "https://kiwter-1d9db-default-rtdb.firebaseio.com",
    projectId: "kiwter-1d9db",
    storageBucket: "kiwter-1d9db.appspot.com",
    messagingSenderId: "140188602691",
    appId: "1:140188602691:web:3d4b8f438c53462e4e9ff6"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
user_name=localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML="Welcome  "+ user_name   +"   !";
function addRoom(){
  room_name = document.getElementById("room_name").value;
  firebase.database().ref("/").child(room_name).update({
    purpose:"adding room"
});
localStorage.setItem("room_name", room_name);
window.location="kwitter_page.html";
}

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
console.log("Room name -" + Room_names);
row = "<div class='room-name' id = "+Room_names +"onclick='redirctToRoomName(this.id)'>#"+Room_names+"</div><hr>";
document.getElementById("output").innerHTML+=row;
      //End code
      });});}
getData();

function redirctToRoomName(name){
  console.log(name);
  localStorage.setItem("room_name",name);
  window.location="kwitter_page.html";
}
function logout(){
  localStorage.removeItem("user_name");
  localStorage.removeItem("room_name");
  window.location="index.html";
}
 
