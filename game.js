// variables


const body = document.querySelector('body')
const modal = document.querySelector('body > div.modal');
const modalBtn = document.querySelector('body > div.modal > button.start');
const gameStart = document.querySelector('body > div.game');
const txt = document.getElementById('txt');
const stats = document.getElementsByClassName('stats');
const gundamHP = document.getElementById('gundamHP');
const gundamHealth = document.getElementById('gundamHealth');
const gundamMoves = document.getElementById('gundamMoves');
const zakuHealth = document.getElementById('zakuHealth');
const bgmMenu = new Audio("https://github.com/sansivieria/GundamFVZ/blob/main/audio/music/Piano%20Intro.mp3");
const rifleBtnOne = document.querySelector();
const saberBtn = document.querySelector();
const cannonBtn = document.querySelector();
const rifleBtnTwo = document.querySelector();
const hawkBtn = document.querySelector();
const lmgBtn = document.querySelector();

const toggleModal = () => modal.classList.toggle('open');

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
    this.image = "https://i.imgur.com/9xupfyl.png";
  }
  checkHealth() {
    console.log("Remaning HP: " + this.health);
  }
  attackOne() {
    const hitChance = Math.round(Math.random()*10);
    if (hitChance =<7){
      const dmg = Math.round(Math.random()*10)+10;
      zakuHealth -= dmg;
      if (zakuHealth < 0){
        zakuHealth = 0;
      }
      txt.innerHTML =  "You hit Char for " + dmg + " damage, the Zaku has " + zakuHealth + " HP remaining!"
      const zakuHPBar = (zakuHealth/100)*200;
      zakuHealth.style.width = zakuHPbar + "px";
    }
    else {
      txt.innerHTML = "Your attack missed!"
    }
    if (zakuHealth == 0){
      txt.innerHTML += "<br>The Zaku has been destroyed! Char did not stand a chance!";
      gundamMoves.style.visibility = "hidden";
    }
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
    this.image = "https://i.imgur.com/cB3zAU0.png"
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
  healZaku() {
    console.log(this.name + " restored 15 HP!");
  }
}

const redcomet = new Zaku ("Zaku II", this.weapon, this.health)

// events



//modalBtn.addEventListener('click', (e) => {
  //toggleClass(modal, 'close');
//})

modalBtn.addEventListener('click', (e) => {
  toggleClass(modal, 'open');
  toggleModal();
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

//function enemyHPScale() {
	//var elem = document.getElementById("enemy-hp-bar");
  //  var width = 161;
  //  var id = setInterval(frame, 100);
//    function frame() {
//      if (width <= 0) {
//            clearInterval(id);
//        } else {
//            width--;
//            elem.style.width = width - '%';
//        }
//    }
//}
