
var max_dimensions = []

const container = document.getElementById('container');

max_dimensions.push(container.offsetWidth, container.offsetHeight)




var ryby = () => {
    ryb1();
    ryb2();
    ryb3();
    ryb4();
}

function ryb1() {


    let fish1 = document.getElementById('fish1');

    fish1_startX = Math.floor(Math.random() * (max_dimensions[0] - 250)) + 1;
    fish1_startY = Math.floor(Math.random() * (max_dimensions[1] - 250)) + 1;

    let dir1_randomX = Math.floor(Math.random() * (3 - 1)) + 1;
    let dir1_randomY = Math.floor(Math.random() * (3 - 1)) + 1;

    if (dir1_randomX == 1) {
        dir1X = "right";
    }
    else if (dir1_randomX == 2) {
        dir1X = "left";
    }

    if (dir1_randomY == 1) {
        dir1Y = "top";
    }
    else if (dir1_randomY == 2) {
        dir1Y = "bottom";
    }

    console.log(dir1_randomX)

    let speed = Math.floor(Math.random() * (2 - 1) + 1);


    fish1.style.left = fish1_startX + "px";
    fish1.style.top = fish1_startY + "px";

    
    

    let flip_left = "rotateY(180deg)"
    let flip_right = "rotateY(0deg)"

    let X_movement = fish1_startX
    let Y_movement = fish1_startY


    let timer = setInterval(function() {


        if (dir1X == "right") {
            X_movement = X_movement + speed;
            fish1.style.transform = flip_left;
            fish1.style.webkitTransform = flip_left;
            fish1.style.msTransform = flip_left;
            
        }
        else if (dir1X == "left") {
            X_movement = X_movement - speed;
            fish1.style.transform = flip_right;
            fish1.style.webkitTransform = flip_right;
            fish1.style.msTransform = flip_right;
            
        }
        

        if ((X_movement + 310) > max_dimensions[0]) {
            dir1X = "left";

        }
        else if (X_movement == 10) {
            dir1X = "right";

        }




        if (dir1Y == "down") {
            Y_movement = Y_movement + speed;
        }
        else if (dir1Y == "top") {
            Y_movement = Y_movement - speed;
        }
        

        if ((Y_movement + 100) > max_dimensions[1]) {
            dir1Y = "top";
        }
        else if (Y_movement == 10) {
            dir1Y = "down";
        }


        fish1.style.left = X_movement + "px";
        fish1.style.top = Y_movement + "px";


    
    }, 1);

    
}


function ryb2() {


    let fish2 = document.getElementById('fish2');

    fish2_startX = Math.floor(Math.random() * (max_dimensions[0] - 250)) + 1;
    fish2_startY = Math.floor(Math.random() * (max_dimensions[1] - 250)) + 1;

    let X_2movement = fish2_startX
    let Y_2movement = fish2_startY


    let speed2 = Math.floor(Math.random() * (2 - 1) + 1);


    fish2.style.left = fish2_startX + "px";
    fish2.style.top = fish2_startY + "px";

    let dir2_randomX = Math.floor(Math.random() * (3 - 1)) + 1;
    let dir2_randomY = Math.floor(Math.random() * (3 - 1)) + 1;

    if (dir2_randomX == 1) {
        dir2X = "right";
    }
    else if (dir2_randomX == 2) {
        dir2X = "left";
    }

    if (dir2_randomY == 1) {
        dir2Y = "top";
    }
    else if (dir2_randomY == 2) {
        dir2Y = "bottom";
    }

    let flip_left = "rotateY(180deg)"
    let flip_right = "rotateY(0deg)"


    let timer = setInterval(function() {


        if (dir2X == "right") {
            X_2movement = X_2movement + speed2;
            fish2.style.transform = flip_left;
            fish2.style.webkitTransform = flip_left;
            fish2.style.msTransform = flip_left;
            
        }
        else if (dir2X == "left") {
            X_2movement = X_2movement - speed2;
            fish2.style.transform = flip_right;
            fish2.style.webkitTransform = flip_right;
            fish2.style.msTransform = flip_right;
            
        }
        

        if ((X_2movement + 310) > max_dimensions[0]) {
            dir2X = "left";

        }
        else if (X_2movement == 10) {
            dir2X = "right";

        }




        if (dir2Y == "down") {
            Y_2movement = Y_2movement + speed2;
        }
        else if (dir2Y == "top") {
            Y_2movement = Y_2movement - speed2;
        }
        

        if ((Y_2movement + 100) > max_dimensions[1]) {
            dir2Y = "top";
        }
        else if (Y_2movement == 10) {
            dir2Y = "down";
        }


        fish2.style.left = X_2movement + "px";
        fish2.style.top = Y_2movement + "px";


    
    }, 1);

    
}

function ryb3() {


    let fish3 = document.getElementById('fish3');

    fish3_startX = Math.floor(Math.random() * (max_dimensions[0] - 250)) + 1;
    fish3_startY = Math.floor(Math.random() * (max_dimensions[1] - 250)) + 1;

    let X_3movement = fish3_startX
    let Y_3movement = fish3_startY
    

    let speed3 = Math.floor(Math.random() * (2 - 1) + 1);


    fish3.style.left = fish3_startX + "px";
    fish3.style.top = fish3_startY + "px";

    let dir3_randomX = Math.floor(Math.random() * (3 - 1)) + 1;
    let dir3_randomY = Math.floor(Math.random() * (3 - 1)) + 1;

    console.log(dir3_randomX, dir3_randomY)

    if (dir3_randomX == 1) {
        dir3X = "right";
    }
    else if (dir3_randomX == 2) {
        dir3X = "left";
    }

    if (dir3_randomY == 1) {
        dir3Y = "top";
    }
    else if (dir3_randomY == 2) {
        dir3Y = "bottom";
    }

    let flip_left = "rotateY(0deg)"
    let flip_right = "rotateY(180deg)"


    let timer = setInterval(function() {


        if (dir3X == "right") {
            X_3movement = X_3movement + speed3;
            fish3.style.transform = flip_left;
            fish3.style.webkitTransform = flip_left;
            fish3.style.msTransform = flip_left;
            
        }
        else if (dir3X == "left") {
            X_3movement = X_3movement - speed3;
            fish3.style.transform = flip_right;
            fish3.style.webkitTransform = flip_right;
            fish3.style.msTransform = flip_right;
            
        }
        

        if ((X_3movement + 310) > max_dimensions[0]) {
            dir3X = "left";

        }
        else if (X_3movement == 10) {
            dir3X = "right";

        }




        if (dir3Y == "down") {
            Y_3movement = Y_3movement + speed3;
        }
        else if (dir3Y == "top") {
            Y_3movement = Y_3movement - speed3;
        }
        

        if ((Y_3movement + 100) > max_dimensions[1]) {
            dir3Y = "top";
        }
        else if (Y_3movement == 10) {
            dir3Y = "down";
        }


        fish3.style.left = X_3movement + "px";
        fish3.style.top = Y_3movement + "px";


    
    }, 1);

    
}


function ryb4() {


    let fish4 = document.getElementById('fish4');

    fish4_startX = Math.floor(Math.random() * (max_dimensions[0] - 250)) + 1;
    fish4_startY = Math.floor(Math.random() * (max_dimensions[1] - 250)) + 1;

    let X_4movement = fish4_startX
    let Y_4movement = fish4_startY
    

    let speed4 = Math.floor(Math.random() * (2 - 1) + 1);


    fish4.style.left = fish4_startX + "px";
    fish4.style.top = fish4_startY + "px";

    let dir4_randomX = Math.floor(Math.random() * (3 - 1)) + 1;
    let dir4_randomY = Math.floor(Math.random() * (3 - 1)) + 1;

    if (dir4_randomX == 1) {
        dir4X = "right";
    }
    else if (dir4_randomX == 2) {
        dir4X = "left";
    }

    if (dir4_randomY == 1) {
        dir4Y = "top";
    }
    else if (dir4_randomY == 2) {
        dir4Y = "bottom";
    }

    let flip_left = "rotateY(0deg)"
    let flip_right = "rotateY(180deg)"


    let timer = setInterval(function() {


        if (dir4X == "right") {
            X_4movement = X_4movement + speed4;
            fish4.style.transform = flip_left;
            fish4.style.webkitTransform = flip_left;
            fish4.style.msTransform = flip_left;
            
        }
        else if (dir4X == "left") {
            X_4movement = X_4movement - speed4;
            fish4.style.transform = flip_right;
            fish4.style.webkitTransform = flip_right;
            fish4.style.msTransform = flip_right;
            
        }
        

        if ((X_4movement + 310) > max_dimensions[0]) {
            dir4X = "left";

        }
        else if (X_4movement == 10) {
            dir4X = "right";

        }




        if (dir4Y == "down") {
            Y_4movement = Y_4movement + speed4;
        }
        else if (dir4Y == "top") {
            Y_4movement = Y_4movement - speed4;
        }
        

        if ((Y_4movement + 100) > max_dimensions[1]) {
            dir4Y = "top";
        }
        else if (Y_4movement == 10) {
            dir4Y = "down";
        }


        fish4.style.left = X_4movement + "px";
        fish4.style.top = Y_4movement + "px";


    
    }, 1);

    
}


