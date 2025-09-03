
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
        technology: "<strong>Technology & user involvement</strong> <br/> For the development of Mindly, we used a variety of technologies. This included Figma for wireframes and mockups, and Adobe Illustrator for creating all the room inventory as well as the virtual companion. The application itself was developed using Godot 4 and a Firebase database. A week long user study with users was conducted, giving valuable insights into different use cases and preferences among users. Overall, users was satisfied with the app and its features.",
        myRole: "<strong>My role</strong> <br/> As part of the project, I was responsible for designing and illustrating all the room assets using Adobe Illustrator. Additionally, I handled the UI design in Godot, creating a reusable style theme, and implemented the level system using GDScript. I also contributed to analysing the test data and transforming it into meaningful insights.",
        technologyIcons: ["Images/Icons/figma.png", "Images/Icons/illustrator.png", "Images/Icons/godot4.png", "Images/Icons/firebase.png"],

    },
    {
        title: "Design thinking atlas",
        description: "An interactive tool which helps developers incoorporate user-centered design into their projects",
        imagesStyle: "side-by-side",
        images: ["Images/DTAtlas/DT_frontpage.png", "Images/DTAtlas/DT_PoR.png", "Images/DTAtlas/DT_Method.png"],
        details: "<strong>The Design Thinking Atlas</strong> <br/> The Design Thinking Atlas was developed with a case company, and is an interactive tool which helps developers incorporate user-centered design into an agile development process. The Design Thinking Atlas provides a structured approach to user-centered design by offering an overview of the design thinking process and valuable methods for each phase. The development of the Design Thinking Atlas was an iterative process, consisting of multiple interviews and workshops with the case company to ensure that the tool met their needs and expectations. The final prototype was tested trough a workshop with the case company, simluating a real world scenario where the Design Thinking Atlas was used to solve a design challenge.",
        technology: "<strong>Technology & user involvement</strong> <br/> The Design Thinking Atlas was developed using Figma for wireframes and mockups, and the final prototype was implemented using HTML, CSS, and React. Firebase was used for the backend to store user data and preferences. Multiple interviews and workshops were conducted with the company to ensure that the tool met their needs and expectations.",
        myRole: "<strong>My role</strong> <br/> I was responsible for the design and development of the Design Thinking Atlas, including creating wireframes, mockups, and implementing the front end using HTML, CSS, and React. I also contributed to user testing and feedback analysis, identifying both opportunities and potential pitfalls.",
        technologyIcons: ["Images/Icons/figma.png", "Images/Icons/html.png", "Images/Icons/css.png", "Images/Icons/react.png", "Images/Icons/firebase.png"],

    },
    {
        title: "Bachelor's thesis - InTime",
        description: "An intelligent system to help pupils learn about power plants",
        imagesStyle: "side-by-side",
        images: ["Images/InTime/InTime_pieces.png", "Images/InTime/InTime_opgaver.png"],
        details: "<strong>InTime</strong> <br/> InTime combines a website with a physical board game to teach pupils about power plants and their components. InTime is an intelligent system which generates tasks based on pupils' previous mistakes and progress, allowing them to learn at their own pace. The system is designed to be used in a classroom setting, where pupils can work together to solve tasks and learn about power plants in a fun and engaging way. The prototype was evaluated with teachers which overall felt positive about the concept and the potential of InTime to help pupils learn about power plants.",
        technology: "<strong>Technology & user involvement</strong> <br/> The website was developed using Svelte (a JavaScript framework), HTML, and CSS. The physical board game pieces were designed using SolidWorks and afterwards 3D printed. Teachers were included as part of the iterative design process to make sure the prototype met their needs and expectations. The user involvement included both interviews and hands on test of the prototype with teachers.",
        myRole: "<strong>My role</strong> <br/> I was responsible for modelling the playing pieces using SolidWorks, and afterwards 3D printing them. Furthermore, I contributed to development of the website through wireframing and mockups in Figma.",
        technologyIcons: ["Images/Icons/figma.png", "Images/Icons/solidworks.png", "Images/Icons/html.png", "Images/Icons/css.png"],
    },

    {
        title: "MIWO",
        description: "A website for connecting with other to help with DIY projects.",
        imagesStyle: "side-by-side",
        images: ["Images/MIWO/MIWO_about.png", "Images/MIWO/MIWO_feed.png"],
        details: "<strong>MIWO</strong> <br/> MIWO is a platform that connects individuals who are interested in DIY projects. Users can share their projects, ask for help, and collaborate with others. MIWO was of my university projects and focused on creating a functional prototype. ",
        technology: "<strong>Technology & user involvement</strong> <br/> Figma was used for wireframing and design exploration. The final prototype was developed using HTML, CSS, and C#. Users were involved throughout the entire design process, beginning with user interviews to establish requirements. Later users was involved in usability testing to ensure a high usability and ease of use.",
        myRole: "<strong>My role</strong> <br/>My role included designing wireframes, developing front-end components using HTML and CSS, and facilitate the usability test",
        technologyIcons: ["Images/Icons/figma.png", "Images/Icons/html.png", "Images/Icons/css.png", "Images/Icons/c-sharp.png"]
    },

    {
        title: "Retroscribe",
        description: "Rewriting classic literature into contemporary language using AI",
        imagesStyle: "side-by-side",
        images: ["Images/Retroscribe/main.png", "Images/Retroscribe/reading.png"],
        details: "<strong>Retroscribe</strong> <br/> Retroscribe is a tool that uses AI to rewrite classic literature into contemporary language, making it more accessible to modern readers. The idea behind Retroscribe is to bridge the gap between classic literature and today's readers, to enhance engagement in classical literature among younger age groups.",
        technology: "<strong>Technology & user involvement</strong> <br/> The interface was designed in Figma and the rewriting functionality was implemented using Copilot (Python) and OpenAI's GPT-3. User involvement was ensured through an exploration workshop with potential users to gather insights on their reading habits. After the development of the prototype a hall way test was conducted to gain assess the efficacy of Retroscribe’s output.",
        myRole: "<strong>My role</strong> <br/>My role included designing wireframes and facilitating an exploration workshop with users.",
        technologyIcons: ["Images/Icons/figma.png", "Images/Icons/python.svg"]
    },

    {
        title: "Battleship 2.0",
        description: "An enhanced version of the classic Battleship game with a modern twist.",
        imagesStyle: "side-by-side",
        images: ["Images/Battleship/battleship.jpg", "Images/Battleship/joystick.png" , "Images/Battleship/joystick_sketch.png", "Images/Battleship/radar.png"],
        details: "<strong>Battleship 2.0</strong> <br/> Battleship 2.0 is a modern reimagining of the classic Battleship game, including a joystick for shooting ships and a radar look. Focus on this project was making a controller.",
        technology: "<strong>Technology & user involvement</strong> <br/> Deep insights into how the original Battleship game was played laied the foundation for Battleship 2.0. A 3D printer and CNC cutter was used to develop the joystick and game board. An Arduino made it possible to use the joystick for shooting and light up hit/miss.",
        myRole: "<strong>My role</strong> <br/>I took part in the development of the joystick, using a 3D printer. I also assisted in the integration of the joystick with the game mechanics.",
        technologyIcons: ["Images/Icons/solidworks.png", "Images/Icons/arduino.svg"]
    },

];

const contentCompetenciesData = [
    {
        title: "User Research",
        competencies: "Interviews | Usability testing | Workshops| Surveys | User Journey",
        image: "Images/Stockphoto/user_research.jpg"
    },
    {
        title: "Product Design",
        competencies: "Figma | Wireframing | Mock ups | Concept development | Prototyping | 3D Modelling",
        image: "Images/Stockphoto/product_design.jpg"
    },
    {
        title: "Coding",
        competencies: "HTML | CSS | JavaScript | Github | Godot 4 | C#",
        image: "Images/Stockphoto/coding.jpg"
    },
    {
        title: "Graphical Design",
        competencies: "Illustrator | InDesign | Photoshop | Canva",
        image: "Images/Stockphoto/graphical_design.jpg"
    },
];


function createExperienceData(experienceData, containerName){
    const container = document.querySelector(containerName);

    experienceData.forEach((data) => {
        const accordionItem = document.createElement("div");
        accordionItem.className = 'accordion-item col-lg-10';
        accordionItem.innerHTML = getAccordionItemHTML(data);

    accordionItem.querySelector(".accordion-header").addEventListener('click', displayContent);

    container.appendChild(accordionItem);

    });

}

function getAccordionItemHTML(data){
    return `
        <div class="accordion-header">
            <span class="accordion-title">${data.title}</span>
            <span class="accordion-company">${data.company}</span>
            <i class="fas fa-chevron-down"></i>
        </div>

        <div class="accordion-content">
            <ul>
                ${data.details.map(detail => `<li>${detail}</li>`).join("")}
            </ul>
        </div>
    `;
}

function displayContent() {
    const content = this.nextElementSibling;
    const chevron = this.querySelector('i');
    content.classList.toggle('open');      // For smooth accordion transition
    chevron.classList.toggle('rotate');    // For chevron rotation
}

function createProjectCard(projectData, containerName){
    const container = document.querySelector(containerName);
    const batchSize = 3;

    projectData.forEach((data, index) => {

        //Only render the first 3 projects (used for the frontpage)
        if (containerName === ".frontpage-projects" && index >= 3){
            if (index === 3) {
                            
            const buttonWrapper = document.createElement("div");
            buttonWrapper.className = "col-12 text-center mt-4";

            const showMoreButton = document.createElement("button");
            showMoreButton.className = "primary-btn";
            showMoreButton.innerText = "See more projects";
            showMoreButton.onclick = () => {
                window.location.href = "projects.html"; // Redirect to the projects page
            };
            buttonWrapper.appendChild(showMoreButton);

            container.appendChild(buttonWrapper);
            }
            return;
        }

        const column = document.createElement("div");
        column.className = 'col-lg-4 col-md-6 col-12';

            const projectCard = document.createElement("div");
            projectCard.className = 'projectCard opacity-0';
            projectCard.innerHTML = projectCardHTML(data);
            column.appendChild(projectCard);

            const projectOverlay = document.createElement("div"); 
            projectOverlay.className = "project-overlay";
            projectOverlay.appendChild(createButton("Read more", () => openPopup(data)));
            projectCard.appendChild(projectOverlay);
        container.appendChild(column);

        if (index < batchSize) {
            projectCard.classList.remove('opacity-0');
            projectCard.classList.add('animate__animated', 'animate__fadeInUp');
        }
    });

    fadeOnScroll(batchSize, ".projectCard");
}

function fadeOnScroll(batchSize, containerName){
    // const batchSize = 3; // Number of cards to reveal on scroll
    window.addEventListener('scroll', () => {
        const hiddenCards = document.querySelectorAll(`${containerName}.opacity-0`);
        let revealedCards = 0;

        hiddenCards.forEach((card) => {
            const rect = card.getBoundingClientRect(); // Get the card's position
            if (rect.top < window.innerHeight && revealedCards < batchSize){ // Check if the card is in view
                card.classList.remove('opacity-0');
                card.classList.add('animate__animated', 'animate__fadeInUp');
                revealedCards++;
            }
        })
    })
}


function projectCardHTML(projectData){
    return ` 
        <div class="projectCard-left"></div>
        <div class="projectCard-right">
            <div class="projectCard-image">
                <img src="${projectData.images[0]}">
            </div>
            <div class="projectCard-text">
                <h3>${projectData.title}</h3>
                <p>${projectData.description}</p>
            </div>
        </div>
    `
}

function createButton(buttonName, onClick){
    const button = document.createElement("button");
    button.className = "primary-btn";
    button.textContent = buttonName;
    if (onClick) {
        button.addEventListener("click", onClick);
    }
    return button;
}

// Function to get images HTML for each project
function getImagesHTML(imageslist) {
        return `
        <div class="row g-2">
            ${imageslist.map(image => `
                <div class="popup-image-col col-12 col-md-6 col-lg-4">
                    <img src="${image}" class="img-fluid mx-auto" alt="">
                </div>
            `).join("")}
        </div>
    `;
}


// Function to create a popup for displaying project details
function createPopup(){
    const popupContainer = document.createElement("div");
    popupContainer.className = 'popup-container col-10 col-md-8 col-lg-8 mx-auto';
    popupContainer.id = 'popup-container-id';
    popupContainer.innerHTML = `
        <div class="popup-content">
            <h2 id="popup-title"></h2>
            <p id="popup-details"></p>
            <p id="popup-technology"></p>
            <div id="technology-icons"></div>
            <p id="popup-myRole"></p>
            <div id="popup-images"></div>
        </div>`;

        const closeButton = createButton("Go back", () => {
            popupContainer.classList.remove("show");
            overlay.classList.remove("show");
        });
        closeButton.classList.add("close");
        popupContainer.querySelector(".popup-content").appendChild(closeButton);

    const overlay = document.createElement("div");
    overlay.className = 'popup-overlay';
    overlay.id = 'popup-overlay-id';

    // Close logic
    popupContainer.querySelector(".close").addEventListener("click", () => {
        popupContainer.classList.remove("show");
        overlay.classList.remove("show");
    });

    // Append elements
    document.body.appendChild(overlay);
    document.body.appendChild(popupContainer); 
}


// Function to open a popup with project details
// This function is called when the "Read more" text is clicked
function openPopup(data){
    if (!document.getElementById("popup-container-id")) {
        createPopup();
    }
    const popup = document.getElementById("popup-container-id");
    const overlay = document.getElementById("popup-overlay-id");
    document.getElementById("popup-title").textContent = data.title;
    document.getElementById("popup-details").innerHTML = data.details;
    document.getElementById("popup-technology").innerHTML = data.technology;
    document.getElementById("popup-myRole").innerHTML = data.myRole;

    const imagesPopup = document.getElementById("popup-images");
    imagesPopup.innerHTML = getImagesHTML(data.images);

    const technologyIcons = document.getElementById("technology-icons");
    technologyIcons.innerHTML = getImagesHTML(data.technologyIcons);

    // Reset scroll position
    popup.querySelector(".popup-content").scrollTop = 0; 

    // Show the popup and overlay when the "Read more" text is clicked
    popup.classList.add("show");
    overlay.classList.add("show");
}

function competenceCard(competenceData, containerName){
    const container = document.querySelector(containerName);
    const batchSize = 4;


        competenceData.forEach((data, index) => {
        const columnWrapper = document.createElement("div");
        columnWrapper.className = 'col-lg-3 col-md-6 col-12';

            const competenceCard = document.createElement("div");
            competenceCard.className = 'competenceCard opacity-0';
            competenceCard.innerHTML = competenceCardHTML(data);
            columnWrapper.appendChild(competenceCard);

        container.appendChild(columnWrapper);
        
        if (index < batchSize) {
            competenceCard.classList.remove('opacity-0');
            competenceCard.classList.add('animate__animated', 'animate__fadeInUp');
        }
        });
    fadeOnScroll(batchSize, ".competenceCard");
}

function competenceCardHTML(competenceData){
    return `
        <div class="competenceCard-left"></div>
        <div class="competenceCard-right">
            <img src="${competenceData.image}">
            <h3>${competenceData.title}</h3>
            <p class="competencies-description">${competenceData.competencies}</p>
        </div>
    `
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

    // waitForAnimation();

    if (document.querySelector(".project-data-container")) {
        createProjectCard(contentProjectData, ".project-data-container");
    }

    if (document.querySelector(".work-data-container")) {
        createExperienceData(experienceData, ".work-data-container", ".work-section .section-header"); // Work experience
    }

    if (document.querySelector(".education-data-container")) {
        createExperienceData(educationData, ".education-data-container", ".education-section .section-header"); // Education
    }

    if (document.querySelector(".competencies")){
        competenceCard(contentCompetenciesData, ".competencies");
    }

    if (document.querySelector(".frontpage-projects")){
        createProjectCard(contentProjectData, ".frontpage-projects");
    }

}
