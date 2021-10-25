const firebaseConfig = {
      apiKey: "AIzaSyCyU0DwcO9aiC5whhLTz8bZnFyWpKcFfR8",
      authDomain: "web-app-2c1a4.firebaseapp.com",
      databaseURL: "https://web-app-2c1a4-default-rtdb.firebaseio.com",
      projectId: "web-app-2c1a4",
      storageBucket: "web-app-2c1a4.appspot.com",
      messagingSenderId: "1032448696180",
      appId: "1:1032448696180:web:2704fd253908eb06839621",
      measurementId: "G-9XDQBFSTF7"
    };
    
    // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  user_name = localStorage.getItem("Username");
  document.getElementById("welcome_user_name").innerHTML = "Welcome "+user_name+"!";

  function addroom() {
         room_name = document.getElementById("room_name").value;

         firebase.database().ref("/").child(room_name).update({
              purpose: "Adding Room Name"
        });

        localStorage.setItem("Roomname",room_name);
    
        window.location = "kwitter_page.html";
  }

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
   Room_names = childKey;
  //Start code
        console.log("room_name - " + Room_names);
        row = "<div class='room_name' id="+Room_names+" onclick='redirectToroomname(this.id)'>#"+Room_names+"</div><hr>";
        document.getElementById("output").innerHTML += row;
  //End code
  });});}
getData();
function redirectToroomname(name){
  console.log(name);
  localStorage.setItem("Roomname",name);
  window.location = "kwitter_page.html";
}
function logout() {
  localStorage.removeItem("Username");
  localStorage.removeItem("Roomname");
  window.location = "index.html";
}