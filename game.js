const body = document.querySelector('body')

const modal = document.querySelector('body > div.modal');
const modalBtn = document.querySelector('body > div.modal > button.start');

// mobile suit classes

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
}

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
  attackOne() {
    console.log(this.name + " used Beam Rifle!");
    console.log(target.name-- 10);
  }
  attackTwo() {
    console.log(this.name + " used Heat Hawk!");
    console.log(target.name-- 4);
  }
  attackThree() {
    console.log(this.name + " used Machine Gun!");
    console.log(target.name-- 15);
  }
}
