import { experienceData } from "./data.js";
import { educationData } from "./data.js";
import { projectData } from "./data.js";
import { competenciesData } from "./data.js";


function createExperienceData(experiences, containerName){
    const container = document.querySelector(containerName);

    experiences.forEach((experience) => {
        const accordionItem = document.createElement("div");
        accordionItem.className = 'accordion-item col-lg-10';
        accordionItem.insertAdjacentHTML('beforeend', getAccordionItemHTML(experience));

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
                ${data.details.map(bullet => `<li>${bullet}</li>`).join("")}
            </ul>
        </div>
    `;
}

function displayContent() {
    const content = this.nextElementSibling; //This is the content for the accordion 
    const chevron = this.querySelector('i');
    content.classList.toggle('open');      // Adds/removes class open to accordion content when it is clicked
    chevron.classList.toggle('rotate');    // Adds/removes the class rotate to the chevron when clicked
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
function getImagesHTML(images) {
        return `
        <div class="row g-2">
            ${images.map(image => `
                <div class="popup-image-col col-12 col-md-6 col-lg-4">
                    <img src="${image}" class="img-fluid mx-auto" alt="">
                </div>
            `).join("")}
        </div>
    `;
}

function getTechnologyIconsHTML(icons) {
    return `
        <div class="technology-icons-row">
            ${icons.map(icon => `<img src="${icon}" class="technology-icon">`).join("")}
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
    technologyIcons.innerHTML = getTechnologyIconsHTML(data.technologyIcons);

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
        createProjectCard(projectData, ".project-data-container");
    }

    if (document.querySelector(".work-data-container")) {
        createExperienceData(experienceData, ".work-data-container", ".work-section .section-header"); // Work experience
    }

    if (document.querySelector(".education-data-container")) {
        createExperienceData(educationData, ".education-data-container", ".education-section .section-header"); // Education
    }

    if (document.querySelector(".competencies")){
        competenceCard(competenciesData, ".competencies");
    }

    if (document.querySelector(".frontpage-projects")){
        createProjectCard(projectData, ".frontpage-projects");
    }

}
