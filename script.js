
// Portfolio data from the Flask app
const portfolioData = {
    "name": "Vaibhav Bhagat",
    "title": "Data Engineer",
    "email": "bhagatvaibhav411@gmail.com",
    "phone": "+1 (959)2418970",
    "location": "Bridgeport, Connecticut",
    "summary": "Passionate Data Engineer with experience in data processing, analytics, and machine learning. Seeking internship opportunities in Cell Engineering and data-driven solutions.",
    "skills": [
        "Python", "SQL", "Pandas", "NumPy", "ADO.NET",
        "Asp.Net", "C++", "Machine Learning",
        "Azure", "MongoDB", "AWS", "Java"
    ],
    "experience": [
        {
            "title": "Project Developer Intern",
            "company": "Toshal Infotech",
            "duration": "Summer 2023",
            "description": "Developed a secure, role-based Cab Management System using C#, ASP.NET, and SQL Server, optimizing booking workflows and improving system performance by up to 13%."
        },
        {
            "title": "Trainee",
            "company": "PALSOFT INDIA",
            "duration": "Summer 2022",
            "description": "Developed a data-driven ASP.NET MVC web application with MSSQL to manage customer information, enabling structured coding, efficient data handling, and insightful KPI reporting."
        }
    ],
    "education": [
        {
            "degree": "Master's in Computer Science",
            "school": "University of Bridgeport",
            "year": "2024",
            "gpa": "3.71/4.0"
        },
        {
            "degree": "Bachelor's in Computer Engineering",
            "school": "Sarvajanik college of engineering & technology",
            "year": "2022",
            "gpa": "3.80/4.0"
        }
    ],
    "projects": [
        {
            "name": "Cab Management System",
            "description": "Developed a multi-tiered cab management system with role-based access, optimized data retrieval, and enhanced booking workflows",
            "technologies": ["C#", "ADO.NET", "SQL Server"]
        },
        {
            "name": "Inventory Management System for Wholesale Dealer",
            "description": "Building a web-based inventory system to streamline product tracking, order management, and stock control",
            "technologies": ["ASP.NET", "SQL Server", "C#"]
        },
        {
            "name": "Unity Game Development (Self-Learning)",
            "description": "Developing 2D and 3D games using Unity and C#, implementing gameplay mechanics and physics through tutorials",
            "technologies": ["Unity", "C#"]
        }
    ]
};

// Function to populate the portfolio with data
function populatePortfolio() {
    // Hero section
    document.getElementById('name').textContent = portfolioData.name;
    document.getElementById('title').textContent = portfolioData.title;
    document.getElementById('summary').textContent = portfolioData.summary;

    // Contact info
    document.getElementById('email').textContent = portfolioData.email;
    document.getElementById('phone').textContent = portfolioData.phone;
    document.getElementById('location').textContent = portfolioData.location;

    // Skills
    const skillsList = document.getElementById('skills-list');
    portfolioData.skills.forEach(skill => {
        const skillItem = document.createElement('span');
        skillItem.className = 'skill-item';
        skillItem.textContent = skill;
        skillsList.appendChild(skillItem);
    });

    // Experience
    const experienceList = document.getElementById('experience-list');
    portfolioData.experience.forEach(exp => {
        const expItem = document.createElement('div');
        expItem.className = 'timeline-item';
        expItem.innerHTML = `
            <div class="timeline-content">
                <h3>${exp.title}</h3>
                <h4>${exp.company}</h4>
                <span class="duration">${exp.duration}</span>
                <p>${exp.description}</p>
            </div>
        `;
        experienceList.appendChild(expItem);
    });

    // Education
    const educationList = document.getElementById('education-list');
    portfolioData.education.forEach(edu => {
        const eduItem = document.createElement('div');
        eduItem.className = 'education-item';
        eduItem.innerHTML = `
            <h3>${edu.degree}</h3>
            <h4>${edu.school}</h4>
            <div class="education-details">
                <span class="year">${edu.year}</span>
                <span class="gpa">GPA: ${edu.gpa}</span>
            </div>
        `;
        educationList.appendChild(eduItem);
    });

    // Projects
    const projectsList = document.getElementById('projects-list');
    portfolioData.projects.forEach(project => {
        const projectItem = document.createElement('div');
        projectItem.className = 'project-item';
        
        const techList = project.technologies.map(tech => 
            `<span class="tech-tag">${tech}</span>`
        ).join('');

        projectItem.innerHTML = `
            <h3>${project.name}</h3>
            <p>${project.description}</p>
            <div class="technologies">
                ${techList}
            </div>
        `;
        projectsList.appendChild(projectItem);
    });
}

// Smooth scrolling for navigation links
function initSmoothScrolling() {
    const navLinks = document.querySelectorAll('a[href^="#"]');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                targetSection.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });
}

// Initialize the portfolio when the page loads
document.addEventListener('DOMContentLoaded', function() {
    populatePortfolio();
    initSmoothScrolling();
});
