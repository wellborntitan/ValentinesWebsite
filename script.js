var canvas = document.getElementById("starfield");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

var context = canvas.getContext("2d");
var stars = 500;
var colorrange = [0, 60, 240];
var starArray = [];

function getRandom(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Initialize stars with random opacity values
for (var i = 0; i < stars; i++) {
    var x = Math.random() * canvas.offsetWidth;
    var y = Math.random() * canvas.offsetHeight;
    var radius = Math.random() * 1.2;
    var hue = colorrange[getRandom(0, colorrange.length - 1)];
    var sat = getRandom(50, 100);
    var opacity = Math.random();
    starArray.push({ x, y, radius, hue, sat, opacity });
}

var frameNumber = 0;
var opacity = 0;
var secondOpacity = 0;
var thirdOpacity = 0;

var baseFrame = context.getImageData(0, 0, window.innerWidth, window.innerHeight);

function drawStars() {
    for (var i = 0; i < stars; i++) {
        var star = starArray[i];

        context.beginPath();
        context.arc(star.x, star.y, star.radius, 0, 360);
        context.fillStyle = "hsla(" + star.hue + ", " + star.sat + "%, 88%, " + star.opacity + ")";
        context.fill();
    }
}

function updateStars() {
    for (var i = 0; i < stars; i++) {
        if (Math.random() > 0.99) {
            starArray[i].opacity = Math.random();
        }
    }
}

const button = document.getElementById("valentinesButton");

button.addEventListener("click", () => {
  button.textContent = "I love you too! 💕";
  setTimeout(() => {
    window.location.href = "valentine-repo/index.html";
  }, 500);
});

function drawTextWithLineBreaks(lines, x, y, fontSize, lineHeight) {
    lines.forEach((line, index) => {
        context.fillText(line, x, y + index * (fontSize + lineHeight));
    });
}

function drawText() {
    var fontSize = Math.min(30, window.innerWidth / 24); // Adjust font size based on screen width
    var lineHeight = 8;

    context.font = fontSize + "px Comic Sans MS";
    context.textAlign = "center";
    
    // glow effect
    context.shadowColor = "rgba(45, 45, 255, 1)";
    context.shadowBlur = 8;
    context.shadowOffsetX = 0;
    context.shadowOffsetY = 0;

    if(frameNumber < 190){
        context.fillStyle = `rgba(45, 45, 255, ${opacity})`;
        context.fillText("everyday day I cannot believe how lucky I am", canvas.width/2, canvas.height/2);
        opacity = opacity + 0.01;
    }
    //fades out the text by decreasing the opacity
    if(frameNumber >= 190 && frameNumber < 440){
        context.fillStyle = `rgba(45, 45, 255, ${opacity})`;
        context.fillText("everyday day I cannot believe how lucky I am", canvas.width/2, canvas.height/2);
        opacity = opacity - 0.01;
    }

    //needs this if statement to reset the opacity before next statement on canvas
    if(frameNumber == 440){
        opacity = 0;
    }
    if(frameNumber > 440 && frameNumber < 690){
        context.fillStyle = `rgba(45, 45, 255, ${opacity})`;

        if (window.innerWidth < 600) {           //shortens long sentence for mobile screens
            drawTextWithLineBreaks(["amongst trillions and trillions of stars,", "over billions of years"], canvas.width / 2, canvas.height / 2, fontSize, lineHeight);
        } else {
            context.fillText("amongst trillions and trillions of stars, over billions of years", canvas.width/2, canvas.height/2);
        }

        opacity = opacity + 0.01;
    }
    if(frameNumber >= 690 && frameNumber < 940){
        context.fillStyle = `rgba(45, 45, 255, ${opacity})`;
        
        if (window.innerWidth < 600) {
            drawTextWithLineBreaks(["amongst trillions and trillions of stars,", "over billions of years"], canvas.width / 2, canvas.height / 2, fontSize, lineHeight);
        } else {
            context.fillText("amongst trillions and trillions of stars, over billions of years", canvas.width/2, canvas.height/2);
        }

        opacity = opacity - 0.01;
    }

    if(frameNumber == 940){
        opacity = 0;
    }
    if(frameNumber > 940 && frameNumber < 1190){
        context.fillStyle = `rgba(45, 45, 255, ${opacity})`;
        context.fillText("to be alive, and to get to spend this life with you", canvas.width/2, canvas.height/2);
        opacity = opacity + 0.01;
    }
    if(frameNumber >= 1190 && frameNumber < 1440){
        context.fillStyle = `rgba(45, 45, 255, ${opacity})`;
        context.fillText("to be alive, and to get to spend this life with you", canvas.width/2, canvas.height/2);
        opacity = opacity - 0.01;
    }

    if(frameNumber == 1440){
        opacity = 0;
    }
    if(frameNumber > 1440 && frameNumber < 1690){
        context.fillStyle = `rgba(45, 45, 255, ${opacity})`;
        context.fillText("is so incredibly, unfathomably unlikely", canvas.width/2, canvas.height/2);
        opacity = opacity + 0.01;
    }
    if(frameNumber >= 1690 && frameNumber < 1940){
        context.fillStyle = `rgba(45, 45, 255, ${opacity})`;
        context.fillText("is so incredibly, unfathomably unlikely", canvas.width/2, canvas.height/2);
        opacity = opacity - 0.01;
    }

    if(frameNumber == 1940){
        opacity = 0;
    }
    if(frameNumber > 1940 && frameNumber < 2190){
        context.fillStyle = `rgba(45, 45, 255, ${opacity})`;

        if (window.innerWidth < 600) {
            drawTextWithLineBreaks(["and yet here I am to get the impossible", "chance to get to know you"], canvas.width / 2, canvas.height / 2, fontSize, lineHeight);
        } else {
            context.fillText("and yet here I am to get the impossible chance to get to know you", canvas.width/2, canvas.height/2);
        }

        opacity = opacity + 0.01;
    }
    if(frameNumber >= 2190 && frameNumber < 2440){
        context.fillStyle = `rgba(45, 45, 255, ${opacity})`;

        if (window.innerWidth < 600) {
            drawTextWithLineBreaks(["and yet here I am to get the impossible", "chance to get to know you"], canvas.width / 2, canvas.height / 2, fontSize, lineHeight);
        } else {
            context.fillText("and yet here I am to get the impossible chance to get to know you", canvas.width/2, canvas.height/2);
        }
        
        opacity = opacity - 0.01;
    }

    if(frameNumber == 2440){
        opacity = 0;
    }
    if(frameNumber > 2440 && frameNumber < 99999){
        context.fillStyle = `rgba(45, 45, 255, ${opacity})`;

        if (window.innerWidth < 600) {
            drawTextWithLineBreaks(["I love you so much Divyanjali Santosh Singh, more than", "all the time and space in the universe"], canvas.width / 2, canvas.height / 2, fontSize, lineHeight);
        } else {
            context.fillText("I love you so much Divyanjali Santosh Singh, more than all the time and space in the universe", canvas.width/2, canvas.height/2);
        }

        opacity = opacity + 0.01;
    }
    
    if(frameNumber >= 2690 && frameNumber < 99999){
        context.fillStyle = `rgba(45, 45, 255, ${secondOpacity})`;


        if (window.innerWidth < 600) {
            drawTextWithLineBreaks(["can contain and I can't wait to spend all the time in", "the world to share that love with you!"], canvas.width / 2, (canvas.height/2 + 60), fontSize, lineHeight);
        } else {
            context.fillText("can contain and I can't wait to spend all the time in the world to share that love with you!", canvas.width/2, (canvas.height/2 + 50));
        }

        secondOpacity = secondOpacity + 0.01;
    }

    if(frameNumber >= 2940 && frameNumber < 99999){
        context.fillStyle = `rgba(45, 45, 255, ${thirdOpacity})`;
        context.fillText("Happy Valentine's Day Divu <3", canvas.width/2, (canvas.height/2 + 120));
        thirdOpacity = thirdOpacity + 0.01;

        button.style.display = "block";
    }   

     // Reset the shadow effect after drawing the text
     context.shadowColor = "transparent";
     context.shadowBlur = 0;
     context.shadowOffsetX = 0;
     context.shadowOffsetY = 0;
}

function draw() {
    context.putImageData(baseFrame, 0, 0);

    drawStars();
    updateStars();
    drawText();

    if (frameNumber < 99999) {
        frameNumber++;
    }
    window.requestAnimationFrame(draw);
}

window.addEventListener("resize", function () {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    baseFrame = context.getImageData(0, 0, window.innerWidth, window.innerHeight);
});

window.requestAnimationFrame(draw);
