let fish1 = document.getElementById('f1');

var max_dimensions = []

const container = document.getElementById('container');

max_dimensions.push(container.offsetWidth, container.offsetHeight)

console.log(fish1.offsetLeft);

console.log(max_dimensions)

fish_startX = Math.floor(Math.random() * (max_dimensions[0] - 250)) + 1;
fish_startY = Math.floor(Math.random() * (max_dimensions[1] - 250)) + 1;

var speed = Math.floor(Math.random() * (2 - 1) + 1);

console.log(speed)

fish1.style.left = fish_startX + "px";
fish1.style.top = fish_startY + "px";

dirX = "right";
dirY = "top";

var flip_left = "rotateY(180deg)"
var flip_right = "rotateY(0deg)"

var ryby = () => {
    var X_movement = fish_startX
    var Y_movement = fish_startY

    


    var timer = setInterval(function() {
        console.log(X_movement)
        console.log(Y_movement)


        if (dirX == "right") {
            X_movement = X_movement + speed;
            fish1.style.transform = flip_left;
            fish1.style.webkitTransform = flip_left;
            fish1.style.msTransform = flip_left;
            
        }
        else if (dirX == "left") {
            X_movement = X_movement - speed;
            fish1.style.transform = flip_right;
            fish1.style.webkitTransform = flip_right;
            fish1.style.msTransform = flip_right;
            
        }
        

        if ((X_movement + 310) > max_dimensions[0]) {
            dirX = "left";

        }
        else if (X_movement == 10) {
            dirX = "right";

        }




        if (dirY == "down") {
            Y_movement = Y_movement + speed;
        }
        else if (dirY == "top") {
            Y_movement = Y_movement - speed;
        }
        

        if ((Y_movement + 100) > max_dimensions[1]) {
            dirY = "top";
        }
        else if (Y_movement == 10) {
            dirY = "down";
        }


        fish1.style.left = X_movement + "px";
        fish1.style.top = Y_movement + "px";


    
    }, 1);

    
}

