// Loading Screen
window.addEventListener('load', () => {
  document.getElementById('loading-screen').style.display = 'none';
});

// Section Toggle
function showSection(id){
  document.querySelectorAll('main section').forEach(sec => sec.classList.remove('active-section'));
  document.getElementById(id).classList.add('active-section');

  // Close dot menu on mobile
  document.getElementById('dot-menu-content').style.display='none';
  // Close sidebar on mobile
  if(window.innerWidth <= 768){
    document.getElementById('sidebar').classList.add('hidden');
  }
}

// Dropdown
function toggleDropdown(button){
  const content = button.nextElementSibling;
  content.style.display = content.style.display === 'block' ? 'none' : 'block';
}

// Dot Menu
const dotMenu = document.getElementById('dot-menu');
const dotContent = document.getElementById('dot-menu-content');
dotMenu.addEventListener('click',()=>{ dotContent.style.display = dotContent.style.display==='block'?'none':'block'; });

// Hamburger Toggle
const hamburger = document.getElementById('hamburger');
const sidebar = document.getElementById('sidebar');
hamburger.addEventListener('click',()=>{ sidebar.classList.toggle('hidden'); });

// Optional theme toggle
function toggleTheme(){ document.body.classList.toggle('light-mode'); }