var pos = 0;
const pacArray = [
    ['./images/PacMan1.png', './images/PacMan2.png'],
    ['./images/PacMan3.png', './images/PacMan4.png']
];
var direction = 0;
const pacMen = []; // This array holds all the pacmen

function setToRandom(scale) {
    // returns random x and y values scaled to an input
    return {
        x: Math.random() * scale,
        y: Math.random() * scale
    }
}
// Factory to make a PacMan at a random position with random velocity
function makePac() {
    let velocity = setToRandom(10); // velocity.x and velocity.y scaled to 10
    let position = setToRandom(200); // position.x and position.y scaled to 200
    // buffer position by 15 from the edge
    position.x += 15;
    position.y += 15;
    let xDir = 0; //set default animation direction (left to right)
    let animationStep = 0; // set default animation step (1 of 2)
    // Add image to div id = game
    let game = document.getElementById('game');
    let newimg = document.createElement('img');
    newimg.style.position = 'absolute';
    newimg.src = pacArray[xDir][animationStep];
    newimg.width = 100;

    // add new Child image to game
    game.appendChild(newimg);
    // return details in an object
    return{
        position,
        velocity,
        xDir,
        animationStep,
        // styles go in newimg
        newimg
    }
}

function update() {
    //loop over pacmen array and move each one and move image in DOM
    pacMen.forEach((item) => {
        
        // alternate animation step at each update
        item.animationStep = (item.animationStep + 1) % 2;
        item.position.x += item.velocity.x;
        item.position.y += item.velocity.y;
        item.newimg.style.left = item.position.x;
        item.newimg.style.top = item.position.y;
        // update image to reflect the current xDir and animationStep
        item.newimg.src = pacArray[item.xDir][item.animationStep]
        checkCollisions(item);
      });
      setTimeout(update, 100); //slowed down from 20 for better animation
}

function checkCollisions(item) {
    if(item.position.x +115 >= window.innerWidth || item.position.x -10 <= 0) {
        item.velocity.x *= -1;
        // reverse animation when item contacts the window edge to 
        item.xDir = (item.xDir + 1) % 2;
      };
      if(item.position.y + 115 >= window.innerHeight || item.position.y -10 <= 0) {
        item.velocity.y *= -1
      };
}

function makeOne() {
    pacMen.push(makePac()); // add a new PacMan
}