// Check for dark mode preference in localStorage
const isDarkMode = localStorage.getItem('darkMode') === 'true';

// Apply dark mode if previously enabled
if (isDarkMode) {
  document.body.classList.add('dark-mode');
  document.querySelector('nav').classList.add('dark-mode');
  const sections = document.querySelectorAll('.bg-white');
  sections.forEach(section => section.classList.add('dark-mode'));
  const textSections = document.querySelectorAll('.text-gray-700');
  textSections.forEach(text => text.classList.add('dark-mode'));
  const blueSections = document.querySelectorAll('.text-blue-600');
  blueSections.forEach(text => text.classList.add('dark-mode'));
}

// Dark Mode Toggle Button
const darkModeToggle = document.createElement('button');
darkModeToggle.innerHTML = '🌙';
darkModeToggle.style.position = 'fixed';
darkModeToggle.style.top = '20px';
darkModeToggle.style.right = '20px';
darkModeToggle.style.fontSize = '24px';
darkModeToggle.style.padding = '10px';
darkModeToggle.style.backgroundColor = 'transparent';
darkModeToggle.style.border = 'none';
darkModeToggle.style.cursor = 'pointer';
document.body.appendChild(darkModeToggle);

darkModeToggle.addEventListener('click', () => {
  // Toggle dark mode class
  document.body.classList.toggle('dark-mode');
  document.querySelector('nav').classList.toggle('dark-mode');
  const sections = document.querySelectorAll('.bg-white');
  sections.forEach(section => section.classList.toggle('dark-mode'));
  const textSections = document.querySelectorAll('.text-gray-700');
  textSections.forEach(text => text.classList.toggle('dark-mode'));
  const blueSections = document.querySelectorAll('.text-blue-600');
  blueSections.forEach(text => text.classList.toggle('dark-mode'));

  // Save the user's preference in localStorage
  const isDarkMode = document.body.classList.contains('dark-mode');
  localStorage.setItem('darkMode', isDarkMode);
});
