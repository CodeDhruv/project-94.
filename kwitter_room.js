
var firebaseConfig = {
  apiKey: "AIzaSyBuEZ2rHndRjjgiApjhHgOKk6mJoyNp14I",
  authDomain: "project-14c50.firebaseapp.com",
  databaseURL: "https://project-14c50-default-rtdb.firebaseio.com",
  projectId: "project-14c50",
  storageBucket: "project-14c50.appspot.com",
  messagingSenderId: "225959516731",
  appId: "1:225959516731:web:00ee27cf6306bc7ad81a1e",
  measurementId: "G-W6X5CVNDRW"
};
firebase.initializeApp(firebaseConfig);
firebase.analytics();

username = localStorage.getItem("name");
document.getElementById("name").innerHTML = "Hi " + username + "!";

function logout(){
  localStorage.removeItem("Room Name");
  localStorage.removeItem("Name");
  window.location = "index.html";
}
