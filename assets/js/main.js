$(function () {
  // Initiate tooltips
  $('[data-toggle="tooltip"]').tooltip();

  // Navbar click to scroll
  $('.navbar-nav>.nav-link').on('click', function (e) {
    if (this.hash !== '') {
      e.preventDefault();
      
      const hash = this.hash;
      
      document.querySelector(hash).scrollIntoView({
        behaviour: 'smooth'
      });

      window.location.hash = hash;
      
    }
  });
})