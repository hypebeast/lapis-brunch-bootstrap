require('bootstrap');

function setActiveLink() {
  $('#navbar li > a[href="' + this.location.pathname + '"]').parent().addClass('active');
}

document.addEventListener('DOMContentLoaded', function() {
  setActiveLink();
});
