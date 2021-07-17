var firebaseConfig = {
    apiKey: "AIzaSyBQahi-DVosDguFARjMlCS5uxqRngr64Iw",
    authDomain: "bitter01.firebaseapp.com",
    databaseURL: "https://bitter01-default-rtdb.firebaseio.com",
    projectId: "bitter01",
    storageBucket: "bitter01.appspot.com",
    messagingSenderId: "962695859790",
    appId: "1:962695859790:web:0b592e17e75c9c05e8bd1f"
  };
  firebase.initializeApp(firebaseConfig);

user_name=localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML="Welcome "+user_name+"!";

function addRoom()
{
  room_name=document.getElementById("room_name").value;
  firebase.database().ref("/").child(room_name).update({purpose: " adding roomname"});
  localStorage.setItem("room_name", room_name);

  window.location="bitter_page.html";
}

function getData()
{
  firebase.database().ref("/").on('value', function(snapshot)
  {
    document.getElementById("output").innerHTML="";
    snapshot.forEach(function(childSnapshot)
    {
      childKey=childSnapshot.key;
      Room_names=childKey;
      console.log("roomname- "+Room_names);
      row="<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)'> #"+Room_names+"</div><hr>";
      document.getElementById("output").innerHTML+=row;
    });
    });
}
getData();

function redirectToRoomName(name)
{
  console.log(name);
  localStorage.setItem("room_name", name);

  window.location="bitter_page.html";
}

function logout()
{
  localStorage.removeItem("user_name");
  localStorage.removeItem("room_name");
  
  window.location="index.html";
}