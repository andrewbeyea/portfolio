const projectList = [
    {
        name: "PacMen",
        type: "Course",
        description: "",
        link: "./pages/pacmen/index.html",
        repoLink: "https://github.com/andrewbeyea/PacMen",
        thumbnail: "./images/pacmen.jpg",
    },
    {
        name: "Eyes",
        type: "Course",
        description: "A pair of eyes track the mouse pointer around your screen.",
        link: "./pages/eyes/eyes.html",
        repoLink: "https://github.com/andrewbeyea/eyes",
        thumbnail: "./images/eyes.jpg",
    },
    {
        name: "Real-Time Bus Tracker",
        type: "Course",
        description: "Shows the position of trains on Boston's Red Line T",
        link: "./pages/bustracker/index.html",
        repoLink: "https://github.com/andrewbeyea/Real-Time-Bus-Tracker",
        thumbnail: "./images/bustracker.jpg",
    },
    {
        name: "Slider Puzzle",
        type: "Fun",
        description: "A puzzle game to construct an image from shuffled tiles. Uses arrow key controls.",
        link: "./pages/sliderpuzzle/index.html",
        repoLink: "https://github.com/andrewbeyea/sliderPuzzle",
        thumbnail: "./images/sliderpuzzle.jpg",
    },
]

function fillDropdown(){
    let projectMenu = ""
    for (i=0; i < projectList.length; i++){
        projectMenu +=`<li><a class="dropdown-item" href="${projectList[i].link}">${projectList[i].name}</a></li>`;
    }
    document.getElementById('dropProjects').innerHTML += projectMenu;
}