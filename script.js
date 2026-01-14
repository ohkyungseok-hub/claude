// Simple script for interactivity
document.addEventListener('DOMContentLoaded', function() {
    console.log('에이포스솔라시스템 웹사이트 로드됨');
    
    // Smooth scrolling for nav links (only for anchor links on same page)
    const navLinks = document.querySelectorAll('nav a');
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            // Only prevent default for anchor links (starting with #)
            if (href && href.startsWith('#')) {
                e.preventDefault();
                const targetId = href.substring(1);
                const targetSection = document.getElementById(targetId);
                if (targetSection) {
                    targetSection.scrollIntoView({ behavior: 'smooth' });
                }
            }
            // For other links (like index.html, rental.html), let them work normally
        });
    });

    // Modal functionality
    const modal = document.getElementById('consultationModal');
    const closeBtn = document.getElementsByClassName('close')[0];

    // Contact modal functionality
    const contactModal = document.getElementById('contactModal');
    const contactBtn = document.getElementById('contactBtn');
    const contactClose = document.getElementById('contactClose');
    const contactForm = document.getElementById('contactForm');

    console.log('contactBtn:', contactBtn);
    console.log('contactModal:', contactModal);

    // Show modal on page load
    // modal.style.display = 'block'; // Commented out to allow contact button access

    // Contact button click
    if (contactBtn) {
        contactBtn.onclick = function() {
            console.log('Contact button clicked');
            alert('Button clicked!'); // Test alert
            if (contactModal) {
                contactModal.style.display = 'block';
            } else {
                console.log('Contact modal not found');
            }
        }
    } else {
        console.log('Contact button not found');
    }

    // Close modals when clicking close button
    closeBtn.onclick = function() {
        modal.style.display = 'none';
    }

    if (contactClose) {
        contactClose.onclick = function() {
            contactModal.style.display = 'none';
        }
    }

    // Close modals when clicking outside
    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = 'none';
        }
        if (event.target == contactModal) {
            contactModal.style.display = 'none';
        }
    }

    // Form submission
    contactForm.onsubmit = function(e) {
        e.preventDefault();
        alert('문의 신청이 완료되었습니다. 빠른 시일 내에 연락드리겠습니다.');
        contactModal.style.display = 'none';
        contactForm.reset();
    }
});
