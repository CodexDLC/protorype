/* ============================================================
   FLORA DELUXE — BASE.JS
   Vanilla JS, no dependencies
   ============================================================ */

document.addEventListener('DOMContentLoaded', () => {

  // ── Burger / Nav Drawer ──────────────────────────────────────
  const burger     = document.querySelector('.js-burger');
  const navDrawer  = document.querySelector('.js-nav-drawer');
  const overlay    = document.querySelector('.js-overlay');

  function openNav() {
    burger?.classList.add('is-open');
    navDrawer?.classList.add('is-open');
    overlay?.classList.add('is-active');
    document.body.style.overflow = 'hidden';
  }

  function closeNav() {
    burger?.classList.remove('is-open');
    navDrawer?.classList.remove('is-open');
    overlay?.classList.remove('is-active');
    document.body.style.overflow = '';
  }

  burger?.addEventListener('click', () => {
    navDrawer?.classList.contains('is-open') ? closeNav() : openNav();
  });

  document.querySelector('.js-nav-close')?.addEventListener('click', closeNav);

  // ── Cart Drawer ──────────────────────────────────────────────
  const cartDrawer    = document.querySelector('.js-cart-drawer');
  const cartBtns      = document.querySelectorAll('.js-open-cart');
  const cartClose     = document.querySelector('.js-cart-close');

  function openCart() {
    cartDrawer?.classList.add('is-open');
    overlay?.classList.add('is-active');
    document.body.style.overflow = 'hidden';
  }

  function closeCart() {
    cartDrawer?.classList.remove('is-open');
    overlay?.classList.remove('is-active');
    document.body.style.overflow = '';
  }

  cartBtns.forEach(btn => btn.addEventListener('click', openCart));
  cartClose?.addEventListener('click', closeCart);

  // ── Overlay click closes everything ─────────────────────────
  overlay?.addEventListener('click', () => {
    closeNav();
    closeCart();
  });

  // ── Add to Cart ──────────────────────────────────────────────
  let cartCount = 0;
  const cartBadge = document.querySelector('.js-cart-badge');

  document.querySelectorAll('.js-add-to-cart').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      cartCount++;
      if (cartBadge) cartBadge.textContent = cartCount;
      showToast('Добавлено в корзину');
    });
  });

  // ── Toast ────────────────────────────────────────────────────
  const toast = document.querySelector('.js-toast');
  let toastTimer = null;

  function showToast(message) {
    if (!toast) return;
    toast.textContent = message;
    toast.classList.add('is-visible');
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => {
      toast.classList.remove('is-visible');
    }, 2500);
  }

  // ── Sticky header shadow on scroll ──────────────────────────
  const header = document.querySelector('.js-header');

  window.addEventListener('scroll', () => {
    if (!header) return;
    header.style.boxShadow = window.scrollY > 0
      ? '0 2px 16px rgba(0,0,0,0.12)'
      : 'none';
  }, { passive: true });

  // ── Smooth scroll for anchor links ──────────────────────────
  document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', (e) => {
      const target = document.querySelector(link.getAttribute('href'));
      if (!target) return;
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      closeNav();
    });
  });

});
