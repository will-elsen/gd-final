// Define page configurations
const pages = {
  '/': {
    title: 'Home',
    background: 'images/home.png'
  },
  '/about': {
    title: 'About',
    background: 'images/info.png'
  },
  '/design': {
    title: 'Design',
    background: 'images/design.png'
  },
  '/functionality': {
    title: 'Functionality',
    background: 'images/functionality.png'
  },
  '/security': {
    title: 'Security',
    background: 'images/security.png'
  },
  '/voice': {
    title: 'Voice',
    background: 'images/info.png'
  },
  '/imagery': {
    title: 'Imagery',
    background: 'images/info.png'
  },
  '/systems': {
    title: 'Systems',
    background: 'images/info.png'
  },
  '/merch': {
    title: 'Merch',
    background: 'images/info.png'
  }
};

// Initialize router globally
let router;

// Function to render a page
function renderPage(route) {
  const page = pages[route];

  if (page) {
    // Update page title
    document.title = page.title;

    // Update background image
    document.body.style.backgroundImage = `url('${page.background}')`;

    // Handle back button for non-home pages
    const contentDiv = document.getElementById('content');
    if (contentDiv) {
      // Clear existing content
      contentDiv.innerHTML = '';

      // Add back button for non-home pages
      if (route !== '/') {
        const backButton = document.createElement('button');
        backButton.className = 'back-button';
        backButton.textContent = '← Back';
        backButton.addEventListener('click', (e) => {
          e.preventDefault();
          router.navigate('/');
        });
        contentDiv.appendChild(backButton);

        // Add scrolls for design page
        if (route === '/design') {
          for (let i = 1; i <= 6; i++) {
            const scroll = document.createElement('img');
            scroll.src = 'images/scroll.png';
            scroll.className = `design-scroll scroll-${i}`;
            contentDiv.appendChild(scroll);
          }
        }
      } else {
        // Add images to home page
        const shield = document.createElement('img');
        shield.src = 'images/shield.png';
        shield.className = 'home-image shield';
        shield.addEventListener('click', () => router.navigate('/security'));
        contentDiv.appendChild(shield);

        const staff = document.createElement('img');
        staff.src = 'images/staff.png';
        staff.className = 'home-image staff';
        staff.addEventListener('click', () => router.navigate('/design'));
        contentDiv.appendChild(staff);

        const golem = document.createElement('img');
        golem.src = 'images/golem.png';
        golem.className = 'home-image golem';
        golem.addEventListener('click', () => router.navigate('/functionality'));
        contentDiv.appendChild(golem);
      }
    }
  }
}

// Initialize router when DOM is loaded
window.addEventListener('DOMContentLoaded', () => {
  router = new Navigo('/', { hash: false });

  // Define routes
  router
    .on('/', () => renderPage('/'))
    .on('/about', () => renderPage('/about'))
    .on('/design', () => renderPage('/design'))
    .on('/functionality', () => renderPage('/functionality'))
    .on('/security', () => renderPage('/security'))
    .on('/voice', () => renderPage('/voice'))
    .on('/imagery', () => renderPage('/imagery'))
    .on('/systems', () => renderPage('/systems'))
    .on('/merch', () => renderPage('/merch'))
    .resolve();
});
