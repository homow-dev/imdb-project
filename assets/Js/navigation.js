import { lockScroll, unlockScroll } from './utils.js';

// Navigation setup
function setupNavigation() {
  if (window.matchMedia("(max-width: 767px)").matches) {
    setupNav("#open-mobile-nav", ".close-nav-mobile", ".nav-container-mobile");
  } else if (window.matchMedia("(min-width: 768px) and (max-width: 1023px)").matches) {
    setupNav("#open-tablet-nav", ".close-nav-tablet", ".nav-container-tablet");
  } else if (window.matchMedia("(min-width: 1024px)").matches) {
    setupNav("#open-desktop-nav", ".close-nav-desktop", ".nav-container-desktop");
  }
}

function setupNav(openBtnId, closeBtnSelector, menuSelector) {
  const openButton = document.querySelector(openBtnId);
  const closeButton = document.querySelector(closeBtnSelector);
  const menu = document.querySelector(menuSelector);

  if (openButton && closeButton && menu) {
    openButton.addEventListener("click", () => {
      menu.classList.add("OpenNav");
      lockScroll();
    });

    closeButton.addEventListener("click", () => {
      menu.classList.remove("OpenNav");
      unlockScroll();
    });
  }
}

// Back to top button
function setupBackToTop() {
  const backToTopButton = document.querySelector(".to-the-top");
  if (!backToTopButton) return;

  window.addEventListener('scroll', () => {
    if (window.scrollY >= 2000) {
      backToTopButton.classList.add("Apear-toTheTop");
    } else {
      backToTopButton.classList.remove("Apear-toTheTop");
    }
  });

  backToTopButton.addEventListener('click', (e) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}

// Sign in notification
function setupSignInNotification() {
  const notifElement = document.querySelector(".sign-in-notif");
  if (!notifElement) return;

  setTimeout(() => {
    notifElement.classList.add("notif");
    setTimeout(() => notifElement.classList.remove("notif"), 10000);
  }, 2000);
}

export { setupNavigation, setupBackToTop, setupSignInNotification }; 