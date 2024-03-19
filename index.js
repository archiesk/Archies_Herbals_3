function home()
{
    window.location.href="A_index_arch.html"
}
function skin()
{
    window.location.href="A_skincare_arch.html"
}
function hair()
{
    window.location.href="A_haircare_arch.html"
}
function herbamatics()
{
    window.location.href="A_herbametics_arch.html"
}
function needs()
{
    window.location.href="A_home_needs_arch.html"
}



const firebaseConfig = {
    apiKey: "AIzaSyDcYj5sNSrzZBlH-UdZgO34YuVyKHamZiY",
  authDomain: "archies-herbals.firebaseapp.com",
  databaseURL: "https://archies-herbals-default-rtdb.firebaseio.com",
  projectId: "archies-herbals",
  storageBucket: "archies-herbals.appspot.com",
  messagingSenderId: "835762161361",
  appId: "1:835762161361:web:5aaed078249c271ff9e7f0",
  measurementId: "G-4LEWNVFTVD"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);


window.addEventListener("DOMContentLoaded", function (e) {

    var modalWrapper = document.getElementById("modal_wrapper");
    var modalWindow = document.getElementById("modal_window");

    var openModal = function (e) {
        modalWrapper.className = "overlay";
        modalWindow.style.marginTop = (-modalWindow.offsetHeight) / 2 + "px";
        modalWindow.style.marginLeft = (-modalWindow.offsetWidth) / 2 + "px";
        e.preventDefault();
    };

    var closeModal = function (e) {
        modalWrapper.className = "";
        e.preventDefault();
    };

    var clickHandler = function (e) {
        if (e.target.tagName == "DIV") {
            if (e.target.id != "modal_window") closeModal(e);
        }
    };

    var keyHandler = function (e) {
        if (e.keyCode == 27) closeModal(e);
    };

    

    document.getElementById("modal_open").addEventListener("click", openModal, false);
    document.getElementById("modal_close").addEventListener("click", closeModal, false);
    document.addEventListener("click", clickHandler, false);
    document.addEventListener("keydown", keyHandler, false);
   


}, false);

function Feedback() {
     const form = document.getElementById('modal_feedback');
    form.addEventListener('submit', (event) => {
      event.preventDefault();
      // Perform validation and processing here
       
      //--var ref = database.ref("/users");
      firebase.database().ref("/users/"+form.name.value).update({
        name: form.name.value,
        email: form.email.value,
        feedback: form.message.value,
        city: form.city.value,
        products: form.products.value
    });
    });

  }








 
