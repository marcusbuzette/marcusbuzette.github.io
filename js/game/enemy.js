class Enemy extends RigidBody {
  constructor(spriteSheet, spriteHeight, spriteWidth, rowsNumber, colsNumber, frameNumber, posX, bodyLevel, bodyH, bodyW, floorLevel, collisionPoly,pointsVal, matrixHard, speed) {
    super(spriteSheet, spriteHeight, spriteWidth, rowsNumber, colsNumber, frameNumber, posX, bodyLevel, bodyH, bodyW, floorLevel, collisionPoly,matrixHard)


    this.alive = true;
    this.onScreen = true;
    this.killed = false;
    this.killPosX;
    this.canJump = true;
    this.pointsVal = pointsVal;

    if (pointsVal == 15) {
      this.applyGravity = false;
    }



    if (speed) {
      this.speed = speed;
    } else {
      this.speed = scenario.speedL5 + scenario.speedL5 * scenario.speedMultiply  + random(1, 6);
    }
  }

  show() {
    if (this.alive) {
      super.show();
    } else if (this.killed) {
      if (this.killPosX - this.posX < 60) {
        fill(255)
        textSize(30)
        text('+' + this.pointsVal,this.posX, this.posY)
      } else {
        this.alive = false;
        this.onScreen = false;
      }
    } else {
      this.alive = false
      this.onScreen = false;
    }
  }

  setSpeed(speed) {
    this.speed = speed;
  }

  walk() {
    this.posX -= this.speed;

    if (this.posX < -this.bodyW - 100) {
      this.remove();
    }
  }

  killEnemy() {
    this.alive = false
    this.setSpeed(scenario.speedL5)
    this.killPosX = this.posX;
    this.killed = true;
  }

  remove() {
    this.onScreen = false;
  }

  jump(jumpForce) {
    this.jumpForce -= jumpForce;
  }




  collisionPlat(plat) {
    const charCollider = this.collisionPoly.map(v => createVector(v[0] + this.posX, v[1] + this.posY))
    
    const newPlatX = plat.posX + plat.width * plat.precisionW
    const newPlatY = plat.posY + plat.height * plat.precisionH
    const newPlatWidth = plat.width + 20;
    const newPlatHeight = plat.height - plat.height * plat.precisionH


    const col = collideRectPoly(newPlatX,
      newPlatY,
      newPlatWidth,
      newPlatHeight,
      charCollider, true)

    if (col) {
      if (collideLinePoly(newPlatX,
        newPlatY,
        newPlatX,
        newPlatY + newPlatHeight,
        charCollider)) {} else {
      }

    if (collideLinePoly(newPlatX,
      newPlatY,
      newPlatX + newPlatWidth - 200,
      plat.posY, charCollider)) {

      this.floorLevel = height - newPlatY - 50
  } else {
    this.floorLevel = FLOOR_LEVEL
  }

  if (collideLinePoly(newPlatX,
    newPlatY,
    newPlatX + newPlatWidth,
    newPlatY + newPlatHeight,
    charCollider)) {

    if (this.canJump) {
      this.jump(40)
    }
    this.canJump = false;
  } else {
    this.canJump = true;
  }
} else {
  this.canJump = true
  this.floorLevel = FLOOR_LEVEL
}

}


}