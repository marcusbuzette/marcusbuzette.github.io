class Platform {
  constructor(posX, posY, platHeight, width, speed) {
    this.posX = posX;
    this.posY = height - platHeight + 10;
    this.height = platHeight;
    this.width = width;
    this.speed = speed;
    this.precisionH = 0.1
    this.precisionW = 0.2
    this.showScreen = true;
  }
  
  show() {
    image(tronco, this.posX, this.posY, this.width,this.height)
    // rect(this.posX, this.posY, this.height, this.width)
  }
  
  debug() {
    noFill();
    rect(this.posX + this.width*this.precisionW,
         this.posY + this.height*this.precisionH,
         this.width - this.width * this.precisionW,
         this.height - this.height * this.precisionH)
  }
  
  move() {
    this.posX -= this.speed;
    if (this.posX + this.width < -30) {
      this.showScreen = false;
    }
  }
}