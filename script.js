const projectListJSON = [
    {
        name: "PacMen",
        type: "Course",
        description: "An unlimited number of animated PacMen chase each other around the window.<br>Uses the DOM and arrays to iterate through all objects created by the user, updating positions and reversing the direction and animation when each image is about to exceed the space of the window.",
        link: "./pages/pacman/index.html",
        repoLink: "https://github.com/andrewbeyea/PacMen",
        thumbnail: "./images/pacmen.jpg",
    },
    {
        name: "Eyes",
        type: "Course",
        description: "A pair of eyes track the mouse pointer around your screen.<br>Uses the Event Listener to track inputs from the mouse and translates the mouse position to an offset of the pupils.",
        link: "./pages/eyes/eyes.html",
        repoLink: "https://github.com/andrewbeyea/eye-exercise",
        thumbnail: "./images/eyes.jpg",
    },
    {
        name: "Real-Time Bus Tracker",
        type: "Course",
        description: "Shows the position of trains on Boston's Red Line T.<br>Uses the MBTA API to extract live data in JSON format about the city's transportation system.<br>The map updates on a 30 second refresh and identifies the train number and direction so users can see how far away is the next available train.",
        link: "./pages/bustracker/index.html",
        repoLink: "https://github.com/andrewbeyea/Real-Time-Bus-Tracker",
        thumbnail: "./images/bustracker.jpg",
    },
    {
        name: "Towers of Hanoi",
        type: "Course",
        description: "Recursive programming demo to solve the classic Towers of Hanoi problem. Moves n'rings' from tower 1 to tower 3 and provides step-by-step logging of the actions taken.",
        link: "./pages/hanoi/index.html",
        repoLink: "https://github.com/andrewbeyea/hanoi",
        thumbnail: "./images/hanoi.jpg",
    },
    {
        name: "Formik Form",
        type: "Course",
        description: "Form validation demonstration using Formik toolchain. Requires email and user name to include symbols @ and . Shows error data on each line for any errors in the data provided.",
        link: "./pages/formik-form/index.html",
        repoLink: "https://github.com/andrewbeyea/formik-form",
        thumbnail: "./images/formik-form.jpg",
    },    
    {
        name: "To-Do List",
        type: "Course",
        description: "React form for a to-do list.<br>Lines can be added by pressing enter after typing in the text box.<br>Lines can be removed by clicking on the item.",
        link: "./pages/todo-list/index.html",
        repoLink: "https://github.com/andrewbeyea/todo-list",
        thumbnail: "./images/todo-list.jpg",
    },
    {
        name: "Slider Puzzle",
        type: "Fun",
        description: "A puzzle game to construct an image from shuffled tiles. Uses arrow key controls.<br>Press the Shuffle button to begin the game. When the tiles are arrayed correctly, the game returns the number of turns taken in a dialog box.",
        link: "./pages/sliderpuzzle/index.html",
        repoLink: "https://github.com/andrewbeyea/sliderPuzzle",
        thumbnail: "./images/sliderpuzzle.jpg",
    },
]

function fillProjects(){
    let projectList = ""
    for (i=0; i < projectListJSON.length; i++){
        projectList +=`
            <div class="content-sub-project" style="display:flex">
            <div class="project-left" style="flex: 5">
                <h2>${projectListJSON[i].name}</h2>
                ${projectListJSON[i].description}
            </div>
            <div class="project-right">
                <img class="project-pic" src=${projectListJSON[i].thumbnail}><br>
                <a class="body-link" href="${projectListJSON[i].repoLink}">Browse the Repo on GitHub</a>
            </div>                       
            </div>
            <br>
        `;
    }
    document.getElementById('content').innerHTML += projectList;
}
