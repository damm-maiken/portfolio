
// Array of objects containing work experience data
const contentWorkData = [
    {
        title: "Student Worker",
        company: "Dataproces",
        period: "June 2023 - ",
        detailsTitle: "Student Worker at Dataproces",
        details: "As a Student Worker at Dataproces I have been part of a concept development process - from the first idea to the final product. My main responsibility was to create mock ups using Figma, used by developers. I also contributed to development process by writing HTML and CSS code."
    },

    {
        title: "Student Worker",
        company: "AAU Student Guidance",
        period: "June 2022 - June 2023",
        detailsTitle: "Student Worker at AAU Student Guidance",
        details: "At AAU Student Guidance I had various tasks, which included updating websites using Umbraco. I did also create content for social media using Adobe InDesign, Premiere Pro and Canva."
    },

    {
        title: "Student Worker",
        company: "Agri Nord",
        period: "October 2020 - April 2021",
        detailsTitle: "Student Worker at Agri Nord",
        details: "As a Student Worker at Agri Nord were I involved in redesigning their website and afterwards porting the sites from Ultimize to Wordpress."
    },

];

// Array of objects containing education data
const contentSchoolData = [
    {
        title: "Master's Degree, Interaction Design",
        company: "Aalborg University",
        period: "September 2023 - June 2025",
        detailsTitle: "Master's Degree, Interaction Design",
        details: "During the master at Interaction Design I have worked further on the competencies from bachelor, but as an add on I have worked with the academic aspect as well, which include a more in depth understanding of various problems."
    },
    
    {
        title: "Bachelor's Degree, Interaction Design",
        company: "Aalborg University",
        period: "September 2020 - June 2023",
        detailsTitle: "Bachelor's Degree, Interaction Design",
        details: "At my Bachelor’s Degree at Interaction Design I have worked with prototyping, user test, and various programming languages."
    },

    {
        title: "HHX",
        company: "Aalborg Handelskole, Turøgade",
        period: "August 2014 - June 2017",
        detailsTitle: "HHX",
        details: "My high school is a HHX from Aalborg Handelskole, Turøgade."
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
        title: "Master's thesis",
        description: "A gamified application for supporting mental health and structure among young adults",
        imagesStyle: "side-by-side",
        images: ["Images/Mindly_frontpage.png", "Images/Mindly_calendar.png", "Images/Mindly_calendar.png"],
        longDescription: "This is a longer description of the project"

    },
    {
        title: "Design thinking atlas",
        description: "Description of Design thinking atlas",
        technology: ["Figma", "HTML", "CSS", "React", "Company collaboration"],
        imagesStyle: "diagonal",
        images: ["Images/Mindly_frontpage.png"],
        longDescription: "This is a longer description of the DT"
    },
];


function createWorkCard(workData, containerName){
    // Find the HTML container
    const container = document.querySelector(containerName);
    console.log("container found", container);

    // Loop through the data array and create a div for each object
    workData.forEach(data => {
    const content = document.createElement("div");
    content.className = 'work-data-div';
    
    content.innerHTML = `
        <h1>${data.detailsTitle}</h1>
        <p>${data.details}</p>`
    
    // Append the content to the container
    container.appendChild(content);
    });
    
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
            <p id="popup-description"></p>
            <button class="close primary-btn">Go back</button>
        </div>`;

    popupContainer.querySelector(".close").addEventListener("click", () => {
        popupContainer.classList.remove("show");
    })
    document.body.appendChild(popupContainer); 

    // Loop through the project data array and create a div for each object
    projectData.forEach(data => { 
        // Make the technology into a list of HTML elements 
        //const technologyList = data.technology.map(elements => `<li>${elements}</li>`).join("");
         // Convert images into HTML elements so they can be added
        const imagesList = data.images.map(image => `<img src="${image}">`).join("");

        // Create a div for each project
        const projectContainer = document.createElement("div");
        projectContainer.className = 'project-container';

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
                        contentContainer.innerHTML = `
                            <div">${imagesList}</div>`;
                    rightSide.appendChild(contentContainer);

                    //Create container for icon and text
                    const iconContainer = document.createElement("div");
                    iconContainer.className = 'readMore-container';
                        // Create the read more text and arrow icon                    
                        const readMore = document.createElement("p");
                        readMore.className = 'popup';
                        readMore.textContent = "Read more";

                        const arrowIcon = document.createElement("i");
                        arrowIcon.className = 'fa-solid fa-arrow-right';

                    // Append the read more text and arrow icon to the icon container
                    iconContainer.appendChild(readMore);
                    iconContainer.appendChild(arrowIcon);

                    // Add an event listener to the icon container to open the popup
                    // when clicked, passing the project data to the openPopup function
                    iconContainer.addEventListener("click", ()=> openPopup(data));
                    rightSide.appendChild(iconContainer);
                
                projectContainer.appendChild(rightSide);
    
    // Append the project container to the main container
    container.appendChild(projectContainer);
    });
}

// Function to open a popup with project details
// This function is called when the "Read more" text is clicked
function openPopup(data){
    const popup = document.getElementById("popup-container-id");
    document.getElementById("popup-title").textContent = data.title;
    document.getElementById("popup-description").textContent = data.longDescription;
    popup.classList.add("show");
}

// 

function loadNavbar() {
    fetch("navbar.html") // Load the navbar file
        .then(response => response.text()) // Convert response to text (HTML)
        .then(data => {
            document.getElementById("navbar-container").innerHTML = data; // Insert into the page
        })
        .catch(error => console.error("Error loading navbar:", error));
}


// Function to load the JS function so they can be used in HTML
window.onload = function () {
    // Load the navbar
    loadNavbar();

    if (document.querySelector(".work-data-container")) {
        createWorkCard(contentWorkData, ".work-data-container"); // Work experience
    }

    if (document.querySelector(".project-data-container")) {
        createProjectData(contentProjectData, ".project-data-container");
    }

}