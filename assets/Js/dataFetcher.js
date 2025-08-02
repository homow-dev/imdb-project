// Fetch and display data functions
async function fetchBanner() {
  try {
    const data = await fetch("https://raw.githubusercontent.com/nima-pur/imdb/refs/heads/main/db.json");
    const res = await data.json();
    const bannerData = res.banner;
    
    const banner = bannerData.map(slide => `
      <div class="swiper-slide">
        <div class="banner-img">
          <img src="${slide.bannerImage}" alt="${slide.bannerAlt}">
        </div>
        <div class="banner-info">
          <div class="banner-thumbnail">
            <img src="${slide.thumbImage}" alt="${slide.thumbAlt}">
          </div>
          <div class="banner-bottom-info">
            <div class="banner-play-svg"><svg width="100%" height="100%" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path fill-rule="evenodd" clip-rule="evenodd" d="M11.0748 7.50835C9.74622 6.72395 8.25 7.79065 8.25 9.21316V14.7868C8.25 16.2093 9.74622 17.276 11.0748 16.4916L15.795 13.7048C17.0683 12.953 17.0683 11.047 15.795 10.2952L11.0748 7.50835ZM9.75 9.21316C9.75 9.01468 9.84615 8.87585 9.95947 8.80498C10.0691 8.73641 10.1919 8.72898 10.3122 8.80003L15.0324 11.5869C15.165 11.6652 15.25 11.8148 15.25 12C15.25 12.1852 15.165 12.3348 15.0324 12.4131L10.3122 15.2C10.1919 15.271 10.0691 15.2636 9.95947 15.195C9.84615 15.1242 9.75 14.9853 9.75 14.7868V9.21316Z" fill="#ffffff"></path> <path fill-rule="evenodd" clip-rule="evenodd" d="M12 1.25C6.06294 1.25 1.25 6.06294 1.25 12C1.25 17.9371 6.06294 22.75 12 22.75C17.9371 22.75 22.75 17.9371 22.75 12C22.75 6.06294 17.9371 1.25 12 1.25ZM2.75 12C2.75 6.89137 6.89137 2.75 12 2.75C17.1086 2.75 21.25 6.89137 21.25 12C21.25 17.1086 17.1086 21.25 12 21.25C6.89137 21.25 2.75 17.1086 2.75 12Z" fill="#ffffff"></path> </g></svg></div>
            <div class="banner-text-info">
              <h2>${slide.title}</h2>
              <h3>${slide.subtitle}</h3>
              <div class="banner-likes"><svg width="20px" height="20px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M8 10V20M8 10L4 9.99998V20L8 20M8 10L13.1956 3.93847C13.6886 3.3633 14.4642 3.11604 15.1992 3.29977L15.2467 3.31166C16.5885 3.64711 17.1929 5.21057 16.4258 6.36135L14 9.99998H18.5604C19.8225 9.99998 20.7691 11.1546 20.5216 12.3922L19.3216 18.3922C19.1346 19.3271 18.3138 20 17.3604 20L8 20" stroke="#afafaf" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg> <span>${slide.likes}</span><svg version="1.0" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="20px" height="20px" viewBox="0 0 64 64" enable-background="new 0 0 64 64" xml:space="preserve" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <path fill="#F76D57" d="M58.714,29.977c0,0-0.612,0.75-1.823,1.961S33.414,55.414,33.414,55.414C33.023,55.805,32.512,56,32,56 s-1.023-0.195-1.414-0.586c0,0-22.266-22.266-23.477-23.477s-1.823-1.961-1.823-1.961C3.245,27.545,2,24.424,2,21 C2,13.268,8.268,7,16,7c3.866,0,7.366,1.566,9.899,4.101l0.009-0.009l4.678,4.677c0.781,0.781,2.047,0.781,2.828,0l4.678-4.677 l0.009,0.009C40.634,8.566,44.134,7,48,7c7.732,0,14,6.268,14,14C62,24.424,60.755,27.545,58.714,29.977z"></path> <path fill="#F76D57" d="M58.714,29.977c0,0-0.612,0.75-1.823,1.961S33.414,55.414,33.414,55.414C33.023,55.805,32.512,56,32,56 s-1.023-0.195-1.414-0.586c0,0-22.266-22.266-23.477-23.477s-1.823-1.961-1.823-1.961C3.245,27.545,2,24.424,2,21 C2,13.268,8.268,7,16,7c3.866,0,7.366,1.566,9.899,4.101l0.009-0.009l4.678,4.677c0.781,0.781,2.047,0.781,2.828,0l4.678-4.677 l0.009,0.009C40.634,8.566,44.134,7,48,7c7.732,0,14,6.268,14,14C62,24.424,60.755,27.545,58.714,29.977z"></path> <g> <path fill="#394240" d="M48,5c-4.418,0-8.418,1.791-11.313,4.687l-3.979,3.961c-0.391,0.391-1.023,0.391-1.414,0 c0,0-3.971-3.97-3.979-3.961C24.418,6.791,20.418,5,16,5C7.163,5,0,12.163,0,21c0,3.338,1.024,6.436,2.773,9 c0,0,0.734,1.164,1.602,2.031s24.797,24.797,24.797,24.797C29.953,57.609,30.977,58,32,58s2.047-0.391,2.828-1.172 c0,0,23.93-23.93,24.797-24.797S61.227,30,61.227,30C62.976,27.436,64,24.338,64,21C64,12.163,56.837,5,48,5z M58.714,29.977 c0,0-0.612,0.75-1.823,1.961S33.414,55.414,33.414,55.414C33.023,55.805,32.512,56,32,56s-1.023-0.195-1.414-0.586 c0,0-22.266-22.266-23.477-23.477s-1.823-1.961-1.823-1.961C3.245,27.545,2,24.424,2,21C2,13.268,8.268,7,16,7 c3.866,0,7.366,1.566,9.899,4.101l0.009-0.009l4.678,4.677c0.781,0.781,2.047,0.781,2.828,0l4.678-4.677l0.009,0.009 C40.634,8.566,44.134,7,48,7c7.732,0,14,6.268,14,14C62,24.424,60.755,27.545,58.714,29.977z"></path> <path fill="#394240" d="M48,11c-0.553,0-1,0.447-1,1s0.447,1,1,1c4.418,0,8,3.582,8,8c0,0.553,0.447,1,1,1s1-0.447,1-1 C58,15.478,53.522,11,48,11z"></path> </g> </g> </g></svg><span>${slide.favorites}</span></div>
            </div>
            <h5>${slide.duration}</h5>
          </div>
        </div>
      </div>
    `);

    document.querySelectorAll(".bannerslide .swiper-wrapper").forEach(wrapper => {
      wrapper.innerHTML = banner.join("");
    });
  } catch (error) {
    console.log(error.message);
  }
}

async function fetchUpNext() {
  try {
    const data = await fetch("https://raw.githubusercontent.com/nima-pur/imdb/refs/heads/main/db.json");
    const res = await data.json();
    const upNextData = res.upnext;
    
    const upNext = upNextData.map(slide => `
      <div class="swiper-slide">
        <div class="picture">
          <img src="${slide.upnextimage}" alt="${slide.upnextAlt}">
          <svg width="35px" height="35px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#ffffff"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M7 8H21M7 12H21M7 16H21M3 8H3.01M3 12H3.01M3 16H3.01" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
        </div>
        <h2>${slide.title}</h2>
        <h3>${slide.subtitle}</h3>
      </div>
    `);

    document.querySelectorAll(".up-next-container .swiper-wrapper").forEach(wrapper => {
      wrapper.innerHTML = upNext.join("");
    });
  } catch (error) {
    console.log(error.message);
  }
}

async function fetchFeaturedToday() {
  try {
    const data = await fetch("https://raw.githubusercontent.com/nima-pur/imdb/refs/heads/main/db.json");
    const res = await data.json();
    const featuredData = res.featuredtoday;
    
    const featuredToday = featuredData.map(slide => `
      <div class="swiper-slide">
        <div class="picture">
          <img src="${slide.featuredimage}" alt="${slide.feturedAlt}">
          <svg width="35px" height="35px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#ffffff"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M7 8H21M7 12H21M7 16H21M3 8H3.01M3 12H3.01M3 16H3.01" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
        </div>
        <h2>${slide.title}</h2>
        <h3>${slide.subtitle}</h3>
      </div>
    `);

    document.querySelectorAll(".featured-today-container .swiper-wrapper").forEach(wrapper => {
      wrapper.innerHTML = featuredToday.join("");
    });
  } catch (error) {
    console.log(error.message);
  }
}

async function fetchPopularActors() {
  try {
    const data = await fetch("https://raw.githubusercontent.com/nima-pur/imdb/refs/heads/main/db.json");
    const res = await data.json();
    const popularData = res.popular;
    
    const popular = popularData.map(slide => `
      <div class="swiper-slide">
        <img src="${slide.popularimage}" alt="${slide.PopularAlt}" />
        <h4>${slide.description.rate} (<svg width="10px" height="10px" viewBox="0 -0.5 17 17" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" class="si-glyph si-glyph-triangle-up" fill="#67AD4B"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <title>1236</title> <defs> </defs> <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"> <path d="M7.96,2.392 C8.541,1.812 9.482,1.812 10.064,2.392 L16.506,8.836 C17.088,9.417 17.345,10.939 15.506,10.939 L2.518,10.939 C0.616,10.939 0.936,9.418 1.517,8.836 L7.96,2.392 L7.96,2.392 Z" fill="#67AD4B" class="si-glyph-fill"> </path> </g> </g></svg> ${slide.description.vote})</h4>
        <h3>${slide.title}</h3>
      </div>
    `);

    document.querySelectorAll(".pa-container .swiper-wrapper").forEach(wrapper => {
      wrapper.innerHTML = popular.join("");
    });
  } catch (error) {
    console.log(error.message);
  }
}

async function fetchTopTen() {
  try {
    const data = await fetch("https://raw.githubusercontent.com/nima-pur/imdb/refs/heads/main/db.json");
    const res = await data.json();
    const topTenData = res.topten;
    
    const topTen = topTenData.map(slide => `
      <div class="swiper-slide">
        <div class="picture">
          <img src="${slide.image}" alt="${slide.alt}">
          <svg width="35px" height="35px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#ffffff"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M7 8H21M7 12H21M7 16H21M3 8H3.01M3 12H3.01M3 16H3.01" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
        </div>
        <h2>${slide.title}</h2>
        <h3>Rating: ${slide.rating}</h3>
      </div>
    `);

    document.querySelectorAll(".top-ten-container .swiper-wrapper").forEach(wrapper => {
      wrapper.innerHTML = topTen.join("");
    });
  } catch (error) {
    console.log(error.message);
  }
}

async function fetchInterest() {
  try {
    const data = await fetch("https://raw.githubusercontent.com/nima-pur/imdb/refs/heads/main/db.json");
    const res = await data.json();
    const interestData = res.interest;
    
    const interest = interestData.map(slide => `
      <div class="swiper-slide">
        <div class="picture">
          <img src="${slide.imageUrl}" alt="${slide.altText}">
          <svg width="35px" height="35px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#ffffff"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M7 8H21M7 12H21M7 16H21M3 8H3.01M3 12H3.01M3 16H3.01" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
        </div>
        <h2>${slide.titleText}</h2>
      </div>
    `);

    document.querySelectorAll(".popular-interests-container .swiper-wrapper").forEach(wrapper => {
      wrapper.innerHTML = interest.join("");
    });
  } catch (error) {
    console.log(error.message);
  }
}

async function fetchBorn() {
  try {
    const data = await fetch("https://raw.githubusercontent.com/nima-pur/imdb/refs/heads/main/db.json");
    const res = await data.json();
    const bornData = res.borntoday;
    
    const bornToday = bornData.map(slide => `
      <div class="swiper-slide">
        <div class="picture">
          <img src="${slide.borntodayimage}" alt="${slide.borntodayAlt}">
          <svg width="35px" height="35px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#ffffff"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M7 8H21M7 12H21M7 16H21M3 8H3.01M3 12H3.01M3 16H3.01" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
        </div>
        <h2>${slide.title}</h2>
        <h3>${slide.subtitle}</h3>
      </div>
    `);

    document.querySelectorAll(".born-today-container .swiper-wrapper").forEach(wrapper => {
      wrapper.innerHTML = bornToday.join("");
    });
  } catch (error) {
    console.log(error.message);
  }
}

async function fetchFanFavorites() {
  try {
    const data = await fetch("https://raw.githubusercontent.com/nima-pur/imdb/refs/heads/main/db.json");
    const res = await data.json();
    const fanFavoritesData = res.fanfavorites;
    
    const fanFavorites = fanFavoritesData.map(slide => `
      <div class="swiper-slide">
        <div class="picture">
          <img src="${slide.fanfavoritesimage}" alt="${slide.fanfavoritesAlt}">
          <svg width="35px" height="35px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#ffffff"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M7 8H21M7 12H21M7 16H21M3 8H3.01M3 12H3.01M3 16H3.01" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
        </div>
        <h2>${slide.title}</h2>
        <h3>${slide.subtitle}</h3>
      </div>
    `);

    document.querySelectorAll(".fan-favorites-slider-desktop .swiper-wrapper, .fan-favorites-slider-tablet .swiper-wrapper, .fan-favorites-slider-mobile .swiper-wrapper").forEach(wrapper => {
      wrapper.innerHTML = fanFavorites.join("");
    });
  } catch (error) {
    console.log(error.message);
  }
}

async function fetchBannerSideContent() {
  try {
    const data = await fetch("https://raw.githubusercontent.com/nima-pur/imdb/refs/heads/main/db.json");
    const res = await data.json();
    const bannerData = res.banner;
    
    // فقط 3 آیتم اول را برای banner-side-content استفاده می‌کنیم
    const sideContent = bannerData.slice(0, 3).map(slide => `
      <div class="banner-side-info">
        <div class="banner-info">
          <div class="banner-thumbnail">
            <img src="${slide.thumbImage}" alt="${slide.thumbAlt}">
          </div>
          <div class="banner-bottom-info">
            <div class="banner-play-svg">
              <svg width="100%" height="100%" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path fill-rule="evenodd" clip-rule="evenodd" d="M11.0748 7.50835C9.74622 6.72395 8.25 7.79065 8.25 9.21316V14.7868C8.25 16.2093 9.74622 17.276 11.0748 16.4916L15.795 13.7048C17.0683 12.953 17.0683 11.047 15.795 10.2952L11.0748 7.50835ZM9.75 9.21316C9.75 9.01468 9.84615 8.87585 9.95947 8.80498C10.0691 8.73641 10.1919 8.72898 10.3122 8.80003L15.0324 11.5869C15.165 11.6652 15.25 11.8148 15.25 12C15.25 12.1852 15.165 12.3348 15.0324 12.4131L10.3122 15.2C10.1919 15.271 10.0691 15.2636 9.95947 15.195C9.84615 15.1242 9.75 14.9853 9.75 14.7868V9.21316Z" fill="#ffffff"></path> <path fill-rule="evenodd" clip-rule="evenodd" d="M12 1.25C6.06294 1.25 1.25 6.06294 1.25 12C1.25 17.9371 6.06294 22.75 12 22.75C17.9371 22.75 22.75 17.9371 22.75 12C22.75 6.06294 17.9371 1.25 12 1.25ZM2.75 12C2.75 6.89137 6.89137 2.75 12 2.75C17.1086 2.75 21.25 6.89137 21.25 12C21.25 17.1086 17.1086 21.25 12 21.25C6.89137 21.25 2.75 17.1086 2.75 12Z" fill="#ffffff"></path> </g></svg>
            </div>
            <div class="banner-text-info">
              <h2>${slide.title}</h2>
              <h3>${slide.subtitle}</h3>
            </div>
            <div class="banner-likes">
              <svg width="20px" height="20px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M8 10V20M8 10L4 9.99998V20L8 20M8 10L13.1956 3.93847C13.6886 3.3633 14.4642 3.11604 15.1992 3.29977L15.2467 3.31166C16.5885 3.64711 17.1929 5.21057 16.4258 6.36135L14 9.99998H18.5604C19.8225 9.99998 20.7691 11.1546 20.5216 12.3922L19.3216 18.3922C19.1346 19.3271 18.3138 20 17.3604 20L8 20" stroke="#afafaf" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg> 
              <span>${slide.likes}</span>
              <svg version="1.0" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="20px" height="20px" viewBox="0 0 64 64" enable-background="new 0 0 64 64" xml:space="preserve" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <path fill="#F76D57" d="M58.714,29.977c0,0-0.612,0.75-1.823,1.961S33.414,55.414,33.414,55.414C33.023,55.805,32.512,56,32,56 s-1.023-0.195-1.414-0.586c0,0-22.266-22.266-23.477-23.477s-1.823-1.961-1.823-1.961C3.245,27.545,2,24.424,2,21 C2,13.268,8.268,7,16,7c3.866,0,7.366,1.566,9.899,4.101l0.009-0.009l4.678,4.677c0.781,0.781,2.047,0.781,2.828,0l4.678-4.677 l0.009,0.009C40.634,8.566,44.134,7,48,7c7.732,0,14,6.268,14,14C62,24.424,60.755,27.545,58.714,29.977z"></path> <path fill="#F76D57" d="M58.714,29.977c0,0-0.612,0.75-1.823,1.961S33.414,55.414,33.414,55.414C33.023,55.805,32.512,56,32,56 s-1.023-0.195-1.414-0.586c0,0-22.266-22.266-23.477-23.477s-1.823-1.961-1.823-1.961C3.245,27.545,2,24.424,2,21 C2,13.268,8.268,7,16,7c3.866,0,7.366,1.566,9.899,4.101l0.009-0.009l4.678,4.677c0.781,0.781,2.047,0.781,2.828,0l4.678-4.677 l0.009,0.009C40.634,8.566,44.134,7,48,7c7.732,0,14,6.268,14,14C62,24.424,60.755,27.545,58.714,29.977z"></path> <g> <path fill="#394240" d="M48,5c-4.418,0-8.418,1.791-11.313,4.687l-3.979,3.961c-0.391,0.391-1.023,0.391-1.414,0 c0,0-3.971-3.97-3.979-3.961C24.418,6.791,20.418,5,16,5C7.163,5,0,12.163,0,21c0,3.338,1.024,6.436,2.773,9 c0,0,0.734,1.164,1.602,2.031s24.797,24.797,24.797,24.797C29.953,57.609,30.977,58,32,58s2.047-0.391,2.828-1.172 c0,0,23.93-23.93,24.797-24.797S61.227,30,61.227,30C62.976,27.436,64,24.338,64,21C64,12.163,56.837,5,48,5z M58.714,29.977 c0,0-0.612,0.75-1.823,1.961S33.414,55.414,33.414,55.414C33.023,55.805,32.512,56,32,56s-1.023-0.195-1.414-0.586 c0,0-22.266-22.266-23.477-23.477s-1.823-1.961-1.823-1.961C3.245,27.545,2,24.424,2,21C2,13.268,8.268,7,16,7 c3.866,0,7.366,1.566,9.899,4.101l0.009-0.009l4.678,4.677c0.781,0.781,2.047,0.781,2.828,0l4.678-4.677l0.009,0.009 C40.634,8.566,44.134,7,48,7c7.732,0,14,6.268,14,14C62,24.424,60.755,27.545,58.714,29.977z"></path> <path fill="#394240" d="M48,11c-0.553,0-1,0.447-1,1s0.447,1,1,1c4.418,0,8,3.582,8,8c0,0.553,0.447,1,1,1s1-0.447,1-1 C58,15.478,53.522,11,48,11z"></path> </g> </g> </g></svg>
              <span>${slide.favorites}</span>
            </div>
          </div>
        </div>
      </div>
    `);

    document.querySelectorAll(".banner-side-content").forEach(container => {
      container.innerHTML = sideContent.join("");
    });
  } catch (error) {
    console.log(error.message);
  }
}

export { fetchBanner, fetchUpNext, fetchFeaturedToday, fetchPopularActors, fetchTopTen, fetchInterest, fetchBorn, fetchFanFavorites, fetchBannerSideContent }; 