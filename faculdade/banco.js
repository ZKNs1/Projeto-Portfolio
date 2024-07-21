//Toggle List - Commands
document.addEventListener("DOMContentLoaded", function() {
    var collDDL = document.getElementsByClassName("commandDDL");
    var collDML = document.getElementsByClassName("commandDML");
    var collDQL = document.getElementsByClassName("commandDQL");
  
    function toggleContent(coll) {
        for (var i = 0; i < coll.length; i++) {
            coll[i].addEventListener("click", function() {
                this.classList.toggle("active");
                var content = this.nextElementSibling;
                content.classList.toggle("show");
            });
        }
    }
  
    toggleContent(collDDL);
    toggleContent(collDML);
    toggleContent(collDQL);
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
  
  