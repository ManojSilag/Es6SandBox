/* styling */
require('styles/main.scss');
/* js */
import { log, logTitle } from 'logger';
/* your imports */

import { coroutine as co } from 'bluebird';

logTitle('Generators');

// const getValues = function* (){
//   yield 1;
//   yield "hello";
//   yield true;
//   yield { name: 'Alex'}
//   return 'I am done';
// }

// const numberGen = getValues();

// log(numberGen.next().value)
// log(numberGen.next().value)
// log(numberGen.next().value)
// log(numberGen.next().value)
// log(numberGen.next().value)


// const getNumbers = function* (numbers){
//   for (let index = 0; index < numbers.length; index++) {
//     yield numbers[index]
//   }
// }

// const getNumbersGen = getNumbers([1,22,33,44,55]);

// const interval = setInterval(() => {
//   const next = getNumbersGen.next();
//   if(next.done){
//     log('This Gen is done');
//     clearInterval(interval);
//   }else{
//     const number = next.value;
//     log(number);
//   }
// }, 1000)


// const getRandomUsers = n => {
//   const fetchRandomUsers = fetch(`https://randomuser.me/api/?results=${n}`)
//   fetchRandomUsers.then(data => {
//     data.json().then(randomUsers => {
//       log(JSON.stringify(randomUsers.results.length));
//       randomUsers.results.forEach(user => {
//         const {gender, email} = user;
//         log(`${gender} - ${email}`);
//       });
//     })
//   });
// }

// getRandomUsers(100);

const getRandomUsers = co(function* (n){
  const fetchRandomUsers = yield fetch(`https://randomuser.me/api/?results=${n}`)
  const data = yield fetchRandomUsers.json();
  return data;
});

getRandomUsers(10).then(randomUsers => {
        randomUsers.results.forEach(user => {
        const {gender, email} = user;
        log(`${gender} - ${email}`);
      });
}).catch(err => log(err))
