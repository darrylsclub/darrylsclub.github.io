// Always hide the loader after 1 second
setTimeout(() => {
  const loader = document.getElementById('loading-screen');
  if (loader) {
    loader.style.transition = "opacity 0.5s ease";
    loader.style.opacity = "0";
    setTimeout(() => {
      loader.style.display = "none";
    }, 500); // fade out
  }
}, 1000);

// Section toggle
function showSection(id){
  document.querySelectorAll('main section').forEach(sec => sec.classList.remove('active-section'));
  document.getElementById(id).classList.add('active-section');
}