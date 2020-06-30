const SIZE_LEVEL = 1
let changeLevel1 = false
let changeLevel2 = false

class Scenario {
  constructor(bg1,layersSpeed,bg2,bg3,bg4) {
    this.currentScene = [0,0,0,0,0];
    this.currentScene2 = [0,0,0,0,0];
    this.bg = [bg1];
    if(bg2) {
      this.bg.push(bg2)
    }
    
    if(bg3) {
      this.bg.push(bg3)
    }
    
    if(bg4) {
      this.bg.push(bg4)
    }
    this.speedL1 = layersSpeed[0];
    this.speedL2 = layersSpeed[1];
    this.speedL3 = layersSpeed[2];
    this.speedL4 = layersSpeed[3];
    this.speedL5 = layersSpeed[4];
    
    
    this.L1posImg1 = 0;
    this.L1posImg2 = width;
    this.L2posImg1 = 0;
    this.L2posImg2 = width;
    this.L3posImg1 = 0;
    this.L3posImg2 = width;
    this.L4posImg1 = 0;
    this.L4posImg2 = width;
    this.L5posImg1 = 0;
    this.L5posImg2 = width;

    this.speedMultiply = 0
    
    
    this.levelProg = 0;
  }
  
  show() {
    image(this.bg[this.currentScene[0]][0], this.L1posImg1,0, width + 10, height)
    image(this.bg[this.currentScene2[0]][0],this.L1posImg2,0, width + 10, height)
    
    image(this.bg[this.currentScene[1]][1], this.L2posImg1,0, width + 10, height)
    image(this.bg[this.currentScene2[1]][1],this.L2posImg2,0, width + 10, height)
    
    image(this.bg[this.currentScene[2]][2],  this.L3posImg1,0, width + 10, height)
    image(this.bg[this.currentScene2[2]][2],this.L3posImg2 ,0, width + 10, height)
    
    image(this.bg[this.currentScene[3]][3],  this.L4posImg1,0, width + 10, height)
    image(this.bg[this.currentScene2[3]][3],this.L4posImg2 ,0, width + 10, height)
 
    image(this.bg[this.currentScene[4]][4], this.L5posImg1,0, width + 15, height)
    image(this.bg[this.currentScene2[4]][4],this.L5posImg2,0, width + 15, height)
    

  }
  
  setBgSpeed(l1,l2,l3,l4,l5) {
    this.speedL1 = l1;
    this.speedL2 = l2;
    this.speedL3 = l3;
    this.speedL4 = l4;
    this.speedL5 = l5;
  }
  
  loopScenario () {
    this.L1posImg1 -= this.speedL1 + this.speedL1 * this.speedMultiply;
    this.L1posImg2 -= this.speedL1 + this.speedL1 * this.speedMultiply;
    
    this.L2posImg1 -= this.speedL2 + this.speedL2 * this.speedMultiply;
    this.L2posImg2 -= this.speedL2 + this.speedL2 * this.speedMultiply;
    
    this.L3posImg1 -= this.speedL3 + this.speedL3 * this.speedMultiply;
    this.L3posImg2 -= this.speedL3 + this.speedL3 * this.speedMultiply;
    
    this.L4posImg1 -= this.speedL4 + this.speedL4 * this.speedMultiply;
    this.L4posImg2 -= this.speedL4 + this.speedL4 * this.speedMultiply;
    
    this.L5posImg1 -= this.speedL5 + this.speedL5 * this.speedMultiply;
    this.L5posImg2 -= this.speedL5 + this.speedL5 * this.speedMultiply;
    
    if (this.L1posImg1 <= -width) {
      this.L1posImg1 = width;
      if (this.currentScene[0] >= this.bg.length -1 ) {
        if (this.currentScene[0] === this.currentScene[4]) {
          if (this.levelProg < SIZE_LEVEL) {
          if (changeLevel1) {
                this.currentScene[0] = 0;
                changeLevel1 = false;
            } else {
              this.levelProg += 1;
            }
          } else {
            changeLevel2 = true;
            this.levelProg = 0;
            this.speedMultiply += 0.1;
            this.currentScene[0] = 0;
          }       
        }
      } else {
        if (this.currentScene[0] === this.currentScene[4]) {
          if (this.levelProg < SIZE_LEVEL) {
            if (changeLevel1) {
                this.currentScene[0]++;
                changeLevel1 = false;
            } else {
              this.levelProg += 1;
            }
          } else {
            changeLevel2 = true;
            this.levelProg = 0;
            this.speedMultiply += 0.1;
            this.currentScene[0]++;
          }
        }
      }
    }
    if (this.L1posImg2 <= -width) {
      this.L1posImg2 = width;
      if (this.currentScene2[0] >= this.bg.length -1 ) {
        if (this.currentScene2[0] === this.currentScene2[4]) {
          if (this.levelProg < SIZE_LEVEL) {
          if (changeLevel2) {
                this.currentScene2[0] = 0;
                changeLevel2 = false;
            } else {
              this.levelProg += 1;
            }
          } else {
            changeLevel1 = true;
            this.levelProg = 0;
            this.speedMultiply += 0.1;
            this.currentScene2[0] = 0;
          }       
        }
      } else {
        if (this.currentScene2[0] === this.currentScene2[4]) {
          if (this.levelProg < SIZE_LEVEL) {
            if (changeLevel2) {
                this.currentScene2[0]++;
                changeLevel2 = false;
            } else {
              this.levelProg += 1;
            }
          } else {
            changeLevel1 = true;
            this.levelProg = 0;
            this.speedMultiply += 0.1;
            this.currentScene2[0]++;
          }
        }    
      }
    }
    
    if (this.L2posImg1 <= -width) {
      this.L2posImg1 = width;
      if (this.currentScene[1] >= this.bg.length -1 ) {
        if (this.currentScene[0] === 0) {
          this.currentScene[1] = 0;
        }
      } else {
        if (this.currentScene[1] < this.currentScene[0] && this.currentScene[0] !== 0 && this.currentScene[1] < this.currentScene2[0]) {
          this.currentScene[1]++;
        }
      }
    }
    if (this.L2posImg2 <= -width) {
      this.L2posImg2 = width;
      if (this.currentScene2[1] >= this.bg.length -1 ) {
        if (this.currentScene2[0] === 0) {
          this.currentScene2[1] = 0;
        }
      } else {
        if (this.currentScene2[1] < this.currentScene2[0] && this.currentScene2[0] !== 0 && this.currentScene2[1] < this.currentScene[0]){
           this.speedMultiply += 0.1;
           this.currentScene2[1]++;
        }
      }
    }
    
    if (this.L3posImg1 <= -width) {
      this.L3posImg1 = width;
      if (this.currentScene[2] >= this.bg.length -1 ) {
        if (this.currentScene[1] === 0) {
          this.currentScene[2] = 0;
        }
      } else {
        if (this.currentScene[2] < this.currentScene[1] && this.currentScene[1] !== 0 && this.currentScene[2] < this.currentScene[1]) {
          this.speedMultiply += 0.1;
          this.currentScene[2]++;
        }
      }
    }
    if (this.L3posImg2 <= -width) {
      this.L3posImg2 = width;
      if (this.currentScene2[2] >= this.bg.length -1 ) {
        if (this.currentScene2[1] === 0) {
          this.currentScene2[2] = 0;
        }
      } else {
        if (this.currentScene2[2] < this.currentScene2[1] && this.currentScene2[1] !== 0 && this.currentScene2[2] < this.currentScene[1]){
           this.speedMultiply += 0.1;
           this.currentScene2[2]++;
        }
      }
    }
    
    if (this.L4posImg1 <= -width) {
      this.L4posImg1 = width;
      if (this.currentScene[3] >= this.bg.length -1 ) {
        if (this.currentScene[2] === 0) {
          this.currentScene[3] = 0;
        }
      } else {
        if (this.currentScene[3] < this.currentScene[2] && this.currentScene[2] !== 0 && this.currentScene[3] < this.currentScene2[2]) {
          this.speedMultiply += 0.1;
          this.currentScene[3]++;
        }
      }
    }
    if (this.L4posImg2 <= -width) {
      this.L4posImg2 = width;
      if (this.currentScene2[3] >= this.bg.length -1 ) {
        if (this.currentScene2[2] === 0) {
          this.currentScene2[3] = 0;
        }
      } else {
        if (this.currentScene2[3] < this.currentScene2[2] && this.currentScene2[2] !== 0 && this.currentScene2[3] < this.currentScene[2]){
           this.speedMultiply += 0.1;
           this.currentScene2[3]++;
        }
      }
    }
    
    if (this.L5posImg1 < -width) {
      this.L5posImg1 = width;
      if (this.currentScene[4] >= this.bg.length -1 ) {
        if (this.currentScene[3] === 0) {
          this.currentScene[4] = 0;
        }
      } else {
        if (this.currentScene[4] < this.currentScene[3] && this.currentScene[3] !== 0 && this.currentScene[4] < this.currentScene2[3]) {
          this.speedMultiply += 0.1;
          this.currentScene[4]++;
        }
      }
    }
    if (this.L5posImg2 < -width) {
      this.L5posImg2 = width;
      if (this.currentScene2[4]  >= this.bg.length -1 ) {
        if (this.currentScene2[3] === 0) {
          this.currentScene2[4] = 0;
        }
      } else {
        if (this.currentScene2[4] < this.currentScene2[3] && this.currentScene2[3] !== 0
           && this.currentScene2[4] < this.currentScene[3]){
           this.speedMultiply += 0.1;
           this.currentScene2[4]++;
        }
      }
    }
  
  }
}