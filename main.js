document.getElementById('toggle-nav').addEventListener('click', function() {
  const nav = document.getElementById('navbar');
  nav.style.display = (nav.style.display === "block") ? "none" : "block";
});