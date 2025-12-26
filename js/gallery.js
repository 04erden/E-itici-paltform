// ============================================
// Gallery System - Image Gallery with Modal
// ============================================

// Gallery images data
const galleryImages = [
    { src: 'images/ilk.png', alt: 'Galeri görseli 1', caption: 'Güzel bir anı' },
    { src: 'images/ikinci.png', alt: 'Galeri görseli 2', caption: 'Özel bir kare' },
    { src: 'images/kuran.jpg', alt: 'Galeri görseli 3', caption: 'Anlamlı bir görsel' },
    { src: 'images/kuran-kerim.jpg', alt: 'Galeri görseli 4', caption: 'Değerli bir anı' },
    { src: 'images/ozel-an.jpg', alt: 'Galeri görseli 5', caption: 'Özel bir görsel' },
    { src: 'images/mekke.jpg', alt: 'Galeri görseli 6', caption: 'Güzel bir kare' },
    { src: 'images/indir.jpg', alt: 'Galeri görseli 7', caption: 'Anlamlı bir anı' },
    { src: 'images/ayasofya.jpg', alt: 'Galeri görseli 8', caption: 'Özel bir kare' },
    { src: 'images/cuma.jpg', alt: 'Galeri görseli 9', caption: 'Güzel bir görsel' }
];

let currentImageIndex = 0;

// ============================================
// Initialize Gallery
// ============================================

function initGallery() {
    const galleryGrid = document.getElementById('galleryGrid');
    if (!galleryGrid) return;
    
    // Clear existing content
    galleryGrid.innerHTML = '';
    
    // Create gallery items
    galleryImages.forEach((image, index) => {
        const galleryItem = document.createElement('div');
        galleryItem.className = 'gallery-item';
        galleryItem.setAttribute('data-index', index);
        
        const img = document.createElement('img');
        img.src = image.src;
        img.alt = image.alt;
        img.loading = 'lazy';
        
        const overlay = document.createElement('div');
        overlay.className = 'gallery-overlay';
        
        const caption = document.createElement('p');
        caption.className = 'gallery-caption';
        caption.textContent = image.caption;
        
        overlay.appendChild(caption);
        galleryItem.appendChild(img);
        galleryItem.appendChild(overlay);
        
        galleryItem.addEventListener('click', () => openModal(index));
        
        galleryGrid.appendChild(galleryItem);
    });
}

// ============================================
// Open Modal
// ============================================

function openModal(index) {
    currentImageIndex = index;
    
    // Create modal if it doesn't exist
    let modal = document.getElementById('galleryModal');
    if (!modal) {
        modal = document.createElement('div');
        modal.id = 'galleryModal';
        modal.className = 'gallery-modal';
        
        const content = document.createElement('div');
        content.className = 'gallery-modal-content';
        
        const img = document.createElement('img');
        img.className = 'gallery-modal-img';
        img.id = 'modalImage';
        
        const closeBtn = document.createElement('button');
        closeBtn.className = 'gallery-modal-close';
        closeBtn.innerHTML = '×';
        closeBtn.setAttribute('aria-label', 'Kapat');
        closeBtn.addEventListener('click', closeModal);
        
        const prevBtn = document.createElement('button');
        prevBtn.className = 'gallery-modal-nav gallery-modal-prev';
        prevBtn.innerHTML = '‹';
        prevBtn.setAttribute('aria-label', 'Önceki');
        prevBtn.addEventListener('click', () => navigateModal(-1));
        
        const nextBtn = document.createElement('button');
        nextBtn.className = 'gallery-modal-nav gallery-modal-next';
        nextBtn.innerHTML = '›';
        nextBtn.setAttribute('aria-label', 'Sonraki');
        nextBtn.addEventListener('click', () => navigateModal(1));
        
        content.appendChild(img);
        content.appendChild(closeBtn);
        content.appendChild(prevBtn);
        content.appendChild(nextBtn);
        modal.appendChild(content);
        
        document.body.appendChild(modal);
        
        // Close on background click
        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                closeModal();
            }
        });
        
        // Keyboard navigation
        document.addEventListener('keydown', handleKeyboard);
    }
    
    updateModalImage();
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

// ============================================
// Close Modal
// ============================================

function closeModal() {
    const modal = document.getElementById('galleryModal');
    if (modal) {
        modal.classList.remove('active');
        document.body.style.overflow = '';
        document.removeEventListener('keydown', handleKeyboard);
    }
}

// ============================================
// Navigate Modal
// ============================================

function navigateModal(direction) {
    currentImageIndex += direction;
    
    if (currentImageIndex < 0) {
        currentImageIndex = galleryImages.length - 1;
    } else if (currentImageIndex >= galleryImages.length) {
        currentImageIndex = 0;
    }
    
    updateModalImage();
}

// ============================================
// Update Modal Image
// ============================================

function updateModalImage() {
    const modalImage = document.getElementById('modalImage');
    if (modalImage && galleryImages[currentImageIndex]) {
        modalImage.src = galleryImages[currentImageIndex].src;
        modalImage.alt = galleryImages[currentImageIndex].alt;
    }
}

// ============================================
// Handle Keyboard
// ============================================

function handleKeyboard(e) {
    if (e.key === 'Escape') {
        closeModal();
    } else if (e.key === 'ArrowLeft') {
        navigateModal(-1);
    } else if (e.key === 'ArrowRight') {
        navigateModal(1);
    }
}

// ============================================
// Initialize on Page Load
// ============================================

document.addEventListener('DOMContentLoaded', () => {
    initGallery();
});

// Make functions globally available
window.openModal = openModal;
window.closeModal = closeModal;
window.navigateModal = navigateModal;

