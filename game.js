var canvas = document.getElementById("thing");
var clear = document.getElementById("clear");
var stopv = document.getElementById("Stop");
var grow = document.getElementById("grow");
var screen = document.getElementById("screen");
var r = 0;
var t = 0;
var z = 1;
var x = Math.random()*459 + 20;
var y = Math.random()*459 + 20;
var dx = 5;
var dy = 6;
var requestID;
var timer;
var circle;
var timerscreen;



var drawcirc = function(){
    t = 1;
    circle = document.getElementsByTagName("circle");
    circle = circle[0]
    circle.setAttribute("r", r);
    if(r<250 && z == 1){
        r++;
    }
    if(r == 250){
       z = 0
    }
    if(z == 0){
        r--
    }
    if(r == 1){
        z = 1
    }
}

var drawcircleint = function(){
    if(timerscreen && !timer){
        clearcan()
        timerscreen = undefined;
    }
    grow.setAttribute("disabled", "disabled"); 
    if(t == 0){
        var circle = document.createElementNS("http://www.w3.org/2000/svg", "circle")
        canvas.appendChild(circle)
        circle.setAttribute("fill", "red");
        circle.setAttribute("cx", 250);
        circle.setAttribute("cy", 250);
        
    }
    console.log(circle)
    timer = setInterval(drawcirc , 17);

}

var screensaver = function(){
    t=1;
    circle = document.getElementsByTagName("circle");
    circle = circle[0]
    circle.setAttribute("cx", x);
    circle.setAttribute("cy", y);
    if(x>480 || x<20){
        dx = -dx;
    }
    if(y>480 || y<20){
       dy = -dy;
    }
    x += dx;
    y += dy;

}

var drawscreensaver = function(){
    if(timer && !timerscreen){
        clearcan()
        timer = undefined;
    }
    screen.setAttribute("disabled", "disabled"); 
    if(t==0){
        circle = document.createElementNS("http://www.w3.org/2000/svg", "circle")
        canvas.appendChild(circle)
        circle.setAttribute("r", 20);
        circle.setAttribute("fill", "red");
    }
    timerscreen = setInterval(screensaver , 17);

}

var clearcan = function(){
    stop()
    t = 0;
    canvas.innerHTML = "";
    r = 0;
    z = 1;
    var x = Math.random()*459 + 20;
    var y = Math.random()*459 + 20;
    dx = 5;
    dy = 6;
}

var stop = function(){
    clearInterval(timer)
    clearInterval(timerscreen)
    grow.removeAttribute("disabled");
    screen.removeAttribute("disabled");
}



stopv.addEventListener("click", stop);
clear.addEventListener("click", clearcan);
grow.addEventListener("click", drawcircleint);
screen.addEventListener("click", drawscreensaver);