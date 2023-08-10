class Player {
    constructor(){
        this.positionX = 50;
        this.positionY = 0;
        this.width = 30;
        this.height = 10;
        this.domElement = null;

        this.createDomElement();
    }
    createDomElement(){
        // create dom element
        this.domElement = document.createElement("div");

        // set id
        this.domElement.id = "player";
        this.domElement.style.width = this.width + "vw";
        this.domElement.style.height = this.height + "vh";
        this.domElement.style.left = this.positionX + "vw";
        this.domElement.style.bottom = this.positionY + "vh";

        //append to the dom
        const parentElm = document.getElementById("board");
        parentElm.appendChild(this.domElement);
    }
    moveLeft(){
        this.positionX--;
        this.domElement.style.left = this.positionX + "vw";;
    }
    moveRight(){
        this.positionX++;
        this.domElement.style.left = this.positionX + "vw";
    }
}

class Obstacle {
    constructor(){
        this.positionX = 50;
        this.positionY = 100;
        this.width = 30;
        this.height = 10;
        this.domElement = null;
        
        this.createDomElement()
    }
    createDomElement(){
        // create dom element
        this.domElement = document.createElement("div");

        // set id
        this.domElement.className = "obstacle";
        this.domElement.style.width = this.width + "vw";
        this.domElement.style.height = this.height + "vh";
        this.domElement.style.left = this.positionX + "vw";
        this.domElement.style.bottom = this.positionY + "vh";

        //append to the dom
        const parentElm = document.getElementById("board");
        parentElm.appendChild(this.domElement);
    }
    moveDown(){
        this.positionY-=0.1;
        this.domElement.style.bottom = this.positionY + "vh";
    }
    
}

const player = new Player();

const obstacleArry = [];

setInterval(() => {
  const newObstacle = new Obstacle();
  obstacleArry.push(newObstacle);
}, 4000);

setInterval(() => {
  obstacleArry.forEach(function (e) {
    e.moveDown();
    if (
        player.positionX < e.positionX + e.width &&
        player.positionX + player.width > e.positionX &&
        player.positionY < e.positionY + e.height &&
        player.positionY + player.height > e.positionY
    ) {
        // Collision detected!
        console.log("game over my fren! ");
        location.href = "./gameover.html"
    }
  });
}, 1);


document.addEventListener("keydown", (event) => {
  if (event.key === "ArrowLeft") {
    player.moveLeft();
  } else if (event.key === "ArrowRight") {
    player.moveRight();
  }
}); 
