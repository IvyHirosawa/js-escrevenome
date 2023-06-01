function setup() {
    createCanvas(600, 600);
     background("lightPink");
  }
  
  function draw() {
    
    stroke ("black");
    fill ("white");
    
    // console.log(mouseIsPressed);
    
    if (mouseIsPressed){
      circle (mouseX, mouseY, 20, 35);
    }
  }
  
