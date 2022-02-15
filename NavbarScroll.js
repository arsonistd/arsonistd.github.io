/* When the user scrolls down, hide the navbar. When the user scrolls up, show the navbar */
var prevPos = window.pageYOffset;
window.onscroll = function() {
  console.log("Scrolling")
  var currentScrollPos = window.pageYOffset;
  if (prevPos > currentScrollPos) {
    document.getElementsByTagName("navbar").styles.top = "0";
  } else {
    document.getElementsByTagName("navbar").styles.top = "-50px";
  }
  prevPos = currentScrollPos;
}