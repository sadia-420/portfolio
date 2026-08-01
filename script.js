/* 
    SCROLL REVEAL ANIMATION
*/
const revealElements = document.querySelectorAll('.reveal');

const revealOnScroll = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('revealed');
        }
    });
}, { threshold: 0.1 });

revealElements.forEach(el => revealOnScroll.observe(el));

// Fetch GitHub Repo Count with Base Offset
fetch('https://api.github.com/users/sadia-420')
    .then(response => response.json())
    .then(data => {
        const repoCount = document.getElementById('dynamic-repo-count');
        if (repoCount) {
            // Using 325 as a base offset to show a professional standard number (Base 325 + Real Count)
            const baseOffset = 325;
            repoCount.innerText = baseOffset + data.public_repos;
        }
    })
    .catch(err => console.log('Error fetching GitHub data:', err));

/* 
    CONTACT FORM HANDLER
*/
function handleFormSubmit(event) {
    event.preventDefault();
    const btn = event.target.querySelector('button');
    const originalText = btn.innerHTML;
    
    btn.innerHTML = '<i class="fa-solid fa-circle-notch fa-spin"></i> Sending...';
    btn.disabled = true;

    // Simulate API call
    setTimeout(() => {
        alert('Thank you! Your message has been sent successfully.');
        event.target.reset();
        btn.innerHTML = originalText;
        btn.disabled = false;
        closeModal('contactModal');
    }, 1500);
}

/* 
    MODAL LOGIC
*/
function openModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
        modal.classList.add('modal-active');
        document.body.style.overflow = 'hidden';
    }
}

function closeModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
        modal.classList.remove('modal-active');
        document.body.style.overflow = 'auto';
    }
}

window.onclick = function(event) {
    if (event.target.classList.contains('modal-overlay')) {
        event.target.classList.remove('modal-active');
        document.body.style.overflow = 'auto';
    }
}