class Game {
  constructor(charater,weapon){
    this.charater = charater
    this.weapon = weapon
  }

  sayHello(){
    print("你好，我的职业是"+this.charater)
  }

  fight(){
    print("我的武器是"+this.weapon)
  }

  transformFight(otherWeapon){
    print("我换的武器是"+otherWeapon)
  }
}

function main() {
 let people1 = new Game('Assassin','Knife')
  let people2 = new Game('Solidier','Axe')
  print(people1.charater + '输出' + people1.weapon)
  print(people2.charater + '输出' + people2.weapon)
}