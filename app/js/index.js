/* styling */
require('styles/main.scss');
/* js */
import $ from 'jquery';
import { log, logTitle } from 'logger';
/* your imports */
logTitle('Title');
/* coding examples */

// const arrayOne  = ['Mack', 'Niko']
// const arrayTwo = ['Akiro', 'Ryo']

// const conCat = [...arrayOne, ...arrayTwo];
// log(conCat)

// const name = 'Akiro';
// const nameArray = [...name];
// log(nameArray);

const address = {
    country: 'India',
    city: 'Pune'
}

const name = {
   firstName: 'RYO',
   age: "23"
}

const person = {...address, ...name}
log(JSON.stringify(person, null, 2))
