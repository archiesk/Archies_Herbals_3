 // Firebase configuration start
 //var firebaseConfig = {
 // apiKey: "AIzaSyDcYj5sNSrzZBlH-UdZgO34YuVyKHamZiY",
//authDomain: "archies-herbals.firebaseapp.com",
//databaseURL: "https://archies-herbals-default-rtdb.firebaseio.com",
//projectId: "archies-herbals",
//storageBucket: "archies-herbals.appspot.com",
//messagingSenderId: "835762161361",
//appId: "1:835762161361:web:5aaed078249c271ff9e7f0",
//measurementId: "G-4LEWNVFTVD"
//};
  
  // Initialize Firebase
  //firebase.initializeApp(firebaseConfig);
 // var database = firebase.database();
  //var ref = database.ref("");
  
 // Reference to your Firebase database
var database = firebase.database();

// Retrieve data from a specific node in Firebase
var dataRef = database.ref('users');
/* database.ref('users').push({
  "name":"Annie",
  "email":"test123@gmail.com",
  "remarks":"VERY GOOD"
}); */
getData()

function getData() {
  firebase.database().ref("/" + "users").on('value', 
  function (snapshot) {
    document.getElementById("list-container").innerHTML = ""; 
    snapshot.forEach(function (childSnapshot) {
      childKey = childSnapshot.key; 
      childData = childSnapshot.val(); 
      if (childKey != "purpose") {
        firebase_message_id = childKey;
        message_data = childData;
        //Start code
        console.log(firebase_message_id);
        console.log(message_data);
        name = message_data['name'];
        city = message_data['city'];
        products = message_data['products'];
        message = message_data['feedback'];
        //like = message_data['like'];
        name_with_tag = "<h4> " + name + "  " + city + "🤗";
        message_with_tag = "<h5 class='message_h5'>" + products + ":" +  "<h6 class='message_h6'>" + message + "</h3><hr>";
        row = name_with_tag + message_with_tag ;
        document.getElementById("list-container").innerHTML += row;
        //End code
      }
    });
  });
}