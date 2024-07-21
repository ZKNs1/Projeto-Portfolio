//Toggle List - Commands
document.addEventListener("DOMContentLoaded", function() {
  var collDW = document.getElementsByClassName("commandDW");
  var collDR = document.getElementsByClassName("commandDR");
  var collAW = document.getElementsByClassName("commandAW");
  var collAR = document.getElementsByClassName("commandAR");
  var collPM = document.getElementsByClassName("commandPM");

  function toggleContent(coll) {
      for (var i = 0; i < coll.length; i++) {
          coll[i].addEventListener("click", function() {
              this.classList.toggle("active");
              var content = this.nextElementSibling;
              content.classList.toggle("show");
          });
      }
  }

  toggleContent(collDW);
  toggleContent(collDR);
  toggleContent(collAW);
  toggleContent(collAR);
  toggleContent(collPM);
});

//Footer
window.addEventListener('scroll', function() {
    var footer = document.getElementById('footer');
    var windowHeight = window.innerHeight;
    var scrollY = window.scrollY;
    var bodyHeight = document.body.offsetHeight;

    if (windowHeight + scrollY >= bodyHeight) {
        footer.style.opacity = 1; 
    } else {
        footer.style.opacity = 0;
    }
});

