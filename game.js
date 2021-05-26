// variables


const body = document.querySelector('body')
const modal = document.querySelector('body > div.modal');
const modalBtn = document.querySelector('body > div.modal > button.start');
const rifleBtnOne = document.querySelector();
const saberBtn = document.querySelector();
const cannonBtn = document.querySelector();
const rifleBtnTwo = document.querySelector();
const hawkBtn = document.querySelector();
const lmgBtn = document.querySelector();

// mobile suit class for first player

class Gundam {
  constructor(name, weapon, accuracy, health) {
    this.name = name;
    this.weapon = {
      beamRifle: 10,
      beamSaber: 5,
      pulseCannon: 15
    };
    this.accuracy = accuracy;
    this.health = 100;
    this.image = {
      "", "";
    }
  }
  checkHealth() {
    console.log("Remaning HP: " + this.health);
  }
  attackOne() {
    console.log(this.name + " used Beam Rifle!");
    console.log(target.name-- 10);
  }
  attackTwo() {
    console.log(this.name + " used Beam Saber!");
    console.log(target.name-- 5);
  }
  attackThree() {
    console.log(this.name + " used Pulse Cannon!");
    console.log(target.name-- 15);
  }
  heal(){
    console.log(this.name + " restored 15 HP!");
  }
}

const rx78 = new Gundam ("RX-78", this.weapon, this.health)

// mobile suit class for computer player

class Zaku {
  constructor(name, weapon, accuracy, health) {
    this.name = name;
    this.weapon = {
      beamRifle: 9,
      heatHawk: 6,
      lmg: 15
    };
    this.accuracy = accuracy;
    this.health = 100;
    this.image = {
      "", "";
    }
  }
  checkHealth() {
    console.log("Remaning HP: " + this.health);
  }
  fightOne() {
    console.log(this.name + " used Beam Rifle!");
    console.log(target.name-- 10);
  }
  fightTwo() {
    console.log(this.name + " used Heat Hawk!");
    console.log(target.name-- 4);
  }
  fightThree() {
    console.log(this.name + " used Machine Gun!");
    console.log(target.name-- 15);
  }
  heal() {
    console.log(this.name + " restored 15 HP!");
  }
}

const redcomet = new Zaku ("Zaku II", this.weapon, this.health)

// events

modalBtn.addEventListener('click', (e) => {
  toggleClass(modal, 'open');
  //startGame();
})

rifleBtnOne.addEventListener('click', (e) => {
  attackOne();
  console.log('rifle shot')
})

saberBtn.addEventListener('click', (e) => {
  attackTwo();
  console.log('saber hit')
})

cannonBtn.addEventListener('click', (e) => {
  attackThree();
  console.log('cannon fire')
})

rifleBtnTwo.addEventListener('click', (e) => {
  fightOne();
  console.log('rifle shot')
})

hawkBtn.addEventListener('click', (e) => {
  fightTwo();
  console.log('heat hawk hit')
})

lmgBtn.addEventListener('click', (e) => {
  fightThree();
  console.log('lmg shot')
})

// outlier functions that could be used

function enemyHPScale() {
	var elem = document.getElementById("enemy-hp-bar");
    var width = 161;
    var id = setInterval(frame, 100);
    function frame() {
        if (width <= 0) {
            clearInterval(id);
        } else {
            width--;
            elem.style.width = width - '%';
        }
    }
}
