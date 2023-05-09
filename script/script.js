 
window.addEventListener('load', function() {
    var buttons = document.querySelectorAll('button');
    var delay = 100; // milliseconds
    var transitionTime = 250; // milliseconds
  
    for (var i = 0; i < buttons.length; i++) {
      (function(index) {
        setTimeout(function() {
          buttons[index].classList.add('green-button');
          setTimeout(function() {
            buttons[index].style.transition = "all " + transitionTime + "ms ease-in-out";
            buttons[index].classList.remove('green-button');
          }, delay);
        }, delay * index);
      })(i);
    }
  });
  