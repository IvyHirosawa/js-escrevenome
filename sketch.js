function setup() {
    createCanvas(600, 600);
     background("lightBlue");
  }
  
  function draw() {
    
    stroke ("black");
    fill ("white");
    
    // console.log(mouseIsPressed);
    
    if (mouseIsPressed){
      circle (mouseX, mouseY, 20, 35);
    }
  }
  
