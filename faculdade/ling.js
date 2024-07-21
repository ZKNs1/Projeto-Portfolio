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
  
  