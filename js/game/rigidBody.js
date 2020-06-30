class RigidBody {
  constructor(spriteSheet, spriteHeight, spriteWidth, rowsNumber, colsNumber,framesNumber, posX, bodyLevel, bodyH, bodyW, floorLevel, collisionPoly,matrixHard) {
    this.spriteSheet = spriteSheet;
    
    if (matrixHard) {
      this.spriteArr = matrixHard;
    } else {
      this.spriteArr = splitSprites(spriteWidth, spriteHeight, rowsNumber, colsNumber, framesNumber)
    }
    
    
    this.posX = posX;
    this.currentSprite = 0;
    this.bodyH = bodyH;
    this.bodyW = bodyW;
    this.spriteHeight = spriteHeight;
    this.spriteWidth = spriteWidth;
    this.posY = height - bodyH -  bodyLevel - floorLevel;
    this.floorLevel = floorLevel;
    this.framesNumber = framesNumber;
    this.bodyLevel = bodyLevel;
    this.collisionPoly = collisionPoly;
    
    this.applyGravity = true;
    this.gravityForce = 3
    this.jumpForce = 0;
    
    
  }
  
  
  
  show() {
    image(this.spriteSheet, this.posX, this.posY, this.bodyW, this.bodyH, this.spriteArr[this.currentSprite][0], this.spriteArr[this.currentSprite][1], this.spriteWidth, this.spriteHeight);
    this.animate();

  }
  
  gravity() {
    if (this.applyGravity) {
      this.posY += this.jumpForce;
      if (this.posY + this.bodyH < height - this.floorLevel) {
        this.jumpForce += this.gravityForce;
        if (this.posY> height - this.floorLevel) {
          this.jumpForce = 0;
          this.jumpsLeft = 2;
          this.posY = height - this.bodyH - this.floorLevel
        }
      } else {
        this.jumpForce = 0;
        this.jumpsLeft = 2;
        this.posY = height - this.bodyH - this.floorLevel
      }
    }
  }
  
  animate () {
    this.currentSprite++;
    if(this.currentSprite > this.spriteArr.length - 1) {
      this.currentSprite = 0;
    }
  }
  
  debugar() {
    stroke(255, 255, 255)
    noFill()
    beginShape()
    this.collisionPoly.forEach(v => {
      vertex(v[0] + this.posX, (v[1] + this.posY))
    })
    endShape(CLOSE);
  }
}


function splitSprites (spriteWidth, spriteHeight, rowsNumber, colsNumber, framesNumber) {
  let spritesArr = [];
  
  for (let rowCount = 0; rowCount < rowsNumber; rowCount++) {
    for (let colCount = 0; colCount < colsNumber; colCount++){
      if (spritesArr.length < framesNumber -1) {
        spritesArr.push([colCount * spriteWidth, rowCount * spriteHeight]);
      }
    }
  }
  return spritesArr;
}