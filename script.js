const menuButton = document.querySelector('.menu-toggle');
const mobileNav = document.querySelector('#mobile-nav');

function closeMenu() {
  mobileNav.hidden = true;
  menuButton.setAttribute('aria-expanded', 'false');
  menuButton.setAttribute('aria-label', 'Abrir menu');
}

menuButton.addEventListener('click', () => {
  const isOpen = menuButton.getAttribute('aria-expanded') === 'true';
  mobileNav.hidden = isOpen;
  menuButton.setAttribute('aria-expanded', String(!isOpen));
  menuButton.setAttribute('aria-label', isOpen ? 'Abrir menu' : 'Fechar menu');
});

mobileNav.addEventListener('click', (event) => {
  if (event.target.closest('a')) closeMenu();
});

document.addEventListener('click', (event) => {
  if (!mobileNav.hidden && !mobileNav.contains(event.target) && !menuButton.contains(event.target)) {
    closeMenu();
  }
});

document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape' && !mobileNav.hidden) {
    closeMenu();
    menuButton.focus();
  }
});

const desktopQuery = window.matchMedia('(min-width: 851px)');
desktopQuery.addEventListener('change', (event) => {
  if (event.matches) closeMenu();
});

const dialogs = document.querySelectorAll('dialog');
const initialSearchMessage = 'Nossa vitrine ainda está sendo preparada. Em breve você poderá buscar produtos por aqui.';
const searchInput = document.querySelector('#search-input');
const searchFeedback = document.querySelector('#search-feedback');

document.querySelectorAll('[data-open-dialog]').forEach((button) => {
  button.addEventListener('click', () => {
    const dialog = document.getElementById(button.dataset.openDialog);
    if (!dialog || dialog.open) return;

    closeMenu();
    if (dialog.id === 'search-dialog') {
      searchInput.value = '';
      searchFeedback.textContent = initialSearchMessage;
    }
    dialog.showModal();
    document.body.classList.add('modal-open');
    if (dialog.id === 'search-dialog') searchInput.focus();
  });
});

dialogs.forEach((dialog) => {
  dialog.querySelectorAll('[data-close-dialog]').forEach((button) => {
    button.addEventListener('click', () => dialog.close());
  });

  // A click on the backdrop has the dialog as its target but lands outside its box.
  dialog.addEventListener('click', (event) => {
    if (event.target !== dialog) return;
    const bounds = dialog.getBoundingClientRect();
    const outside = event.clientX < bounds.left || event.clientX > bounds.right ||
      event.clientY < bounds.top || event.clientY > bounds.bottom;
    if (outside) dialog.close();
  });

  dialog.addEventListener('close', () => {
    if (!document.querySelector('dialog[open]')) document.body.classList.remove('modal-open');
  });
});

document.querySelector('#search-form').addEventListener('submit', (event) => {
  event.preventDefault();
  const term = searchInput.value.trim();
  searchFeedback.textContent = term
    ? `Ainda não há produtos para “${term}”. Nossa vitrine está sendo preparada.`
    : initialSearchMessage;
});

document.querySelector('#newsletter-form').addEventListener('submit', (event) => {
  event.preventDefault();
  document.querySelector('#newsletter-feedback').textContent =
    'O cadastro ainda não está ativo nesta prévia. Seu e-mail não foi enviado nem armazenado.';
  event.currentTarget.reset();
});

document.querySelector('#year').textContent = new Date().getFullYear();
