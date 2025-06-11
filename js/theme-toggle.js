document.addEventListener('DOMContentLoaded', () => {
  const body = document.body;
  const toggle = document.getElementById('theme-toggle');
  const icon = document.getElementById('theme-icon');

  const updateIcon = (theme) => {
    icon.textContent = theme === 'dark' ? '🌙' : '🌞';
  };

  if (toggle && icon) {
    toggle.addEventListener('click', () => {
      const current = body.getAttribute('data-theme');
      const next = current === 'light' ? 'dark' : 'light';
      body.setAttribute('data-theme', next);
      localStorage.setItem('theme', next);
      updateIcon(next);
    });
  }

  const saved = localStorage.getItem('theme') || 'light';
  body.setAttribute('data-theme', saved);
  updateIcon(saved);
});
