/*
    ============================================================
    PORTFOLIO DATA — Edit this file to add/update your content
    ============================================================
*/

const PORTFOLIO_DATA = {
    profile: {
        name: 'Sadia Hossain Sanjida',
        title: 'Aspiring Software Engineer',
        email: 'sadia420hossain@gmail.com',
        phone: '01746993836',
        phoneDisplay: '+880 1746-993836',
        github: 'https://github.com/sadia-420',
        linkedin: 'https://linkedin.com/in/sadiahossain/'
    },

    /*
        PROJECTS
        - image: path to screenshot (e.g. "assets/projects/bank-system.png")
        - Leave image empty "" to show a placeholder until you add one
    */
    projects: [
        {
            id: 'bank-system',
            title: 'Bank Account Management System',
            icon: 'fa-solid fa-building-columns',
            shortDesc: 'Secure object-oriented banking application built with Java.',
            description: 'A secure object-oriented banking application developed using Java for managing accounts, deposits, withdrawals, and balance tracking.',
            image: 'assets/projects/bank-system.png',
            github: '',
            liveUrl: '',
            tech: ['Java', 'OOP', 'Data Structures']
        },
        {
            id: 'energy-grid',
            title: 'Optimized City Energy Grid & Carbon Footprint Tracker',
            icon: 'fa-solid fa-bolt',
            shortDesc: 'Database system for urban energy analysis and carbon tracking.',
            description: 'A database management system built with SQL to analyze urban energy distribution, optimize power grids, and monitor carbon footprint metrics efficiently.',
            image: 'assets/projects/energy-grid.png',
            github: '',
            liveUrl: '',
            tech: ['SQL', 'DBMS', 'Relational Database']
        }
    ],

    futurePlans: [
        {
            icon: 'fa-solid fa-laptop-code',
            title: 'Become a Software Engineer',
            description: 'Prepare myself for a successful career as a Software Engineer through continuous learning, internships, and real-world experience.'
        },
        {
            icon: 'fa-solid fa-code',
            title: 'Keep Programming & Building',
            description: 'Strengthen my foundation in Java, C, and Python while building practical projects that sharpen my problem-solving skills.'
        },
        {
            icon: 'fa-solid fa-book',
            title: 'Expand My Tech Skills',
            description: 'Learn new technologies, frameworks, and tools to stay current and versatile as a developer.'
        },
        {
            icon: 'fa-solid fa-lightbulb',
            title: 'Build Meaningful Projects',
            description: 'Create apps, websites, and platforms that solve real problems and showcase my abilities to future employers.'
        }
    ],    /*
    /*
        AWARDS & ACHIEVEMENTS
    */
    awards: [
        {
            id: 'vc-award-1-2',
            title: 'Vice Chancellor (VC) Award',
            semester: 'Semester 1.2',
            type: 'VC Award',
            description: 'Awarded Vice Chancellor Award for achieving top academic distinction in Semester 1.2.'
        },
        {
            id: 'dean-award-1-1',
            title: "Dean's Honor List Award",
            semester: 'Semester 1.1',
            type: "Dean's Award",
            description: "Earned placement on the Dean's Honor List for outstanding academic performance in Semester 1.1."
        },
        {
            id: 'dean-award-2-2',
            title: "Dean's Honor List Award",
            semester: 'Semester 2.2',
            type: "Dean's Award",
            description: "Earned placement on the Dean's Honor List for outstanding academic performance in Semester 2.2."
        }
    ],

    /*
        HOBBIES
        - image: optional photo path (e.g. "assets/hobbies/dance.jpg")
    */
    hobbies: [
        {
            icon: 'fa-solid fa-person-running',
            title: 'Dancing',
            description: 'I love dancing — it keeps me energetic, expressive, and balanced outside of coding.',
            image: ''
        },
        {
            icon: 'fa-solid fa-book-open',
            title: 'Reading New Books',
            description: 'Exploring fresh books on technology, creativity, and personal growth to keep learning beyond the screen.',
            image: ''
        },
        {
            icon: 'fa-solid fa-map-location-dot',
            title: 'Exploring Creative Places',
            description: 'Visiting new cafes, art spots, and creative spaces that inspire fresh ideas and perspectives.',
            image: ''
        },
        {
            icon: 'fa-solid fa-palette',
            title: 'Art & Painting',
            description: 'Creating artwork and painting — an artistic outlet for imagination, colors, and visual design.',
            image: ''
        }
    ],

    /*
        EXPERIENCE
    */
    experience: [
        {
            id: 'script-evaluator',
            title: 'Academic Script Evaluator — English Coaching Centre',
            description: 'Evaluated and reviewed students’ answer scripts.',
            icon: 'fa-solid fa-file-signature'
        },
        {
            id: 'exam-dept',
            title: 'Exam Department Member — ACS',
            description: 'Assisted with exam-related academic tasks.',
            icon: 'fa-solid fa-clipboard-check'
        },
        {
            id: 'content-intern',
            title: 'Content (Academics) Intern — 10 Minute School',
            description: 'Selected through an interview for the academic content team.',
            icon: 'fa-solid fa-pen-nib'
        },
        {
            id: 'private-tutor',
            title: 'Private Tutor',
            description: 'Provide personalized academic support to students.',
            icon: 'fa-solid fa-user-graduate'
        }
    ]
};

/* ============================================================
   RENDER FUNCTIONS
   ============================================================ */

function formatPhoneLink(phone) {
    return `tel:+880${phone.replace(/^0/, '')}`;
}

function renderImageOrPlaceholder(src, alt, className) {
    if (src) {
        return `<img src="${src}" alt="${alt}" class="${className}" onerror="this.outerHTML=getImagePlaceholder('${alt}','${className}')">`;
    }
    return getImagePlaceholder(alt, className);
}

function getImagePlaceholder(alt, className) {
    return `<div class="${className} image-placeholder" aria-label="${alt}">
        <i class="fa-solid fa-image"></i>
        <span>Add photo</span>
    </div>`;
}

function renderProjectsList() {
    const container = document.getElementById('projectsList');
    if (!container) return;

    container.innerHTML = PORTFOLIO_DATA.projects.map(project => `
        <div class="list-card" onclick="openProjectDetail('${project.id}')">
            <div class="list-card-thumb">
                ${project.image
            ? `<img src="${project.image}" alt="${project.title}" onerror="this.parentElement.innerHTML='<div class=\\'thumb-placeholder\\'><i class=\\'${project.icon}\\'></i></div>'">`
            : `<div class="thumb-placeholder"><i class="${project.icon}"></i></div>`
        }
            </div>
            <div class="list-card-body">
                <h4><i class="${project.icon}"></i> ${project.title}</h4>
                <p>${project.shortDesc}</p>
                <div class="tech-stack">${project.tech.map(t => `<span>${t}</span>`).join('')}</div>
            </div>
            <i class="fa-solid fa-chevron-right list-card-arrow"></i>
        </div>
    `).join('');
}

function openProjectDetail(projectId) {
    const project = PORTFOLIO_DATA.projects.find(p => p.id === projectId);
    if (!project) return;

    closeModal('projectsModal');

    const container = document.getElementById('projectDetailContent');
    container.innerHTML = `
        <div class="detail-hero">
            ${renderImageOrPlaceholder(project.image, project.title, 'detail-hero-img')}
        </div>
        <h2>${project.title}</h2>
        <p>${project.description}</p>
        <div class="tech-stack detail-tech">${project.tech.map(t => `<span>${t}</span>`).join('')}</div>
        <div class="detail-actions">
            ${project.github ? `<a href="${project.github}" target="_blank" rel="noopener" class="btn btn-outline small-btn"><i class="fa-brands fa-github"></i> View on GitHub</a>` : ''}
            ${project.liveUrl ? `<a href="${project.liveUrl}" target="_blank" rel="noopener" class="btn btn-primary small-btn"><i class="fa-solid fa-arrow-up-right-from-square"></i> Live Demo</a>` : ''}
        </div>
    `;

    openModal('projectDetailModal');
}

function renderFuturePlans() {
    const container = document.getElementById('futurePlansContent');
    if (!container) return;

    container.innerHTML = `
        <div class="plans-grid">
            ${PORTFOLIO_DATA.futurePlans.map((plan, i) => `
                <div class="plan-card" style="--delay: ${i * 0.08}s">
                    <div class="plan-icon"><i class="${plan.icon}"></i></div>
                    <h4>${plan.title}</h4>
                    <p>${plan.description}</p>
                </div>
            `).join('')}
        </div>
    `;
}

function renderAwardsList() {
    const container = document.getElementById('awardsList');
    if (!container) return;

    container.innerHTML = PORTFOLIO_DATA.awards.map(award => {
        const isVc = award.type === 'VC Award';
        return `
            <div class="award-card ${isVc ? 'award-card-vc' : 'award-card-dean'}">
                <div class="award-date">
                    <span class="award-month">${award.semester}</span>
                </div>
                <div class="award-body">
                    <h4>${award.title}</h4>
                    <span class="award-badge ${isVc ? 'badge-vc' : 'badge-dean'}">
                        <i class="fa-solid ${isVc ? 'fa-crown' : 'fa-award'}"></i> ${award.type}
                    </span>
                    <p style="margin-top: 10px; margin-bottom: 0;">${award.description}</p>
                </div>
            </div>
        `;
    }).join('');
}

function renderHobbies() {
    const container = document.getElementById('hobbiesContent');
    if (!container) return;

    container.innerHTML = `
        <div class="hobbies-grid">
            ${PORTFOLIO_DATA.hobbies.map((hobby, i) => `
                <div class="hobby-card" style="--delay: ${i * 0.08}s">
                    ${hobby.image
            ? `<div class="hobby-img-wrap">${renderImageOrPlaceholder(hobby.image, hobby.title, 'hobby-img')}</div>`
            : `<div class="hobby-icon-wrap"><i class="${hobby.icon}"></i></div>`
        }
                    <h4><i class="${hobby.icon}"></i> ${hobby.title}</h4>
                    <p>${hobby.description}</p>
                </div>
            `).join('')}
        </div>
    `;
}

function renderExperienceList() {
    const sectionContainer = document.getElementById('experienceSectionList');
    const modalContainer = document.getElementById('experienceModalList');

    const html = PORTFOLIO_DATA.experience.map((item, i) => `
        <div class="experience-card" style="--delay: ${i * 0.08}s">
            <div class="experience-card-header">
                <div class="experience-icon"><i class="${item.icon}"></i></div>
                <h3>${item.title}</h3>
            </div>
            <p>${item.description}</p>
        </div>
    `).join('');

    if (sectionContainer) sectionContainer.innerHTML = html;
    if (modalContainer) modalContainer.innerHTML = html;
}

function renderConnectInfo() {
    const { email, phoneDisplay, phone, github, linkedin } = PORTFOLIO_DATA.profile;
    const preview = document.getElementById('connectPreview');
    const info = document.getElementById('connectInfo');

    if (preview) {
        preview.innerHTML = `
            <span><i class="fa-solid fa-envelope"></i> ${email}</span>
            <span><i class="fa-solid fa-phone"></i> ${phoneDisplay}</span>
        `;
    }

    if (info) {
        info.innerHTML = `
            <a href="mailto:${email}" class="contact-item">
                <i class="fa-solid fa-envelope contact-icon"></i>
                <div>
                    <strong>Email</strong>
                    <span>${email}</span>
                </div>
                <button type="button" class="copy-btn" onclick="event.preventDefault(); copyText('${email}', this)" title="Copy email">
                    <i class="fa-regular fa-copy"></i>
                </button>
            </a>
            <a href="${formatPhoneLink(phone)}" class="contact-item">
                <i class="fa-solid fa-phone contact-icon"></i>
                <div>
                    <strong>Phone</strong>
                    <span>${phoneDisplay}</span>
                </div>
                <button type="button" class="copy-btn" onclick="event.preventDefault(); copyText('${phoneDisplay}', this)" title="Copy phone">
                    <i class="fa-regular fa-copy"></i>
                </button>
            </a>
            <div class="social-links-row">
                <a href="${github}" target="_blank" rel="noopener" class="btn btn-outline small-btn" title="GitHub">
                    <i class="fa-brands fa-github"></i> GitHub
                </a>
                ${linkedin
                ? `<a href="${linkedin}" target="_blank" rel="noopener" class="btn btn-outline small-btn" title="LinkedIn"><i class="fa-brands fa-linkedin"></i> LinkedIn</a>`
                : `<span class="btn btn-outline small-btn disabled-link" title="LinkedIn coming soon"><i class="fa-brands fa-linkedin"></i> LinkedIn</span>`
            }
            </div>
        `;
    }
}

function updatePreviews() {
    const projectsPreview = document.getElementById('projectsPreview');
    const awardsPreview = document.getElementById('awardsPreview');
    const experiencePreview = document.getElementById('experiencePreview');

    if (projectsPreview && PORTFOLIO_DATA.projects.length) {
        projectsPreview.textContent = PORTFOLIO_DATA.projects.map(p => p.title).join(', ');
    }

    if (awardsPreview) {
        awardsPreview.textContent = "VC Award (Sem 1.2) & Dean's Awards (Sem 1.1, 2.2)";
    }

    if (experiencePreview && PORTFOLIO_DATA.experience && PORTFOLIO_DATA.experience.length) {
        experiencePreview.textContent = "Evaluator, ACS Member, Intern & Tutor";
    }
}

function copyText(text, btn) {
    navigator.clipboard.writeText(text).then(() => {
        const icon = btn.querySelector('i');
        icon.className = 'fa-solid fa-check';
        setTimeout(() => { icon.className = 'fa-regular fa-copy'; }, 1500);
    });
}

/* ============================================================
   SCROLL REVEAL
   ============================================================ */

const revealElements = document.querySelectorAll('.reveal');
const revealOnScroll = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) entry.target.classList.add('revealed');
    });
}, { threshold: 0.1 });
revealElements.forEach(el => revealOnScroll.observe(el));

/* ============================================================
   CONTACT FORM
   ============================================================ */

function handleFormSubmit(event) {
    event.preventDefault();
    const btn = event.target.querySelector('button');
    const originalText = btn.innerHTML;

    btn.innerHTML = '<i class="fa-solid fa-circle-notch fa-spin"></i> Sending...';
    btn.disabled = true;

    setTimeout(() => {
        alert('Thank you! Your message has been sent successfully.');
        event.target.reset();
        btn.innerHTML = originalText;
        btn.disabled = false;
        closeModal('connectModal');
    }, 1500);
}

/* ============================================================
   MODAL LOGIC
   ============================================================ */

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

window.onclick = function (event) {
    if (event.target.classList.contains('modal-overlay')) {
        event.target.classList.remove('modal-active');
        document.body.style.overflow = 'auto';
    }
};

document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        document.querySelectorAll('.modal-overlay.modal-active').forEach(modal => {
            modal.classList.remove('modal-active');
        });
        document.body.style.overflow = 'auto';
    }
});

/* ============================================================
   THEME TOGGLE
   ============================================================ */

const themeToggleBtn = document.getElementById('themeToggle');
const body = document.body;

function updateThemeIcon() {
    const icon = themeToggleBtn.querySelector('i');
    if (body.classList.contains('light-mode')) {
        icon.className = 'fa-solid fa-sun';
    } else {
        icon.className = 'fa-solid fa-moon';
    }
}

// Check saved theme
if (localStorage.getItem('portfolio-theme') === 'light') {
    body.classList.add('light-mode');
}
if (themeToggleBtn) updateThemeIcon();

if (themeToggleBtn) {
    themeToggleBtn.addEventListener('click', () => {
        body.classList.toggle('light-mode');
        localStorage.setItem('portfolio-theme', body.classList.contains('light-mode') ? 'light' : 'dark');
        updateThemeIcon();
    });
}

/* ============================================================
   INIT
   ============================================================ */

document.addEventListener('DOMContentLoaded', () => {
    renderProjectsList();
    renderFuturePlans();
    renderAwardsList();
    renderHobbies();
    renderExperienceList();
    renderConnectInfo();
    updatePreviews();

    const yearEl = document.getElementById('footerYear');
    if (yearEl) yearEl.textContent = new Date().getFullYear();
});
