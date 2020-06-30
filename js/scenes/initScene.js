class InitScene {
  constructor() {
  }
  
  setup() {
    buttons.push(new Button('Jogar', width/2 , height/2, 'preGame'))
    buttons.push(new Button('Ranking', width/2 , height/2 + 75, 'scoreboard'))
    buttons.push(new Button('Controles', width/2 , height/2 + 150, 'controls'))
    buttons.push(new Button('Creditos', width/2 , height/2 + 225, 'credits'))
    soundTrack.loop()
  }
  
  draw() {
    this._drawBg();
    this._drawText();
    this._btns();
  }
  
  keyPressed(key) {
    
  }
  
  _drawBg () {
    image(imgMenu, 0, 0, width, height);
  }
  
  _drawText () {
    const heightFirst = height / 5
    textFont(fontMenu)
    textAlign(CENTER)
    textSize(50)
    text('Into the', width/2, heightFirst);
    
    textSize(150)
    text('Woods',  width/2, heightFirst + 120);
  }
  _btns() {
    buttons.forEach(btn => {
      btn.draw();
    })
  }
  
}