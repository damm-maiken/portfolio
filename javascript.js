
// Array of objects containing work experience data
const experienceData = [
    {
        title: "Student Assistant",
        company: " - Dataproces",
        period: "June 2023 - ",
        details: [
            "Designed high-fidelity prototypes in Figma in close collaboration with developers.",
            "Contributed to UX optimization with a focus on usability.",
            "Coded UI components in HTML and CSS",
            "Involved in the full development process from idea to final product"
        ]
    },

    {
        title: "Student Assistant",
        company: " - AAU Student Guidance",
        period: "June 2022 - June 2023",
        details: [
            "Updated websites using Umbraco CMS",
            "Created graphic elements for digital useI did also create content for social media using Adobe InDesign, Premiere Pro and Canva."
        ]
    },

    {
        title: "Student Assistant",
        company: " - Agri Nord",
        period: "October 2020 - April 2021",
        details: [
            "Participated in the redesign of the company website",
            "Migrated content from Ultimize to WordPress",
            "Worked on responsive and accessible design"
        ]
    },

];

// Array of objects containing education data
const educationData = [
    {
        title: "Master's Degree, Interaction Design",
        company: "Aalborg University",
        period: "September 2023 - June 2025",
        detailsTitle: "Master's Degree, Interaction Design",
        details: [
            "Strong skills in researching, analyzing, and solving user-centered design problems using the latest design methods",
            "Specialized in user involvement and the design of innovative user-friendly solutions with a focus on functionality and accessibility"
        ]
    },
    
    {
        title: "Bachelor's Degree, Interaction Design",
        company: "Aalborg University",
        period: "September 2020 - June 2023",
        detailsTitle: "Bachelor's Degree, Interaction Design",
        details: [
            "Worked intensively with user involvement through qualitative methods such as user testing and interviews, as well as quantitative surveys",
            "Gained technical understanding and practical experience with HTML, CSS, C, and C# for developing functional prototypes and interactive solutions",
            "Focused on designing digital solutions with high usability and aesthetics"
        ]
    },
];

// Array of objects containing voluntary work data
const contentVoluentaryData = [
    {
        title: "Competetion committee",
        company: "Sportsrideklubben for Klarup og Omegn",
        period: "Marts 2024- ",
        detailsTitle: "Competetion committee at Sportsrideklubben for Klarup og Omegn",
        details: "At Sportsrideklubben for Klarup og Omegn I am a part of the competetion committee. My tasks include planning and executing competetions."
    },
    {
        title: "Board member",
        company: "FixD",
        period: "October 2021 - December 2024",
        detailsTitle: "Board member at FixD",
        details: "As a board member at the student organisation I have been responsible for planning the professional events."
    },
    {
        title: "Board member",
        company: "ADSL",
        period: "May 2022 - October 2024",
        detailsTitle: "Board member at ADSL",
        details: "I were a board member of the student organisation ADSL, which worked on creating better facilities for students at the department of Computer Science."
    },

];


const contentProjectData = [
    {
        title: "Master's thesis - Mindly",
        description: "A gamified application for supporting mental health and creating structure among young adults",
        imagesStyle: "side-by-side",
        images: ["Images/Mindly_frontpage.png", "Images/Mindly_calendar.png", "Images/Mindly_add_activity.png"],
        details: "<strong>Mindly</strong> <br/> Mindly is a gamified mental health and self-care app designed and developed as part of my Master’s thesis in Interaction Design at Aalborg University. Incorporating a virtual companion, Mindly helped users build healthy daily routines, practice mindfulness, and reflect on their well-being in their daily life. The project explored how gamification can shape user engagement, satisfaction, and overall mental health outcomes in digital self-care tools. To test the app a one-week user-study with real users was conducted, gathering insights on how they interacted with the app and how it fit into their daily lives.",
        technology: "<strong>Technology</strong> <br/> For the development of Mindly, we used a variety of technologies. This included Figma for wireframes and mockups, and Adobe Illustrator for creating all the room inventory as well as the virtual companion. The application itself was developed using Godot 4 and a Firebase database.",
        myRole: "<strong>My role</strong> <br/> As part of the project, I was responsible for designing and illustrating all the room assets using Adobe Illustrator. Additionally, I handled the UI design in Godot, creating a reusable style theme, and implemented the level system using GDScript. I also contributed to analysing the test data and transforming it into meaningful insights.",
        technologyIcons: ["Images/Icons/figma.png", "Images/Icons/illustrator.png", "Images/Icons/godot4.png", "Images/Icons/firebase.png"],

    },
    {
        title: "Design thinking atlas",
        description: "The Design Thinking Atlas is an interactive tool which helps developers incoorporate user-centered design into their projects",
        imagesStyle: "side-by-side",
        images: ["Images/DTAtlas/DT_frontpage.png", "Images/DTAtlas/DT_PoR.png", "Images/DTAtlas/DT_Method.png"],
        details: "<strong>The Design Thinking Atlas</strong> <br/> The Design Thinking Atlas was developed with a case company, and is an interactive tool which helps developers incorporate user-centered design into an agile development process. The Design Thinking Atlas provides a structured approach to user-centered design by offering an overview of the design thinking process and valuable methods for each phase. The development of the Design Thinking Atlas was an iterative process, consisting of multiple interviews and workshops with the case company to ensure that the tool met their needs and expectations. The final prototype was tested trough a workshop with the case company, simluating a real world scenario where the Design Thinking Atlas was used to solve a design challenge.",
        technology: "<strong>Technology</strong> <br/> The Design Thinking Atlas was developed using Figma for wireframes and mockups, and the final prototype was implemented using HTML, CSS, and React. Firebase was used for the backend to store user data and preferences.",
        myRole: "<strong>My role</strong> <br/> I was responsible for the design and development of the Design Thinking Atlas, including creating wireframes, mockups, and implementing the front end using HTML, CSS, and React. I also contributed to user testing and feedback analysis, identifying both opportunities and potential pitfalls.",
        technologyIcons: ["Images/Icons/figma.png", "Images/Icons/html.png", "Images/Icons/css.png", "Images/Icons/react.png", "Images/Icons/firebase.png"],

    },
    {
        title: "Bachelor's thesis - InTime",
        description: "An intelligent system to help pupils learn about power plants",
        imagesStyle: "side-by-side",
        images: ["Images/InTime/InTime_pieces.png", "Images/InTime/InTime_opgaver.png"],
        details: "<strong>InTime</strong> <br/> InTime combines a website with a physical board game to teach pupils about power plants and their components. InTime is an intelligent system which generates tasks based on pupils' previous mistakes and progress, allowing them to learn at their own pace. The system is designed to be used in a classroom setting, where pupils can work together to solve tasks and learn about power plants in a fun and engaging way. The prototype was evaluated with teachers which overall felt positive about the concept and the potential of InTime to help pupils learn about power plants.",
        technology: "<strong>Technology</strong> <br/> The website was developed using Svelte (a JavaScript framework), HTML, and CSS. The physical board game pieces were designed using SolidWorks and afterwards 3D printed." ,
        myRole: "<strong>My role</strong> <br/> I was responsible for modelling the playing pieces using SolidWorks, and afterwards 3D printing them. Furthermore, I contributed to development of the website through wireframing and mockups in Figma.",
        technologyIcons: ["Images/Icons/figma.png", "Images/Icons/solidworks.png", "Images/Icons/html.png", "Images/Icons/css.png"],
    },

    {
        title: "MIWO",
        description: "A website for connecting with other to help with DIY projects.",
        imagesStyle: "side-by-side",
        images: ["Images/MIWO/MIWO_about.png", "Images/MIWO/MIWO_feed.png"],
        details: "<strong>MIWO</strong> <br/> MIWO is a platform that connects individuals who are interested in DIY projects. Users can share their projects, ask for help, and collaborate with others.",
        technology: "<strong>Technology</strong> <br/> Figma was used for wireframing and design exploration. The final prototype was developed using HTML, CSS, and C#.",
        myRole: "<strong>My role</strong> <br/>My role included designing wireframes, developing front-end components using HTML and CSS, and facilitate the usability test",
        technologyIcons: ["Images/Icons/figma.png", "Images/Icons/html.png", "Images/Icons/css.png", "Images/Icons/c-sharp.png"]
    },
];

const contentCompetenciesData = [
    {
        title: "User Research",
        competencies: "Interviews | Usability testing | Workshops| Surveys | User Journey",
    },
    {
        title: "Product Design",
        competencies: "Figma | Wireframing | Mock ups | Concept development | Prototyping | 3D Modelling",
    },
    {
        title: "Coding",
        competencies: "HTML | CSS | JavaScript | Github | Godot 4 | C#",
    },
    {
        title: "Graphical Design",
        competencies: "Illustrator | InDesign | Photoshop | Canva",
    },
];


function createExperienceData(experienceData, containerName){
    const container = document.querySelector(containerName);

    experienceData.forEach((data) => {
    const accordionItem = document.createElement("div");
    accordionItem.className = 'accordion-item';
    accordionItem.innerHTML = `
        <div class="accordion-header">
            <span class="accordion-title">${data.title}</span>
            <span class="accordion-company">${data.company}</span>
            <i class="fas fa-chevron-down"></i>
        </div>
        
        <div class="accordion-content">
            <ul>
            ${data.details.map(detail => `<li>${detail}</li>`).join("")}
            </ul>
        </div>`;

    // Add event listener to toggle accordion content
    accordionItem.querySelector(".accordion-header").addEventListener('click', displayContent);

    container.appendChild(accordionItem);
    });

}

function displayContent() {
    const content = this.nextElementSibling;
    const chevron = this.querySelector('i');
    content.classList.toggle('open');      // For smooth accordion transition
    chevron.classList.toggle('rotate');    // For chevron rotation
}

function createProjectData(projectData, containerName){
    // Find the HTML container
    const container = document.querySelector(containerName)

    // Create a popup container for displaying project details
    const popupContainer = document.createElement("div");
    popupContainer.className = 'popup-container';
    popupContainer.id = 'popup-container-id'
        popupContainer.innerHTML = `
        <div class="popup-content">
            <h2 id="popup-title"></h2>
            <p id="popup-details"></p>
            <p id="popup-technology"></p>
            <div id="technology-icons"></div>
            <p id="popup-myRole"></p>
            <div id="popup-images"></div>
            <button class="close primary-btn">Go back</button>
        </div>`;

    //Create an overlay for the popup
    const overlay = document.createElement("div");
    overlay.className = 'popup-overlay';
    overlay.id = 'popup-overlay-id';
    document.body.appendChild(overlay);

    popupContainer.querySelector(".close").addEventListener("click", () => {
        popupContainer.classList.remove("show");
        overlay.classList.remove("show");
    })
    document.body.appendChild(popupContainer); 

    // Loop through the project data array and create a div for each object
    projectData.forEach((data, index) => { 
        
         // Convert images into HTML elements so they can be added
        const imagesList = data.images.map(image => `<img src="${image}">`).join("");

        // Create a div for each project
        const projectContainer = document.createElement("div");
        projectContainer.className = 'project-container';
        if (index % 2 === 1) {
            projectContainer.classList.add('right-align');
        }
        if (index !== 0){
            projectContainer.style.opacity = '0'; // Hide all projects except the first one
            projectContainer.style.pointerEvents = 'none'; // Disable pointer events for hidden projects
    
        }

            // Create the left edge of the project container
            const leftEdge = document.createElement("div");
            leftEdge.className = 'left-edge';
            projectContainer.appendChild(leftEdge);

            // Create the right side 
            const rightSide = document.createElement("div");
            rightSide.className = 'project-right-side';

                const projectData = document.createElement("div");
                projectData.className = 'project-data-div';
            
                    // Create the content for project-data-div
                    projectData.innerHTML = `
                        <h1>${data.title}</h1>
                        <p>${data.description}</p>`;
                    rightSide.appendChild(projectData);

                    // Create a div for the images
                    const contentContainer = document.createElement("div");
                    contentContainer.className = 'image-container';
                        contentContainer.innerHTML = imagesList;
                    rightSide.appendChild(contentContainer);

                    // Create an overlay when hovering
                    const projectOverlay = document.createElement("div");
                    projectOverlay.className = 'project-overlay';
                    projectOverlay.innerHTML = `
                        <button class="primary-btn">Read more</button>`;

                    projectOverlay.querySelector("button").addEventListener("click", () => openPopup(data));
                    projectContainer.appendChild(projectOverlay);
                
                projectContainer.appendChild(rightSide);
    
    // Append the project container to the main container
    container.appendChild(projectContainer);
    });
}

function fadeInOnScroll(selector) {
    const elements = document.querySelectorAll(selector);

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting){
                entry.target.style.opacity = '1';
                entry.target.classList.add('animate__animated', 'animate__fadeInUp');
                entry.target.style.pointerEvents = 'auto'; // Enable pointer events
                observer.unobserve(entry.target); // Stop observing after the first intersection
            }
        });
    }, { threshold: 0.2 });

    elements.forEach((el, idx) => {
        if (idx !== 0) { // Skip the first element
        observer.observe(el);
        }
    });
}

// Function to open a popup with project details
// This function is called when the "Read more" text is clicked
function openPopup(data){
    const popup = document.getElementById("popup-container-id");
    const overlay = document.getElementById("popup-overlay-id");
    document.getElementById("popup-title").textContent = data.title;
    document.getElementById("popup-details").innerHTML = data.details;
    document.getElementById("popup-technology").innerHTML = data.technology;
    document.getElementById("popup-myRole").innerHTML = data.myRole;

    const imagesPopup = document.getElementById("popup-images");
    imagesPopup.innerHTML = data.images.map(image => `<img src="${image}">`).join("");

    const technologyIcons = document.getElementById("technology-icons");
    technologyIcons.innerHTML = data.technologyIcons
    .map(icon => `<img src="${icon}">`)
    .join("");

    // Reset scroll position
    popup.querySelector(".popup-content").scrollTop = 0; 

    // Show the popup and overlay when the "Read more" text is clicked
    popup.classList.add("show");
    overlay.classList.add("show");
}

function createCompetenceCard(competenceData, containerName) {
    const container = document.querySelector(containerName);

    competenceData.forEach(data => {
        const competeciesContainer = document.createElement("div");
        competeciesContainer.className = 'competencies-container';

            const leftEdge = document.createElement("div");
            leftEdge.className = 'left-edge';
            competeciesContainer.appendChild(leftEdge);

            const competenciesData = document.createElement("div");
            competenciesData.className = 'competencies-data';

                const competecenciesContent = document.createElement("div");
                competecenciesContent.className = 'competencies-content';
                competecenciesContent.innerHTML = `
                <h2>${data.title}</h2>`;

            competenciesData.appendChild(competecenciesContent);


                const competenciesOverlay = document.createElement("div");
                competenciesOverlay.className = 'competencies-overlay';
                competenciesOverlay.innerHTML = `
                    <p>${data.competencies}</p>`;

            competenciesData.appendChild(competenciesOverlay);

            
            competeciesContainer.appendChild(competenciesData);

        // Append the competencies container to the main container
        container.appendChild(competeciesContainer);
    })

}


function loadNavbar() {
    fetch("navbar.html") // Load the navbar file
        .then(response => response.text()) // Convert response to text (HTML)
        .then(data => {
            document.getElementById("navbar-container").innerHTML = data; // Insert into the page
        })
        .catch(error => console.error("Error loading navbar:", error));
}

function loadFooter() {
    fetch("footer.html") // Load the footer file
        .then(response => response.text()) // Convert response to text (HTML)
        .then(data => {
            document.getElementById("footer-container").innerHTML = data; // Insert into the page
        })
        .catch(error => console.error("Error loading footer:", error));
}


// Function to load the JS function so they can be used in HTML
window.onload = function () {
    // Load the navbar
    loadNavbar();
    // Load the footer
    loadFooter();

    if (document.querySelector(".work-data-container")) {
        createExperienceData(experienceData, ".work-data-container"); // Work experience
    }

    if (document.querySelector(".education-data-container")) {
        createExperienceData(educationData, ".education-data-container"); // Education
    }

    if (document.querySelector(".project-data-container")) {
        createProjectData(contentProjectData, ".project-data-container");
        fadeInOnScroll(".project-container"); // Fade in effect for projects
    }

    if (document.querySelector(".competencies-wrapper")){
        createCompetenceCard(contentCompetenciesData, ".competencies-wrapper");
    }

}
