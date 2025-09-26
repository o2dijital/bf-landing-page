// Landing Page Interactive Features
document.addEventListener('DOMContentLoaded', function() {
    
    // Category card click handlers
    const categoryCards = document.querySelectorAll('.category-card');
    
    // Define actions for each category
    const categoryActions = {
        website: () => {
            window.open('https://bigfashionwholesale.com', '_blank');
        },
        whatsapp: () => {
            const message = encodeURIComponent('Merhaba! Ürünler hakkında bilgi almak istiyorum.');
            window.open(`https://wa.me/905532977681?text=${message}`, '_blank');
        },
        instagram: () => {
            window.open('https://instagram.com/bigfashion.wholesale', '_blank');
        },
        showroom: () => {
            // Show showroom information
            showModal('Showroom', `
                <div class="showroom-info">
                    <h3>BIGFASHION Showroom</h3>
                    <p><strong>Adres:</strong><br>
                    Merkez Mahallesi Arkın Sokak<br>
                    No: 11, Güngören/İstanbul</p>
                    
                    <p><strong>Çalışma Saatleri:</strong><br>
                    Pazartesi - Cumartesi: 10:00 - 20:00<br>
                    Pazar: 12:00 - 18:00</p>
                    
                    <p><strong>Telefon:</strong><br>
                    <a href="tel:+905532977681">+90 553 297 76 81</a></p>
                    
                    <div class="showroom-actions">
                        <button onclick="window.open('https://www.google.com/maps/dir//Merkez,+Ark%C4%B1n+Sk.+no:11,+34160+G%C3%BCng%C3%B6ren%2F%C4%B0stanbul/@41.017265,28.7936306,12z/data=!4m8!4m7!1m0!1m5!1m1!1s0x14cabbaf30a36e49:0xc08d62735d95e8cf!2m2!1d28.8760314!2d41.0172943?entry=ttu&g_ep=EgoyMDI1MDkyMy4wIKXMDSoASAFQAw%3D%3D', '_blank')" class="btn-primary">
                            Haritada Göster
                        </button>
                        <button onclick="window.open('tel:+905532977681')" class="btn-secondary">
                            Ara
                        </button>
                    </div>
                </div>
            `);
        },
        telegram: () => {
            window.open('https://t.me/bigfashionwholesale', '_blank');
        }
    };
    
    // Add click event listeners to category cards
    categoryCards.forEach(card => {
        card.addEventListener('click', function() {
            const category = this.getAttribute('data-category');
            
            // Add click animation
            this.style.transform = 'translateY(-2px) scale(0.98)';
            setTimeout(() => {
                this.style.transform = '';
            }, 150);
            
            // Execute category action
            if (categoryActions[category]) {
                categoryActions[category]();
            }
        });
        
        // Add hover sound effect (optional)
        card.addEventListener('mouseenter', function() {
            // Subtle hover feedback
            this.style.transition = 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)';
        });
    });
    
    // URL bar click handler
    const urlBar = document.querySelector('.url-bar');
    if (urlBar) {
        urlBar.addEventListener('click', function() {
            window.open('https://bigfashionwholesale.com/', '_blank');
        });
        
        urlBar.style.cursor = 'pointer';
    }
    
    // Logo click handler
    const logoContainer = document.querySelector('.logo-container');
    if (logoContainer) {
        logoContainer.addEventListener('click', function() {
            // Easter egg: logo animation
            const logoSymbol = document.querySelector('.logo-symbol');
            logoSymbol.style.transform = 'rotate(360deg) scale(1.1)';
            logoSymbol.style.transition = 'transform 0.8s cubic-bezier(0.68, -0.55, 0.265, 1.55)';
            
            setTimeout(() => {
                logoSymbol.style.transform = '';
                logoSymbol.style.transition = 'all 0.3s ease';
            }, 800);
        });
        
        logoContainer.style.cursor = 'pointer';
    }
    
    // Modal functionality
    function showModal(title, content) {
        // Create modal if it doesn't exist
        let modal = document.getElementById('custom-modal');
        if (!modal) {
            modal = document.createElement('div');
            modal.id = 'custom-modal';
            modal.className = 'modal-overlay';
            modal.innerHTML = `
                <div class="modal-content">
                    <div class="modal-header">
                        <h2 class="modal-title"></h2>
                        <button class="modal-close">&times;</button>
                    </div>
                    <div class="modal-body"></div>
                </div>
            `;
            document.body.appendChild(modal);
            
            // Add modal styles
            const modalStyles = document.createElement('style');
            modalStyles.textContent = `
                .modal-overlay {
                    position: fixed;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                    background: rgba(0, 0, 0, 0.5);
                    backdrop-filter: blur(5px);
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    z-index: 1000;
                    opacity: 0;
                    visibility: hidden;
                    transition: all 0.3s ease;
                }
                
                .modal-overlay.active {
                    opacity: 1;
                    visibility: visible;
                }
                
                .modal-content {
                    background: white;
                    border-radius: 16px;
                    max-width: 400px;
                    width: 90%;
                    max-height: 80vh;
                    overflow-y: auto;
                    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.2);
                    transform: translateY(20px);
                    transition: transform 0.3s ease;
                }
                
                .modal-overlay.active .modal-content {
                    transform: translateY(0);
                }
                
                .modal-header {
                    padding: 20px 20px 0;
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                }
                
                .modal-title {
                    margin: 0;
                    font-size: 18px;
                    font-weight: 600;
                    color: #2c2c2c;
                }
                
                .modal-close {
                    background: none;
                    border: none;
                    font-size: 24px;
                    cursor: pointer;
                    color: #666;
                    padding: 0;
                    width: 30px;
                    height: 30px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    border-radius: 50%;
                    transition: background-color 0.2s;
                }
                
                .modal-close:hover {
                    background-color: #f0f0f0;
                }
                
                .modal-body {
                    padding: 20px;
                }
                
                .showroom-info h3 {
                    margin-bottom: 15px;
                    color: #2c2c2c;
                }
                
                .showroom-info p {
                    margin-bottom: 15px;
                    line-height: 1.6;
                }
                
                .showroom-actions {
                    display: flex;
                    gap: 10px;
                    margin-top: 20px;
                }
                
                .btn-primary, .btn-secondary {
                    padding: 10px 16px;
                    border-radius: 8px;
                    border: none;
                    cursor: pointer;
                    font-size: 14px;
                    font-weight: 500;
                    transition: all 0.2s;
                    flex: 1;
                }
                
                .btn-primary {
                    background: #2c2c2c;
                    color: white;
                }
                
                .btn-primary:hover {
                    background: #1a1a1a;
                }
                
                .btn-secondary {
                    background: #f0f0f0;
                    color: #2c2c2c;
                }
                
                .btn-secondary:hover {
                    background: #e0e0e0;
                }
            `;
            document.head.appendChild(modalStyles);
            
            // Close modal handlers
            modal.querySelector('.modal-close').addEventListener('click', closeModal);
            modal.addEventListener('click', function(e) {
                if (e.target === modal) {
                    closeModal();
                }
            });
        }
        
        // Set modal content
        modal.querySelector('.modal-title').textContent = title;
        modal.querySelector('.modal-body').innerHTML = content;
        
        // Show modal
        modal.classList.add('active');
    }
    
    function closeModal() {
        const modal = document.getElementById('custom-modal');
        if (modal) {
            modal.classList.remove('active');
        }
    }
    
    // Keyboard shortcuts
    document.addEventListener('keydown', function(e) {
        // Close modal with Escape key
        if (e.key === 'Escape') {
            closeModal();
        }
    });
    
    // Add loading animation for category cards
    categoryCards.forEach((card, index) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        
        setTimeout(() => {
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
            card.style.transition = 'all 0.6s cubic-bezier(0.4, 0, 0.2, 1)';
        }, 100 * (index + 1));
    });
    
    // Add subtle parallax effect on scroll (for mobile)
    let ticking = false;
    
    function updateParallax() {
        const scrolled = window.pageYOffset;
        const parallax = document.querySelector('.container');
        
        if (parallax) {
            const speed = scrolled * 0.05;
            parallax.style.transform = `translateY(${speed}px)`;
        }
        
        ticking = false;
    }
    
    function requestTick() {
        if (!ticking) {
            requestAnimationFrame(updateParallax);
            ticking = true;
        }
    }
    
    window.addEventListener('scroll', requestTick);
});

// Service Worker Registration (for PWA features)
if ('serviceWorker' in navigator) {
    window.addEventListener('load', function() {
        navigator.serviceWorker.register('/sw.js').then(function(registration) {
            console.log('SW registered: ', registration);
        }).catch(function(registrationError) {
            console.log('SW registration failed: ', registrationError);
        });
    });
}
