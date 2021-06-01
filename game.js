// BIG BOI NODES


const body = document.querySelector('body')
const modal = document.querySelector('.modal');
const gameStart = document.querySelector('body > div.game');
const txt = document.getElementById('txt');
const stats = document.getElementsByClassName('stats');
const gundamHP = document.getElementById('gundamHP');
const gundamHealth = document.getElementById('gundamHealth');
const gundamMoves = document.getElementById('gundamMoves');
const zakuHealth = document.getElementById('zakuHealth');
const bgmMenu = new Audio("https://github.com/sansivieria/GundamFVZ/blob/main/audio/music/Piano%20Intro.mp3");
const rifleBtnOne = document.querySelector('#rifleBtnOne');
const saberBtn = document.querySelector('#saberBtn');
const cannonBtn = document.querySelector('#cannonBtn');




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
  attackOne(enemy) {
    console.log('hi');
    const hitChance = Math.round(Math.random()*10);
    if (hitChance <= 7){
      const dmg = Math.round(Math.random()*10)+10;
      enemy.health -= dmg;
      if (enemy.health < 0){
        enemy.health = 0;
      }
      txt.innerHTML =  "You hit Char for " + dmg + " damage, the Zaku has " + enemy.health + " HP remaining!"
      const zakuHPBar = (enemy.health/100)*200;
      zakuHealth.style.width = `${zakuHPBar}px`
    }
    else {
      txt.innerHTML = "Your attack missed!"
    }
    if (enemy.health == 0){
      txt.innerHTML = "<br>The Zaku has been destroyed! Char did not stand a chance!<br>Press Command+R to Play again ;-)";
    }
    else {
      fightBack(player);
    }
  }
  attackTwo(enemy) {
    const hitChance = Math.round(Math.random()*10);
    if (hitChance <= 9){
      const dmg = Math.round(Math.random()*5)+5;
      enemy.health -= dmg;
      if (enemy.health < 0){
        enemy.health = 0;
      }
      txt.innerHTML =  "You hit Char for " + dmg + " damage, the Zaku has " + enemy.health + " HP remaining!"
      const zakuHPBar = (enemy.health/100)*200;
      zakuHealth.style.width = `${zakuHPBar}px`
    }
    else {
      txt.innerHTML = "Your attack missed!"
    }
    if (enemy.health == 0){
      txt.innerHTML = "<br>The Zaku has been destroyed! Char did not stand a chance!<br>Press Command+R to Play again ;-)";
    }
    else {
      fightBack(player);
    }
  }
  attackThree(enemy) {
    const hitChance = Math.round(Math.random()*10);
    if (hitChance <= 5){
      const dmg = Math.round(Math.random()*25)+25;
      enemy.health -= dmg;
      if (enemy.health < 0){
        enemy.health = 0;
      }
      txt.innerHTML =  "You hit Char for " + dmg + " damage, the Zaku has " + enemy.health + " HP remaining!"
      const zakuHPBar = (enemy.health/100)*200;
      zakuHealth.style.width = `${zakuHPBar}px`
    }
    else {
      txt.innerHTML = "Your attack missed!"
    }
    if (enemy.health == 0){
      txt.innerHTML = "<br>The Zaku has been destroyed! Char did not stand a chance!<br>Press Command+R to Play again ;-)";
    }
    else {
      fightBack(player);
    }
  }
  heal(){
    console.log(this.name + " restored 15 HP!");
  }
}

//    WHAT HIS NAME BE

const rx78 = new Gundam ("RX-78", this.weapon, this.health)






// mobile suit class for computer player
//
//    FIX THE FIGHTBACK FUNCTION
//    STILL DOESNT CONNECT BACK
//
//
//

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
  fightBack(player) {
    const attackChoice = Math.ceil(Math.random()*3);
    if (attackChoice == 1){
      const hitChance = Math.round(Math.random()*10);
      if (hitChance <= 7){
        const dmg = Math.round(Math.random()*10)+10;
        player.health -= dmg;
        if (player.health < 0){
          player.health = 0;
        }
        txt.innerHTML +=  "<br>Char used Beam Rifle for " + dmg + " damage, your Gundam has " + player.health + " HP remaining!"
        const gundamHPBar = (player.health/100)*200;
        gundamHealth.style.width = `${gundamHPbar}px`
      } else {
        txt.innerHTML += "<br>Char missed!";
      }
    } else if (attackChoice == 2){
      const hitChance = Math.round(Math.random()*10);
      if (hitChance <= 8){
        const dmg = Math.round(Math.random()*5)+5;
        player.health -= dmg;
        if (player.health < 0){
          player.health = 0;
        }
        }
        txt.innerHTML +=  "<br>Char used Heat Hawk for " + dmg + " damage, your Gundam has " + player.health + " HP remaining!"
        const gundamHPBar = (gundamHealth/100)*200;
        gundamHealth.style.width = `${gundamHPbar}px`
      }
      else {
        txt.innerHTML += "<br>Char missed!";
      }
      if (player.health == 0){
        txt.innerHTML = "<br>Your Gundam has been destroyed!<br>Press Command+R to Play again ;-)";
      }
  }
}


//    WHAT HIS NAME BE

const redcomet = new Zaku ("Zaku II", this.weapon, this.health)





// functions

const toggleModal = () => modal.classList.toggle('open');

const startGame = () => {
    modal.classList.remove('open');
    //beginFight();
}






// events

rifleBtnOne.addEventListener('click', (e) => {
  rx78.attackOne(redcomet);
  console.log('rifle shot');
  redcomet.fightBack(rx78);
  console.log('retaliate');
})

saberBtn.addEventListener('click', (e) => {
  rx78.attackTwo(redcomet);
  console.log('saber hit');
  redcomet.fightBack(rx78);
  console.log('retaliate');
})

cannonBtn.addEventListener('click', (e) => {
  rx78.attackThree(redcomet);
  console.log('cannon fire');
  redcomet.fightBack(rx78);
  console.log('retaliate')
})


//    LOAD ME UP

window.onload = () => {
    startGame();
}
