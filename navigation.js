document.querySelectorAll('.nav-category').forEach(menu => {
 menu.addEventListener('toggle', () => {
  if (menu.open) document.querySelectorAll('.nav-category').forEach(other => { if (other !== menu) other.open = false; });
 });
 menu.addEventListener('keydown', event => {
  if (event.key === 'Escape') { menu.open = false; menu.querySelector('summary').focus(); }
 });
});
document.addEventListener('click', event => {
 if (!event.target.closest('.nav-category')) document.querySelectorAll('.nav-category').forEach(menu => { menu.open = false; });
});
