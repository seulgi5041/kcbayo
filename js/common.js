window.addEventListener('scroll', function() {
    var header = document.querySelector('.header_nav');
    if (window.scrollY > 50) { // Change '100' to the scroll value you want
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
});