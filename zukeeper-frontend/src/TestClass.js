class TestClass {

  static all = []

  constructor(cheese){
    this.cheese = cheese
    this.constructor.all.push(this)
  }


  // this would also retrieve the attribute, but you'd have to add parentheses
  // instance.cheese() vs instance.cheese

  // cheese(){
  //   return `fancy ${this._cheese}`
  // }

  // get cheese(){
  //   return `fancy ${this._cheese}`
  // }

  // set cheese(arg){
  //   this._cheese = arg
  // }

  sayCheese(){
    console.log(this.cheese + " is my favorite kind of cheese!")
  }

  sayCheeseHarder = () => {
    console.log(this.cheese + " is my favorite kind of cheese!!!!!!!!!!")
  }

  static sayHiToFriend(friend){
    console.log(`Saluton, ${friend}`)
  }


}
