const skillsContainer = document.querySelector('.skills-container');

    const skills = [
        { icon: 'fab fa-html5', name: 'HTML' },
        { icon: 'fab fa-css3-alt', name: 'CSS' },
        { icon: 'fab fa-js', name: 'JavaScript' },
        { icon: 'fas fa-code', name: 'C#' },
        { icon: 'fas fa-database', name: 'SQL' },
        { icon: 'fab fa-microsoft', name: '.NET' },
        { icon: 'fas fa-project-diagram', name: 'MVC Architecture' }
    ];

    skills.forEach(skill => {
        const skillCard = `
            <div class="skill-card animate__animated animate__fadeInUp">
                <i class="${skill.icon}"></i>
                <p>${skill.name}</p>
            </div>
        `;
        skillsContainer.innerHTML += skillCard;
    });


const educationData = [
    { degree: "Bachelor's in Computer Science", details: "Karmveer Abasaheb Alias N. M. Sonawane College, Pune University (GPA: 6.15)" },
    { degree: "XII Grade Science", details: "S.P.H College Nampur (Grade: 68.80%)" },
    { degree: "X Grade", details: "Nampur English School (Grade: 68.80%)" }
];

const educationSection = document.getElementById('education');
educationData.forEach(item => {
    const educationItem = `
        <div class="education-item animate__animated animate__fadeInUp">
            <h4>${item.degree}</h4>
            <p>${item.details}</p>
        </div>
    `;
    educationSection.innerHTML += educationItem;
});

const projectsData = [
    { name: "Maha-E-Kisan", description: "Developed using C#, ASP.NET, and MVC architecture to perform full CRUD operations, enhancing efficiency and data integrity." },
    { name: "Portfolio Website", description: "Created a responsive portfolio using HTML, CSS, JavaScript, and Bootstrap to showcase personal projects and technical skills." }
];

const projectsContainer = document.querySelector('.projects-container');
projectsData.forEach(project => {
    const projectCard = `
        <div class="project-card animate__animated animate__fadeInUp">
            <h3>${project.name}</h3>
            <p>${project.description}</p>
        </div>
    `;
    projectsContainer.innerHTML += projectCard;
});


const contactInfoData = [
    { icon: "fas fa-envelope", link: "mailto:rohitahire54@outlook.com", text: "rohitahire54@outlook.com" },
    { icon: "fas fa-phone", text: "9359097573" },
    { icon: "fab fa-linkedin", link: "https://www.linkedin.com/in/rohit-ahire-b531b3286/", text: "linkedin.com/in/rohit-ahire" }
];

const contactInfoContainer = document.querySelector('.contact-info');
contactInfoData.forEach(info => {
    const contactItem = `
        <div class="animate__animated animate__fadeInUp">
            <i class="${info.icon}"></i>
            ${info.link ? `<a href="${info.link}">${info.text}</a>` : `<span>${info.text}</span>`}
        </div>
    `;
    contactInfoContainer.innerHTML += contactItem;
});

// Smooth Scrolling for Navigation Links (Optional)
document.querySelectorAll('nav a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);

        // Smooth scroll to the target element
        targetElement.scrollIntoView({
            behavior: 'smooth'
        });

        // Highlight the active link
        document.querySelectorAll('nav a').forEach(link => {
            link.classList.remove('active');
        });
        this.classList.add('active');
    });
});

// Add active class to the current section in view (Optional)
window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('nav a');

    let currentSection = '';

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (pageYOffset >= (sectionTop - sectionHeight / 3)) {
            currentSection = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').includes(currentSection)) {
            link.classList.add('active');
        }
    });
});