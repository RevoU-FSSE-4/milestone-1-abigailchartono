const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".navigation");

hamburger.addEventListener("click", () => {
    console.log("Hamburger clicked"); // Check if this message appears in the console
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
})

function dark() {
    var element = document.body;
    element.classList.toggle("dark-mode");

    if (element.classList.contains("dark-mode")) {
   //if class was added to body
        localStorage.setItem("background", "dark-mode");
   //save information in "background" localStorage variable, use dark-mode class name
    } else {
        localStorage.setItem("background", "");
  //if class was removed set background" localStorage variable to null
    }
}

document.addEventListener("DOMContentLoaded", function(event) {
//when loading document
    var background = localStorage.getItem("background");
  // get localStorage var background
    if (background) {
  // if its not null and empty
        document.body.className += background;
  //add class to body
    }
});