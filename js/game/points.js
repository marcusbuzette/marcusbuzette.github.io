class Pontuation {
  constructor() {
    this.points = 0; 
    this.textSize = 50;
  }
  
  show() {
    fill('#fff')
    textSize(50)
    text(parseInt(this.points), 50, 50)
  }
  
  addPoints () {
    this.points += 0.05
  }
}