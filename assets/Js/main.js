// Import all modules
import { lockScroll, unlockScroll } from './utils.js';
import { setupNavigation, setupBackToTop, setupSignInNotification } from './navigation.js';
import { fetchBanner, fetchUpNext, fetchFeaturedToday, fetchPopularActors, fetchTopTen, fetchInterest, fetchBorn, fetchFanFavorites, fetchBannerSideContent } from './dataFetcher.js';
import { initializeSwipers } from './swiperManager.js';

// Wait for page to load
document.addEventListener("DOMContentLoaded", () => {
  // Setup basic functions
  setupNavigation();
  setupBackToTop();
  setupSignInNotification();

  // Handle window resize
  let resizeTimer;
  window.addEventListener("resize", () => {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(() => {
      setupNavigation();
    }, 250);
  });

          // Load all data
        fetchBanner();
        fetchBannerSideContent();
        fetchUpNext();
        fetchFeaturedToday();
        fetchPopularActors();
        fetchTopTen();
        fetchInterest();
        fetchBorn();
        fetchFanFavorites();

  // Initialize all Swipers
  initializeSwipers();
});
