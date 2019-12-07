/* styling */
require('styles/main.scss');
/* js */
import { log, logTitle } from 'logger';
/* your imports */
logTitle('Es6 Classes');

// const apicall = new Promise((resolve, reject)=>{

//   setTimeout(()=>{
//      resolve('True')
//   },2000)

//   setTimeout(()=>{
//     reject('True')
//  },3000)

// })

// apicall.then(result => {
//   log(result);
// })

const RandomUsers = n => {
  const fetchUsers = fetch(`https://randomuser.me/api/?results=${n}`)
  fetchUsers.then(data => {
    data.json().then(data => {
      // log(JSON.stringify(data.results.length))
      JSON.stringify(data.results.length)
      data.results.forEach(element => {
      const{ email} = element;
       log(email);
    });
    
    })
  })
}

RandomUsers(50);