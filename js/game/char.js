const JUMP = 27

class Character extends RigidBody {
  constructor(spriteSheet, spriteHeight, spriteWidth, rowsNumber, colsNumber,frameNumber,  posX, bodyLevel,bodyH, bodyW, floorLevel,collisionPoly ,matrixHard) {
    
   super(spriteSheet, spriteHeight, spriteWidth, rowsNumber, colsNumber, frameNumber, posX,bodyLevel, bodyH, bodyW, floorLevel, collisionPoly)
    
    this.yBase = this.posY
    this.linearSpeed = 0
    this.jumpsLeft = 2;
    this.canMoveFoward = true;
    this.canMoveBack = true;
  }
  
  jump(jumpSound) {
    this.applyGravity = true;
    this.jumpsLeft -= 1;
    if (this.jumpsLeft >= 0) {
      jumpSound.play()
      if (this.jumpsLeft === 0) {
        this.jumpForce = 0;
      }
      this.jumpForce -= JUMP
    }
  }
  
  jumpKill(jumpSound) {
    this.jumpsLeft = 2;
    this.applyGravity = true;
    this.jumpForce = 0
    jumpSound.play()
    this.jumpForce -= JUMP
  }
  
  land() {
    this.jumpForce += 30
  }
  
  foward() {
    if (this.canMoveFoward) {
      this.linearSpeed = 3
    }
  }
  
  backward() {
    this.linearSpeed = -3
  }
  
  stopMoving() {
    this.linearSpeed = 0
  }
  
  move() {
    if (this.posX >= enemyWall.posX + enemyWall.width) {
      if (this.posX + this.bodyW <= width) {
        this.posX += this.linearSpeed
      } else {
        this.stopMoving()
        if(this.posX < 0) {
          this.posX = 0      
        } else {
          this.posX = width - this.bodyW;
        }
      } 
    } else {
      gameOver.setup();
      GAME_STATUS = GAMEOVER
    }   
  }
  
  initialAnimation(variation) {
    this.posX = variation;
  
  }
  
  
  
  collisionPlat(plat) {
    const charCollider = this.collisionPoly.map(v => createVector(v[0] + this.posX, v[1] + this.posY))
    
    const newPlatX = plat.posX + plat.width*plat.precisionW
    const newPlatY = plat.posY + plat.height*plat.precisionH
    const newPlatWidth = plat.width - plat.width * plat.precisionW
    const newPlatHeight = plat.height - plat.height * plat.precisionH
    
    
    const col = collideRectPoly(newPlatX,
                               newPlatY,
                               newPlatWidth,
                               newPlatHeight,
                              charCollider, true)
    
    if (col) {
      if(collideLinePoly(newPlatX,
                         newPlatY,
                         newPlatX,
                         newPlatY + newPlatHeight,
                         charCollider)) {
        this.posX -= plat.speed;
        this.canMoveFoward = false
        this.linearSpeed = 0;
      } else {
        this.canMoveFoward = true
      }
      
      if(collideLinePoly(newPlatX,
                         newPlatY,
                         newPlatX + newPlatWidth - this.bodyW/2,
                         plat.posY, charCollider)) {
        
        this.floorLevel = height - newPlatY - 5
      } else {
        this.floorLevel = FLOOR_LEVEL
      }
      
      if(collideLinePoly(newPlatX,
                         newPlatY,
                         newPlatX + newPlatWidth - this.bodyW/2,
                         newPlatY + newPlatHeight,
                         charCollider)) {
        this.canMoveBack = false;
      } else {
        this.canMoveBack = true;
      }
    } else {
      this.canMoveFoward = true
      this.canMoveBack = true;
      this.floorLevel = FLOOR_LEVEL
    }
    
  }
  
  
  
  
  
  
  
  collision(obj) {
    
    const charCollider = this.collisionPoly.map(v => createVector(v[0] + this.posX, v[1] + this.posY))
    const objCollider = obj.collisionPoly.map(v => createVector(v[0] + obj.posX, v[1] + obj.posY))
    
//     const precisionH = 0.9;
//     const precisionW = 0.7;
    
//     const newCharX = this.posX + ((this.bodyW - this.bodyW * precisionW)/ 2)
//     const newCharY = this.posY + ((this.bodyH - this.bodyH * precisionH)/ 2)
    
//     const newObjX = obj.posX + ((obj.bodyW - obj.bodyW * precisionW)/ 2)
//     const newObjY = obj.posY + ((obj.bodyH - obj.bodyH * precisionH)/ 2)
  
    
    const colision =  collidePolyPoly(
      charCollider,
      objCollider, true
    );
    if (colision) {
        this.applyGravity = false;
      if (obj.alive) {

        if (killEnemy(charCollider[3].x,charCollider[3].y,objCollider[0].x,objCollider[0].y, obj.bodyW, obj.bodyH * 0.3)) {
          return 'kill';
        } else {
          return 'dead';
        }
      } else {
        this.applyGravity = true;
        return false;
      }
    } else {
      this.applyGravity = true;
      return false;
    }
  }
}

function killEnemy (charBottomX, charBottomY,objTopX, objTopY, objTopW, trashold) {
  let newX = objTopX  + (objTopW - (objTopW*0.8))/2
  if ((charBottomY <= objTopY + trashold) &&
     (charBottomX >= newX && charBottomX <= newX + objTopW*0.8 ) ) {
    this.posY = objTopY + this.bodyH;
    return true;
  } else {
    return false;
  }
}