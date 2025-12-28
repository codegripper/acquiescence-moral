// Smooth scrolling function
function scrollToSection(sectionId) {
    const element = document.getElementById(sectionId);
    if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
}

// Handle reflection form submission
function submitReflection() {
    const selectedOption = document.querySelector('input[name="perspective"]:checked');
    const resultDiv = document.getElementById('reflectionResult');
    
    if (!selectedOption) {
        resultDiv.innerHTML = `
            <div class="alert alert-warning" role="alert">
                Please select a perspective before submitting.
            </div>
        `;
        return;
    }
    
    const perspective = selectedOption.value;
    let message = '';
    
    if (perspective === 'moral') {
        message = `
            <div class="alert alert-success" role="alert">
                <h5 class="alert-heading">Moral Warning Perspective</h5>
                <p>You see this as a call to action — a reminder that silence in the face of wrongdoing is itself a choice with consequences. This perspective emphasizes personal agency and the ethical duty to speak up.</p>
                <hr>
                <p class="mb-0"><strong>Key insight:</strong> "The only thing necessary for the triumph of evil is for good people to do nothing." - Often attributed to Edwin Burke</p>
            </div>
        `;
    } else if (perspective === 'spiritual') {
        message = `
            <div class="alert alert-success" role="alert">
                <h5 class="alert-heading">Spiritual Law Perspective</h5>
                <p>You recognize this as a universal principle — that the cosmos itself responds to both action and inaction. This view suggests that energetic alignment occurs regardless of conscious intent.</p>
                <hr>
                <p class="mb-0"><strong>Key insight:</strong> Key insight: Your energy is influenced not only by your actions, but also by what you let unfold in your surroundings.</p>
            </div>
        `;
    }
    
    resultDiv.innerHTML = message;
    
    // Scroll to result
    setTimeout(() => {
        resultDiv.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }, 100);
}

// Add scroll animation to elements
function revealOnScroll() {
    const elements = document.querySelectorAll('.info-card, .principle-box, .reflection-card');
    
    elements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const elementVisible = 150;
        
        if (elementTop < window.innerHeight - elementVisible) {
            element.style.opacity = '1';
            element.style.transform = 'translateY(0)';
        }
    });
}

// Initialize scroll animations
window.addEventListener('scroll', revealOnScroll);

// Set initial state for animated elements
document.addEventListener('DOMContentLoaded', function() {
    const elements = document.querySelectorAll('.info-card, .principle-box, .reflection-card');
    elements.forEach(element => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(30px)';
        element.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    });
    
    // Initial check for elements in view
    revealOnScroll();
    
    // Active nav link highlighting
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link');
    
    function highlightNavOnScroll() {
        let scrollY = window.pageYOffset;
        
        sections.forEach(section => {
            const sectionHeight = section.offsetHeight;
            const sectionTop = section.offsetTop - 100;
            const sectionId = section.getAttribute('id');
            
            if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
                navLinks.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === `#${sectionId}`) {
                        link.classList.add('active');
                    }
                });
            }
        });
    }
    
    window.addEventListener('scroll', highlightNavOnScroll);
});

// Add click tracking for analytics (optional enhancement)
function trackInteraction(action, label) {
    console.log(`User interaction: ${action} - ${label}`);
    // You can integrate with analytics services here
}

// Track button clicks
document.addEventListener('click', function(e) {
    if (e.target.matches('.btn-primary')) {
        trackInteraction('button_click', e.target.textContent);
    }
});

// Console message
console.log('%c🔥 Acquiescence and Moral Responsibility', 'color: #6366f1; font-size: 20px; font-weight: bold;');
console.log('%cExploring the power of silence and passive consent.', 'color: #8b5cf6; font-size: 14px;');
