/* styling */
require('styles/main.scss');
/* js */
import { log, logTitle } from 'logger';
/* your imports */
logTitle('Es6 Classes');

class Animal{

  constructor(name, age){
    log(`${name} animal was created`)
    this.name = name;
    this.age = age;
  }

  eat(){
    log(`${this.name} is eating`)
  }

  sleep(){
    log(`${this.name} is sleeping`)
  }

}

class Dog extends Animal {
  constructor(name, age, breed){
    super(name, age)
    this.breed = breed
  }

  logBreed(){
    log(`${this.breed} of Dog`)
  }

  logSleepfromDog(){
    super.sleep()
  }
}

const mike = new Dog('Mike',4,'pub');
mike.logBreed();
mike.sleep();
mike.eat();
mike.logSleepfromDog();


// const bobby = new Animal("bobby", 2);
// bobby.sleep();
// bobby.eat();