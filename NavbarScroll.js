// When the user scrolls down 80px from the top of the document, resize the navbar's padding and the logo's font size
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    document.getElementById("navbar").style.height = "75px";
    document.getElementById("logo").style.height = "100px";
    document.getElementById("logo").style.width = "100px";
  } else {
    document.getElementById("navbar").style.height = "175px";
    document.getElementById("logo").style.height = "150px";
    document.getElementById("logo").style.width = "150px";
  }
}