function dot(width, height, speed) {
  //Picks a random starting coordinate and speed within the bounds given
  this.x = Math.round(Math.random()*width);
  this.y = Math.round(Math.random()*height);
  this.speedX = Math.round(Math.random()*speed-speed/2);
  this.speedY = Math.random(Math.random()*speed-speed/2);
}

function dotGraph() {
  var maxDistance = 300;
  var numDots = 70;

  var canvas = document.getElementById("stage1");
  var stage1;
  var width = window.innerWidth;
  var height = window.innerHeight;
  var dots = [];
  var timer;

  var tick = function () {

    //Paints over old frame
    stage1.fillStyle = "#FFFFFF";
    stage1.rect(0, 0, width, height);
    stage1.fill();

    stage1.fillStyle = "#999999";
    var i=0;
    for (i=0; i<dots.length; i++) {

      //Move dot
      dots[i].x+=dots[i].speedX;
      dots[i].y+=dots[i].speedY;

      //Bounce dot off walls
      if (dots[i].x<0) {
        dots[i].x=0;
        dots[i].speedX *= -1;
      }
      if (dots[i].x>width) {
        dots[i].x=width;
        dots[i].speedX *= -1;
      }
      if (dots[i].y<0) {
        dots[i].y=0;
        dots[i].speedY *= -1;
      }
      if (dots[i].y>height) {
        dots[i].y=height;
        dots[i].speedY *= -1;
      }

      //Draw dot
      stage1.beginPath();
      stage1.arc(dots[i].x,dots[i].y,3,0,2*Math.PI);
      stage1.fill();
    }

    //Calculate distances between every dot
    var distances = [];
    for (i=0; i<dots.length; i++) {
      for (var j=i+1; j<dots.length; j++) {

        //Add the line to the draw list if it's shorter than the specified max distance
        var dist = Math.sqrt(Math.pow(dots[i].x-dots[j].x, 2) + Math.pow(dots[i].y-dots[j].y, 2));
        if (dist <= maxDistance) distances.push([i, j, dist]);
      }
    }

    //Draw the lines
    for (i=0; i<distances.length; i++) {

      //The farther the distance of the line, the less opaque it will be drawn
      stage1.strokeStyle = "rgba(100, 100, 100, " + (maxDistance-distances[i][2])/maxDistance + ")";
      stage1.beginPath();
      stage1.moveTo(dots[distances[i][0]].x, dots[distances[i][0]].y);
      stage1.lineTo(dots[distances[i][1]].x, dots[distances[i][1]].y);
      stage1.stroke();
    }
  };

  var resizeCanvas = function() {
    width = window.innerWidth;
    height = window.innerHeight;
    canvas.width=width;
    canvas.height=height;
    console.log(width + ", " + height);
  };

  window.addEventListener("resize", function () {
    resizeCanvas();
  });

  //Maximize and set up canvas
  resizeCanvas();
  if (canvas.getContext) {
    stage1 = canvas.getContext("2d");

    //Create dots
    for (var i=0; i<numDots; i++) {
      dots.push(new dot(width, height, 3));
    }

    //Set up timed function
    timer=setInterval(tick, 40);
  } else {
    alert("Canvas not supported.");
  }
}

var graph = new dotGraph();