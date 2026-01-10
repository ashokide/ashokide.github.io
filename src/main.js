// Theme Toggle
const themeToggle = document.getElementById('themeToggle');
const html = document.documentElement;

// Check for saved theme preference or default to 'light'
const currentTheme = localStorage.getItem('theme') || 'light';

// Apply saved theme on page load
if (currentTheme === 'dark') {
  html.classList.add('dark');
} else {
  html.classList.remove('dark');
}

// Toggle theme on button click
themeToggle.addEventListener('click', () => {
  if (html.classList.contains('dark')) {
    html.classList.remove('dark');
    localStorage.setItem('theme', 'light');
  } else {
    html.classList.add('dark');
    localStorage.setItem('theme', 'dark');
  }
});
