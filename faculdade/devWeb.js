//Toggle List - Commands
document.addEventListener('DOMContentLoaded', function() {
    var toggles = document.querySelectorAll('.tagHTML');

    toggles.forEach(function(toggle) {
        toggle.addEventListener('click', function() {
            var content = this.nextElementSibling;
            content.classList.toggle('show');
            this.classList.toggle('active');
        });
    });
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
  
  