// Array of objects containing work experience data
export const experienceData = [
    {
        title: "Student Assistant",
        company: " - Dataproces",
        period: "June 2023 - ",
        details: [
            "Created user-friendly SaaS-solutions for the Danish municipalities to ease the workload.",
            "Involved in the full development process from idea to final product",
            "Used research to optimize the user experience on new and existing SaaS-solutions.",
            "Designed high-fidelity prototypes in Figma for both presentation and development purpose.",
            "Coded UI elements using HTML, CSS, and JavaScript.",
            "Created flyers, roll-ups and financial reports using Illustrator, InDesign, and Photoshop."
        ]
    },

    {
        title: "Student Assistant",
        company: " - AAU Student Guidance",
        period: "June 2022 - June 2023",
        details: [
            "Updated website content using Umbraco CMS",
            "Used Illustrator, InDesign, Premiere Pro, and Photoshop to create visual elements for commercial purposes.",
            "Created content for social media using Adobe InDesign, Premiere Pro and Canva."
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
export const educationData = [
    {
        title: "Master's Degree, Interaction Design",
        company: "Aalborg University",
        period: "September 2023 - June 2025",
        detailsTitle: "Master's Degree, Interaction Design",
        details: [
            "<strong>Master thesis</strong>: Created an gamified application to improve mental health among young adults. For this project in-depth research regarding young adults mental health and possible solutions was conducted, including interviews with experts within the field. Based on this a high-fidelity prototype was developed using Godot Game engine, afterwards a one-week user study was conducted to evaluate the solution.",
            "Gained strong skills in researching, analyzing, and problem solving different cases.",
            "Specialized in user involvement and the design of innovative user-friendly solutions with a focus on functionality and accessibility."
        ]
    },
    
    {
        title: "Bachelor's Degree, Interaction Design",
        company: "Aalborg University",
        period: "September 2020 - June 2023",
        detailsTitle: "Bachelor's Degree, Interaction Design",
        details: [
            "Gained technical understanding and practical experience with HTML, CSS, C, and C# for developing functional prototypes and interactive solutions.",
            "Focused on designing digital solutions with high usability and aesthetics.",
            "Worked intensively with user involvement through qualitative methods such as user testing and interviews, as well as quantitative surveys."
        ]
    },
];

// Array of objects containing project data
export const projectData = [
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

// Array of objects containing competencies data
export const competenciesData = [
    {
        title: "User Research",
        competencies: "Interviews | Usability testing | Workshops| Surveys | User Stories",
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

//OBS do not use this one right now!!!!!!!!!!!!
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