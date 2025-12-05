// DOM Elements
const navToggle = document.querySelector('.nav-toggle');
const navMenu = document.querySelector('.nav-menu');
const navLinks = document.querySelectorAll('.nav-link');
const heroSlider = document.querySelector('.hero-slider');
const slides = document.querySelectorAll('.slide');
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');
const searchInput = document.getElementById('searchInput');
const searchBtn = document.getElementById('searchBtn');
const filterBtns = document.querySelectorAll('.filter-btn');
const destinationsGrid = document.getElementById('destinationsGrid');
const loadMoreBtn = document.getElementById('loadMoreBtn');
const destinationModal = document.getElementById('destinationModal');
const modalContent = document.getElementById('modalContent');
const closeModal = document.querySelector('.close');

// Data Wisata NTT
const destinationsData = [
    {
        id: 1,
        title: "Labuan Bajo",
        location: "Flores, NTT",
        category: "pulau",
        image: "aset/LABUAN BAJO.jpg",
        description: "Gerbang menuju Taman Nasional Komodo dengan pemandangan sunset yang memukau dan aktivitas diving terbaik.",
        rating: 4.8,
        reviews: 2150,
        price: "Rp 500.000",
        badge: "Populer",
        images: [
            "aset/LABUAN BAJO.jpg",
            "aset/raja ampat.jpg",
            "aset/kelimutu.jpg"
        ],
        facilities: ["Resort", "Diving Center", "Restaurant", "Speedboat Rental"],
        activities: ["Diving", "Snorkeling", "Sunset Viewing", "Island Hopping"]
    },
    {
        id: 2,
        title: "Pulau Komodo",
        location: "Taman Nasional Komodo",
        category: "komodo",
        image: "aset/komodo.jpg",
        description: "Habitat asli komodo dengan pemandangan savana yang menakjubkan dan satwa liar yang unik.",
        rating: 4.9,
        reviews: 1890,
        price: "Rp 750.000",
        badge: "UNESCO",
        images: [
            "aset/komodo.jpg",
            "aset/pulau komodo.jpg"
        ],
        facilities: ["Ranger Guide", "Visitor Center", "Restaurant", "Boat Transfer"],
        activities: ["Komodo Watching", "Trekking", "Photography", "Wildlife Tour"]
    },
    {
        id: 3,
        title: "Pink Beach",
        location: "Pulau Komodo",
        category: "pantai",
        image: "aset/pantai pink.jpg",
        description: "Pantai dengan pasir berwarna pink yang unik di dunia, hasil dari serpihan karang merah.",
        rating: 4.7,
        reviews: 1650,
        price: "Rp 300.000",
        badge: "Unik",
        images: [
            "aset/pantai pink.jpg",
            "aset/LABUAN BAJO.jpg"
        ],
        facilities: ["Snorkeling Gear", "Restaurant", "Photo Spot", "Boat Transfer"],
        activities: ["Snorkeling", "Photography", "Swimming", "Beach Walking"]
    },
    {
        id: 4,
        title: "Pulau Padar",
        location: "Taman Nasional Komodo",
        category: "pulau",
        image: "aset/kapal.jpg",
        description: "Pulau dengan tiga pantai berwarna berbeda dan spot foto sunrise terbaik di NTT.",
        rating: 4.8,
        reviews: 1420,
        price: "Rp 400.000",
        badge: "Instagramable",
        images: [
            "aset/kapal.jpg",
            "aset/LABUAN BAJO.jpg"
        ],
        facilities: ["Hiking Trail", "Photo Spot", "Restaurant", "Boat Transfer"],
        activities: ["Hiking", "Sunrise Viewing", "Photography", "Island Hopping"]
    },
    {
        id: 5,
        title: "Kelimutu",
        location: "Ende, Flores",
        category: "budaya",
        image: "aset/kelimutu.jpg",
        description: "Gunung dengan tiga danau kawah berwarna berbeda yang berubah-ubah sesuai musim.",
        rating: 4.6,
        reviews: 1280,
        price: "Rp 150.000",
        badge: "Misterius",
        images: [
            "aset/kelimutu.jpg",
            "aset/kelimutu 3.jpg"
        ],
        facilities: ["Parking", "Guide", "Homestay", "Restaurant"],
        activities: ["Sunrise Viewing", "Hiking", "Photography", "Cultural Tour"]
    },
    {
        id: 6,
        title: "Pantai Waingapu",
        location: "Sumba Timur",
        category: "pantai",
        image: "aset/waingapu.avif",
        description: "Pantai dengan ombak yang cocok untuk surfing dan budaya Sumba yang masih autentik.",
        rating: 4.4,
        reviews: 950,
        price: "Rp 200.000",
        badge: "Surfing",
        images: [
            "aset/waingapu.avif",
            "aset/kuda sumba.jpg"
        ],
        facilities: ["Surfing Equipment", "Restaurant", "Homestay", "Cultural Center"],
        activities: ["Surfing", "Cultural Tour", "Photography", "Beach Walking"]
    },
    {
        id: 7,
        title: "Pulau Rinca",
        location: "Taman Nasional Komodo",
        category: "komodo",
        image: "aset/0916c43d72ac007aee1a1a7d6d31d231.jpg",
        description: "Pulau dengan populasi komodo terbesar dan pemandangan savana yang menakjubkan.",
        rating: 4.7,
        reviews: 1350,
        price: "Rp 350.000",
        badge: "Wildlife",
        images: [
            "aset/0916c43d72ac007aee1a1a7d6d31d231.jpg",
            "aset/LABUAN BAJO.jpg"
        ],
        facilities: ["Ranger Guide", "Visitor Center", "Restaurant", "Boat Transfer"],
        activities: ["Komodo Watching", "Trekking", "Wildlife Photography", "Nature Tour"]
    },
    {
        id: 8,
        title: "Kampung Adat Bena",
        location: "Ngada, Flores",
        category: "budaya",
        image: "aset/kampung-bena.jpg",
        description: "Desa tradisional Ngada dengan rumah adat megalitik dan budaya yang masih terjaga.",
        rating: 4.5,
        reviews: 850,
        price: "Rp 100.000",
        badge: "Tradisional",
        images: [
            "aset/kampung-bena.jpg.",
            "aset/kampung-bena.jpg."
        ],
        facilities: ["Guide", "Cultural Show", "Souvenir Shop", "Homestay"],
        activities: ["Cultural Tour", "Traditional Craft", "Photography", "Local Food"]
    },
    {
        id: 10,
        title: "Waerebo",
        location: "Manggarai, Flores",
        category: "budaya",
        image: "aset/waerebo 6.jpg",
        description: "Desa tradisional di atas awan dengan rumah kerucut yang unik dan budaya yang masih autentik.",
        rating: 4.7,
        reviews: 1200,
        price: "Rp 300.000",
        badge: "UNESCO",
        images: [
            "aset/waerebo 6.jpg",
            "aset/waerebo manggarai.jpg"
        ],
        facilities: ["Homestay", "Guide", "Traditional Food", "Cultural Show"],
        activities: ["Cultural Tour", "Hiking", "Photography", "Traditional Craft"]
    }
];

// State Management
let currentSlide = 0;
let currentFilter = 'all';
let displayedDestinations = 6;
let filteredDestinations = destinationsData;

// Initialize App
// Main Initialization
document.addEventListener('DOMContentLoaded', function() {
    try {
        // Initialize all features
        initializeSlider();
        initializeNavigation();
        initializeSearch();
        initializeFilters();
        initializeDestinations();
        initializeModal();
        initializeScrollEffects();
        initializeScrollToTop();
        initializeTypingAnimation();
        initializeContactForm();
        
        // Initialize static destination buttons after a short delay to ensure DOM is ready
        setTimeout(() => {
            initializeStaticDestinationButtons();
        }, 500);
        
        // Initialize category cards click handlers
        const categoryCards = document.querySelectorAll('.category-card');
        categoryCards.forEach(card => {
            card.addEventListener('click', function() {
                const category = this.getAttribute('data-category');
                if (category) {
                    applyFilter(category);
                    const destinationsSection = document.getElementById('destinations');
                    if (destinationsSection) {
                        const headerOffset = 80;
                        const elementPosition = destinationsSection.getBoundingClientRect().top;
                        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
                        window.scrollTo({
                            top: offsetPosition,
                            behavior: 'smooth'
                        });
                    }
                }
            });
        });
        
        // Make functions globally accessible for inline event handlers
        window.changeMainImage = changeMainImage;
        window.bookStaticDestination = bookStaticDestination;
        window.shareStaticDestination = shareStaticDestination;
        window.bookDestination = bookDestination;
        window.shareDestination = shareDestination;
        window.resetSearch = resetSearch;
        
        console.log('NTT Explorer initialized successfully!');
    } catch (error) {
        console.error('Error initializing NTT Explorer:', error);
    }
});

// Hero Slider Functions
function initializeSlider() {
    if (!slides || slides.length === 0) return;
    
    showSlide(currentSlide);
    
    // Auto slide every 6 seconds
    let slideInterval = setInterval(() => {
        nextSlide();
    }, 6000);
    
    // Pause on hover
    if (heroSlider) {
        heroSlider.addEventListener('mouseenter', () => {
            clearInterval(slideInterval);
        });
        
        heroSlider.addEventListener('mouseleave', () => {
            slideInterval = setInterval(() => {
                nextSlide();
            }, 6000);
        });
    }
    
    // Event listeners for manual controls
    if (prevBtn) {
        prevBtn.addEventListener('click', () => {
            prevSlide();
            clearInterval(slideInterval);
            slideInterval = setInterval(() => {
                nextSlide();
            }, 6000);
        });
    }
    
    if (nextBtn) {
        nextBtn.addEventListener('click', () => {
            nextSlide();
            clearInterval(slideInterval);
            slideInterval = setInterval(() => {
                nextSlide();
            }, 6000);
        });
    }
    
    // Event listeners for indicators
    const indicators = document.querySelectorAll('.slider-indicators .indicator');
    indicators.forEach((indicator, index) => {
        indicator.addEventListener('click', () => {
            currentSlide = index;
            showSlide(currentSlide);
            clearInterval(slideInterval);
            slideInterval = setInterval(() => {
                nextSlide();
            }, 6000);
        });
    });
}

function showSlide(index) {
    if (!slides || slides.length === 0) return;
    
    // Ensure index is within bounds
    if (index < 0) index = slides.length - 1;
    if (index >= slides.length) index = 0;
    
    slides.forEach((slide, i) => {
        if (slide) {
            slide.classList.toggle('active', i === index);
        }
    });
    
    // Update indicators
    const indicators = document.querySelectorAll('.slider-indicators .indicator');
    indicators.forEach((indicator, i) => {
        if (indicator) {
            indicator.classList.toggle('active', i === index);
        }
    });
}

function nextSlide() {
    if (!slides || slides.length === 0) return;
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
}

function prevSlide() {
    if (!slides || slides.length === 0) return;
    currentSlide = (currentSlide - 1 + slides.length) % slides.length;
    showSlide(currentSlide);
}

// Navigation Functions
function initializeNavigation() {
    if (navToggle) {
        navToggle.addEventListener('click', toggleNavMenu);
    }
    
    // Close menu when clicking outside
    document.addEventListener('click', function(e) {
        if (navMenu && navToggle) {
            const isClickInside = navMenu.contains(e.target) || navToggle.contains(e.target);
            if (!isClickInside && navMenu.classList.contains('active')) {
                closeNavMenu();
            }
        }
    });
    
    navLinks.forEach(link => {
        // Close menu on link click
        link.addEventListener('click', function() {
            closeNavMenu();
        });
        
        // Smooth scrolling for navigation links
        link.addEventListener('click', function(e) {
            const targetId = this.getAttribute('href');
            
            // Only prevent default for anchor links
            if (targetId && targetId.startsWith('#')) {
                e.preventDefault();
                const targetSection = document.querySelector(targetId);
                
                if (targetSection) {
                    const headerOffset = 80;
                    const elementPosition = targetSection.getBoundingClientRect().top;
                    const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
                    
                    window.scrollTo({
                        top: offsetPosition,
                        behavior: 'smooth'
                    });
                }
            }
        });
    });
}

function toggleNavMenu() {
    if (navMenu && navToggle) {
        navMenu.classList.toggle('active');
        navToggle.classList.toggle('active');
        
        // Prevent body scroll when menu is open
        if (navMenu.classList.contains('active')) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
    }
}

function closeNavMenu() {
    if (navMenu && navToggle) {
        navMenu.classList.remove('active');
        navToggle.classList.remove('active');
        document.body.style.overflow = '';
    }
}

// Search Functions
function initializeSearch() {
    if (searchBtn) {
        searchBtn.addEventListener('click', performSearch);
    }
    
    if (searchInput) {
        searchInput.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                performSearch();
            }
        });
        
        searchInput.addEventListener('input', function() {
            if (this.value.length > 2) {
                performSearch();
            } else if (this.value.length === 0) {
                resetSearch();
            }
        });
    }
}

function performSearch() {
    if (!searchInput) return;
    
    const searchTerm = searchInput.value.toLowerCase().trim();
    
    if (searchTerm === '') {
        resetSearch();
        return;
    }
    
    filteredDestinations = destinationsData.filter(destination => 
        destination.title.toLowerCase().includes(searchTerm) ||
        destination.location.toLowerCase().includes(searchTerm) ||
        destination.description.toLowerCase().includes(searchTerm) ||
        destination.category.toLowerCase().includes(searchTerm) ||
        (destination.badge && destination.badge.toLowerCase().includes(searchTerm))
    );
    
    currentFilter = 'search';
    displayedDestinations = Math.min(6, filteredDestinations.length);
    renderDestinations();
    updateFilterButtons();
    
    // Scroll to destinations section if not visible
    const destinationsSection = document.getElementById('destinations');
    if (destinationsSection && filteredDestinations.length > 0) {
        const headerOffset = 80;
        const elementPosition = destinationsSection.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
        
        window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
        });
    }
    
    // Show message if no results
    if (filteredDestinations.length === 0) {
        if (destinationsGrid) {
            destinationsGrid.innerHTML = `
                <div style="grid-column: 1/-1; text-align: center; padding: 3rem;">
                    <i class="fas fa-search" style="font-size: 3rem; color: #ccc; margin-bottom: 1rem;"></i>
                    <h3 style="color: #666; margin-bottom: 0.5rem;">Tidak ada hasil ditemukan</h3>
                    <p style="color: #999;">Coba gunakan kata kunci lain atau <button onclick="resetSearch();" style="background: none; border: none; color: #2c5aa0; text-decoration: underline; cursor: pointer;">reset pencarian</button></p>
                </div>
            `;
        }
    }
}

function resetSearch() {
    if (!searchInput) return;
    
    searchInput.value = '';
    filteredDestinations = destinationsData;
    currentFilter = 'all';
    displayedDestinations = 6;
    renderDestinations();
    updateFilterButtons();
    
    // Reset filter buttons
    const allFilterBtn = document.querySelector('.filter-btn[data-filter="all"]');
    if (allFilterBtn) {
        allFilterBtn.click();
    }
}

// Filter Functions
function initializeFilters() {
    filterBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            const filter = this.getAttribute('data-filter');
            applyFilter(filter);
        });
    });
    
    // Category cards filter
    const categoryCards = document.querySelectorAll('.category-card');
    categoryCards.forEach(card => {
        card.addEventListener('click', function() {
            const category = this.getAttribute('data-category');
            applyFilter(category);
            
            // Scroll to destinations section
            document.getElementById('destinations').scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
}

function applyFilter(filter) {
    currentFilter = filter;
    
    if (filter === 'all') {
        filteredDestinations = destinationsData;
    } else {
        filteredDestinations = destinationsData.filter(destination => 
            destination.category === filter
        );
    }
    
    displayedDestinations = Math.min(6, filteredDestinations.length);
    renderDestinations();
    updateFilterButtons();
}

function updateFilterButtons() {
    filterBtns.forEach(btn => {
        btn.classList.toggle('active', btn.getAttribute('data-filter') === currentFilter);
    });
}

// Destinations Functions
function initializeDestinations() {
    renderDestinations();
    
    // Initialize static destination detail buttons
    initializeStaticDestinationButtons();
    
    if (loadMoreBtn) {
        loadMoreBtn.addEventListener('click', loadMoreDestinations);
    }
}

// Initialize static destination buttons in HTML
function initializeStaticDestinationButtons() {
    document.querySelectorAll('.destination-detail-btn').forEach(btn => {
        // Check if event listener already added
        if (!btn.hasAttribute('data-initialized')) {
            btn.setAttribute('data-initialized', 'true');
            btn.addEventListener('click', function() {
                const destinationId = this.getAttribute('data-id');
                const destinationName = this.getAttribute('data-destination');
                
                if (destinationId) {
                    showDestinationDetail(parseInt(destinationId));
                } else if (destinationName) {
                    // Find destination by name in static HTML
                    const destinationTitle = this.closest('.destination-card').querySelector('.destination-title').textContent;
                    const destination = destinationsData.find(d => 
                        d.title.toLowerCase().includes(destinationTitle.toLowerCase()) ||
                        destinationName.includes(d.title.toLowerCase().replace(/\s+/g, '-'))
                    );
                    
                    if (destination) {
                        showDestinationDetail(destination.id);
                    } else {
                        // Fallback: show modal with static content
                        showStaticDestinationDetail(this.closest('.destination-card'));
                    }
                } else {
                    // Fallback: show modal with static content
                    showStaticDestinationDetail(this.closest('.destination-card'));
                }
            });
        }
    });
}

function renderDestinations() {
    if (!destinationsGrid) return;
    
    const destinationsToShow = filteredDestinations.slice(0, displayedDestinations);
    
    destinationsGrid.innerHTML = destinationsToShow.map(destination => `
        <div class="destination-card fade-in" data-category="${destination.category}">
            <div class="destination-image">
                <img src="${destination.image}" alt="${destination.title}" loading="lazy">
                <div class="destination-badge">${destination.badge}</div>
            </div>
            <div class="destination-content">
                <h3 class="destination-title">${destination.title}</h3>
                <div class="destination-location">
                    <i class="fas fa-map-marker-alt"></i>
                    <span>${destination.location}</span>
                </div>
                <p class="destination-description">${destination.description}</p>
                <div class="destination-rating">
                    <div class="rating-stars">
                        ${generateStars(destination.rating)}
                    </div>
                    <span class="rating-text">${destination.rating} (${destination.reviews} review)</span>
                </div>
                <div class="destination-price">Mulai dari ${destination.price}</div>
                <button class="btn-primary destination-detail-btn" data-id="${destination.id}">
                    Lihat Detail
                </button>
            </div>
        </div>
    `).join('');
    
    // Add event listeners to detail buttons (for dynamically rendered cards)
    document.querySelectorAll('.destination-detail-btn[data-id]').forEach(btn => {
        if (!btn.hasAttribute('data-initialized')) {
            btn.setAttribute('data-initialized', 'true');
            btn.addEventListener('click', function() {
                const destinationId = parseInt(this.getAttribute('data-id'));
                showDestinationDetail(destinationId);
            });
        }
    });
    
    // Update load more button visibility
    if (loadMoreBtn) {
        loadMoreBtn.style.display = displayedDestinations < filteredDestinations.length ? 'block' : 'none';
    }
    
    // Trigger fade-in animation
    setTimeout(() => {
        document.querySelectorAll('.destination-card').forEach(card => {
            card.classList.add('visible');
        });
    }, 100);
}

function generateStars(rating) {
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;
    let stars = '';
    
    for (let i = 0; i < fullStars; i++) {
        stars += '<i class="fas fa-star"></i>';
    }
    
    if (hasHalfStar) {
        stars += '<i class="fas fa-star-half-alt"></i>';
    }
    
    const emptyStars = 5 - Math.ceil(rating);
    for (let i = 0; i < emptyStars; i++) {
        stars += '<i class="far fa-star"></i>';
    }
    
    return stars;
}

function loadMoreDestinations() {
    const previousCount = displayedDestinations;
    displayedDestinations = Math.min(displayedDestinations + 6, filteredDestinations.length);
    
    if (displayedDestinations === previousCount) {
        // All destinations already shown
        if (loadMoreBtn) {
            loadMoreBtn.style.display = 'none';
        }
        return;
    }
    
    renderDestinations();
    
    // Scroll to newly loaded destinations
    if (destinationsGrid && displayedDestinations > 6) {
        const lastCard = destinationsGrid.lastElementChild;
        if (lastCard) {
            setTimeout(() => {
                lastCard.scrollIntoView({
                    behavior: 'smooth',
                    block: 'nearest'
                });
            }, 100);
        }
    }
}

// Modal Functions
function initializeModal() {
    if (closeModal) {
        closeModal.addEventListener('click', closeDestinationModal);
    }
    
    window.addEventListener('click', function(e) {
        if (e.target === destinationModal) {
            closeDestinationModal();
        }
    });
    
    // Close modal with Escape key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && destinationModal.style.display === 'block') {
            closeDestinationModal();
        }
    });
}

function showDestinationDetail(destinationId) {
    if (!destinationModal || !modalContent) return;
    
    const destination = destinationsData.find(d => d.id === destinationId);
    if (!destination) {
        console.error('Destination not found:', destinationId);
        return;
    }
    
    modalContent.innerHTML = `
        <div class="modal-destination">
            <div class="modal-image-gallery">
                <div class="main-image">
                    <img src="${destination.image}" alt="${destination.title}" id="mainImage">
                </div>
                <div class="thumbnail-images">
                    ${destination.images.map((img, index) => `
                        <img src="${img}" alt="Gallery ${index + 1}" class="thumbnail ${index === 0 ? 'active' : ''}" onclick="changeMainImage('${img}')">
                    `).join('')}
                </div>
            </div>
            <div class="modal-content-details">
                <div class="modal-header">
                    <h2>${destination.title}</h2>
                    <div class="modal-badge">${destination.badge}</div>
                </div>
                <div class="modal-location">
                    <i class="fas fa-map-marker-alt"></i>
                    <span>${destination.location}</span>
                </div>
                <div class="modal-rating">
                    <div class="rating-stars">
                        ${generateStars(destination.rating)}
                    </div>
                    <span class="rating-text">${destination.rating} (${destination.reviews} review)</span>
                </div>
                <div class="modal-price">Mulai dari ${destination.price}</div>
                <div class="modal-description">
                    <h3>Deskripsi</h3>
                    <p>${destination.description}</p>
                </div>
                <div class="modal-facilities">
                    <h3>Fasilitas</h3>
                    <div class="facilities-list">
                        ${destination.facilities.map(facility => `
                            <span class="facility-item">
                                <i class="fas fa-check"></i>
                                ${facility}
                            </span>
                        `).join('')}
                    </div>
                </div>
                <div class="modal-activities">
                    <h3>Aktivitas</h3>
                    <div class="activities-list">
                        ${destination.activities.map(activity => `
                            <span class="activity-item">
                                <i class="fas fa-star"></i>
                                ${activity}
                            </span>
                        `).join('')}
                    </div>
                </div>
                <div class="modal-actions">
                    <button class="btn-primary" onclick="bookDestination(${destination.id})">
                        <i class="fas fa-calendar-check"></i>
                        Pesan Sekarang
                    </button>
                    <button class="btn-secondary" onclick="shareDestination(${destination.id})">
                        <i class="fas fa-share"></i>
                        Bagikan
                    </button>
                </div>
            </div>
        </div>
    `;
    
    destinationModal.style.display = 'block';
    document.body.style.overflow = 'hidden';
}

// Global function for modal image change
function changeMainImage(imageSrc) {
    const mainImage = document.getElementById('mainImage');
    if (mainImage) {
        mainImage.src = imageSrc;
        
        // Add fade effect
        mainImage.style.opacity = '0';
        setTimeout(() => {
            mainImage.style.opacity = '1';
            mainImage.style.transition = 'opacity 0.3s ease';
        }, 50);
    }
    
    // Update active thumbnail
    document.querySelectorAll('.thumbnail').forEach(thumb => {
        thumb.classList.remove('active');
        if (thumb.src && thumb.src.includes(imageSrc.split('/').pop())) {
            thumb.classList.add('active');
        }
    });
}

// Make functions globally accessible
// Note: These functions are defined above, so they're accessible
// We'll ensure they're available on window object for inline event handlers

function closeDestinationModal() {
    if (destinationModal) {
        destinationModal.style.display = 'none';
        document.body.style.overflow = '';
    }
}

function bookDestination(destinationId) {
    const destination = destinationsData.find(d => d.id === destinationId);
    if (destination) {
        alert(`Fitur pemesanan untuk ${destination.title} akan segera tersedia!`);
    } else {
        alert('Destinasi tidak ditemukan!');
    }
}

function shareDestination(destinationId) {
    const destination = destinationsData.find(d => d.id === destinationId);
    if (!destination) {
        alert('Destinasi tidak ditemukan!');
        return;
    }
    
    const shareText = `Check out this amazing destination: ${destination.title} in ${destination.location}!`;
    
    if (navigator.share) {
        navigator.share({
            title: destination.title,
            text: shareText,
            url: window.location.href
        }).catch(err => {
            console.log('Error sharing:', err);
            // Fallback to clipboard
            if (navigator.clipboard) {
                navigator.clipboard.writeText(shareText + ' ' + window.location.href);
                alert('Link telah disalin ke clipboard!');
            }
        });
    } else if (navigator.clipboard) {
        // Fallback for browsers that don't support Web Share API
        navigator.clipboard.writeText(shareText + ' ' + window.location.href).then(() => {
            alert('Link telah disalin ke clipboard!');
        }).catch(err => {
            console.error('Failed to copy:', err);
            alert('Gagal menyalin link. Silakan salin manual: ' + window.location.href);
        });
    } else {
        // Final fallback
        prompt('Salin link ini:', window.location.href);
    }
}

// Show static destination detail from HTML card
function showStaticDestinationDetail(card) {
    const title = card.querySelector('.destination-title').textContent;
    const location = card.querySelector('.destination-location span').textContent;
    const description = card.querySelector('.destination-description').textContent;
    const rating = card.querySelector('.rating-stars');
    const ratingText = card.querySelector('.rating-text').textContent;
    const price = card.querySelector('.destination-price').textContent;
    const image = card.querySelector('.destination-image img').src;
    const badge = card.querySelector('.destination-badge').textContent;
    
    modalContent.innerHTML = `
        <div class="modal-destination">
            <div class="modal-image-gallery">
                <div class="main-image">
                    <img src="${image}" alt="${title}" id="mainImage">
                </div>
            </div>
            <div class="modal-content-details">
                <div class="modal-header">
                    <h2>${title}</h2>
                    <div class="modal-badge">${badge}</div>
                </div>
                <div class="modal-location">
                    <i class="fas fa-map-marker-alt"></i>
                    <span>${location}</span>
                </div>
                <div class="modal-rating">
                    <div class="rating-stars">
                        ${rating.innerHTML}
                    </div>
                    <span class="rating-text">${ratingText}</span>
                </div>
                <div class="modal-price">${price}</div>
                <div class="modal-description">
                    <h3>Deskripsi</h3>
                    <p>${description}</p>
                </div>
                <div class="modal-actions">
                    <button class="btn-primary" onclick="bookStaticDestination('${title}')">
                        <i class="fas fa-calendar-check"></i>
                        Pesan Sekarang
                    </button>
                    <button class="btn-secondary" onclick="shareStaticDestination('${title}', '${location}')">
                        <i class="fas fa-share"></i>
                        Bagikan
                    </button>
                </div>
            </div>
        </div>
    `;
    
    destinationModal.style.display = 'block';
    document.body.style.overflow = 'hidden';
}

function bookStaticDestination(title) {
    alert(`Fitur pemesanan untuk ${title} akan segera tersedia!`);
}

function shareStaticDestination(title, location) {
    const shareText = `Check out this amazing destination: ${title} in ${location}!`;
    
    if (navigator.share) {
        navigator.share({
            title: title,
            text: shareText,
            url: window.location.href
        }).catch(err => {
            console.log('Error sharing:', err);
            // Fallback to clipboard
            if (navigator.clipboard) {
                navigator.clipboard.writeText(shareText + ' ' + window.location.href);
                alert('Link telah disalin ke clipboard!');
            }
        });
    } else if (navigator.clipboard) {
        navigator.clipboard.writeText(shareText + ' ' + window.location.href).then(() => {
            alert('Link telah disalin ke clipboard!');
        }).catch(err => {
            console.error('Failed to copy:', err);
            prompt('Salin link ini:', window.location.href);
        });
    } else {
        prompt('Salin link ini:', window.location.href);
    }
}

// Scroll Effects
function initializeScrollEffects() {
    // Header background on scroll
    window.addEventListener('scroll', function() {
        const header = document.querySelector('.header');
        if (!header) return;
        
        if (window.scrollY > 100) {
            header.style.background = 'rgba(255, 255, 255, 0.98)';
            header.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
        } else {
            header.style.background = 'rgba(255, 255, 255, 0.95)';
            header.style.boxShadow = 'none';
        }
    });
    
    // Intersection Observer for animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                
                // Add staggered animation for grid items
                if (entry.target.classList.contains('destination-card') || 
                    entry.target.classList.contains('category-card')) {
                    const cards = entry.target.parentElement.children;
                    Array.from(cards).forEach((card, index) => {
                        setTimeout(() => {
                            card.classList.add('visible');
                        }, index * 100);
                    });
                }
            }
        });
    }, observerOptions);
    
    // Observe elements for animation
    document.querySelectorAll('.fade-in, .slide-in-left, .slide-in-right, .destination-card, .category-card').forEach(el => {
        observer.observe(el);
    });
    
    // Parallax effect for hero section (disabled on mobile for performance)
    if (window.innerWidth > 768) {
        window.addEventListener('scroll', function() {
            const scrolled = window.pageYOffset;
            const hero = document.querySelector('.hero');
            if (hero && scrolled < window.innerHeight) {
                hero.style.transform = `translateY(${scrolled * 0.3}px)`;
            }
        });
    }
}

// Scroll to Top Button
function initializeScrollToTop() {
    // Check if button already exists
    let scrollToTopBtn = document.querySelector('.scroll-to-top');
    
    if (!scrollToTopBtn) {
        // Create scroll to top button
        scrollToTopBtn = document.createElement('button');
        scrollToTopBtn.className = 'scroll-to-top';
        scrollToTopBtn.innerHTML = '<i class="fas fa-arrow-up"></i>';
        scrollToTopBtn.setAttribute('aria-label', 'Scroll to top');
        document.body.appendChild(scrollToTopBtn);
    }
    
    // Show/hide button based on scroll position
    const handleScroll = function() {
        if (window.scrollY > 300) {
            scrollToTopBtn.classList.add('visible');
        } else {
            scrollToTopBtn.classList.remove('visible');
        }
    };
    
    window.addEventListener('scroll', handleScroll);
    
    // Scroll to top functionality
    scrollToTopBtn.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

// Contact Form
function initializeContactForm() {
    const contactForm = document.querySelector('.contact-form');
    if (!contactForm) return;
    
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Get form inputs
        const inputs = this.querySelectorAll('input, textarea');
        const name = inputs[0]?.value?.trim();
        const email = inputs[1]?.value?.trim();
        const subject = inputs[2]?.value?.trim();
        const message = inputs[3]?.value?.trim();
        
        // Simple validation
        if (!name || !email || !subject || !message) {
            alert('Mohon lengkapi semua field!');
            return;
        }
        
        // Email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            alert('Format email tidak valid!');
            return;
        }
        
        // Simulate form submission
        const submitBtn = this.querySelector('button[type="submit"]');
        if (!submitBtn) return;
        
        const originalText = submitBtn.innerHTML;
        submitBtn.innerHTML = '<span class="loading"></span> Mengirim...';
        submitBtn.disabled = true;
        
        setTimeout(() => {
            alert('Pesan berhasil dikirim! Terima kasih atas feedback Anda.');
            this.reset();
            submitBtn.innerHTML = originalText;
            submitBtn.disabled = false;
        }, 2000);
    });
}

// Typing Animation
function initializeTypingAnimation() {
    const heroTitle = document.querySelector('.hero-title');
    if (!heroTitle) return;
    
    // Skip typing animation if title already has content from HTML
    const titleLines = heroTitle.querySelectorAll('.title-line');
    if (titleLines.length > 0) {
        // Title already has structured content, skip typing animation
        return;
    }
    
    const text = heroTitle.textContent.trim();
    if (!text) return;
    
    heroTitle.textContent = '';
    
    let i = 0;
    const typeWriter = () => {
        if (i < text.length) {
            heroTitle.textContent += text.charAt(i);
            i++;
            setTimeout(typeWriter, 100);
        }
    };
    
    // Start typing animation after a short delay
    setTimeout(typeWriter, 1000);
}

// Utility Functions
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Add loading states
function showLoading(element) {
    element.innerHTML = '<span class="loading"></span>';
}

function hideLoading(element, originalContent) {
    element.innerHTML = originalContent;
}

// Error handling
window.addEventListener('error', function(e) {
    console.error('Error:', e.error);
});

// Performance optimization
if ('serviceWorker' in navigator) {
    window.addEventListener('load', function() {
        navigator.serviceWorker.register('/sw.js')
            .then(function(registration) {
                console.log('SW registered: ', registration);
            })
            .catch(function(registrationError) {
                console.log('SW registration failed: ', registrationError);
            });
    });
}

// Add CSS for modal content
const modalStyles = `
<style>
.modal-destination {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 2rem;
    padding: 2rem;
}

.modal-image-gallery {
    display: flex;
    flex-direction: column;
    gap: 1rem;
}

.main-image {
    width: 100%;
    height: 300px;
    border-radius: 10px;
    overflow: hidden;
}

.main-image img {
    width: 100%;
    height: 100%;
    object-fit: cover;
}

.thumbnail-images {
    display: flex;
    gap: 0.5rem;
    overflow-x: auto;
}

.thumbnail {
    width: 80px;
    height: 60px;
    border-radius: 5px;
    object-fit: cover;
    cursor: pointer;
    opacity: 0.7;
    transition: opacity 0.3s ease;
}

.thumbnail.active,
.thumbnail:hover {
    opacity: 1;
}

.modal-content-details {
    padding: 1rem;
}

.modal-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 1rem;
}

.modal-header h2 {
    color: #2c5aa0;
    font-size: 1.8rem;
    margin: 0;
}

.modal-badge {
    background: #ff6b6b;
    color: white;
    padding: 0.3rem 0.8rem;
    border-radius: 15px;
    font-size: 0.8rem;
    font-weight: 500;
}

.modal-location {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    color: #666;
    margin-bottom: 1rem;
}

.modal-location i {
    color: #ff6b6b;
}

.modal-rating {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    margin-bottom: 1rem;
}

.modal-price {
    font-size: 1.5rem;
    font-weight: 600;
    color: #2c5aa0;
    margin-bottom: 1.5rem;
}

.modal-description,
.modal-facilities,
.modal-activities {
    margin-bottom: 1.5rem;
}

.modal-description h3,
.modal-facilities h3,
.modal-activities h3 {
    color: #2c5aa0;
    margin-bottom: 0.5rem;
    font-size: 1.2rem;
}

.facilities-list,
.activities-list {
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
}

.facility-item,
.activity-item {
    background: #f8f9fa;
    padding: 0.5rem 1rem;
    border-radius: 20px;
    font-size: 0.9rem;
    display: flex;
    align-items: center;
    gap: 0.5rem;
}

.facility-item i,
.activity-item i {
    color: #2c5aa0;
}

.modal-actions {
    display: flex;
    gap: 1rem;
    margin-top: 2rem;
}

.btn-secondary {
    background: transparent;
    color: #2c5aa0;
    border: 2px solid #2c5aa0;
    padding: 1rem 2rem;
    border-radius: 25px;
    font-size: 1rem;
    font-weight: 500;
    cursor: pointer;
    transition: all 0.3s ease;
}

.btn-secondary:hover {
    background: #2c5aa0;
    color: white;
}

@media (max-width: 768px) {
    .modal-destination {
        grid-template-columns: 1fr;
        padding: 1rem;
    }
    
    .modal-actions {
        flex-direction: column;
    }
    
    .thumbnail-images {
        justify-content: center;
    }
}
</style>
`;

document.head.insertAdjacentHTML('beforeend', modalStyles);
