const myButton = document.getElementById('btn');
 myButton.onclick = function () {
    const name = prompt('Enter your full name.');
    document.getElementById('name').innerText = name;
 }

// Variables
const pi = 3.142;
let fullname = 'Antoinette Amedza';
let age = 219;
let present= false;
console.log(fullname);

// Objects
const car = {
 numberPlate: 'GR-345-24',
 model: 'Bentley',
 color: 'pink',
 weight: 50,
 weightUnit: 'KG',
 owner: {
        name: 'Antoinette Amedza',
        driver: {
            name: 'Kojo'
        }
    }
} 
console.log(car.numberPlate);
console.log(car.model);
console.log(car.owner.name);
console.log(car.owner.driver.name);

car= {
    model: 'Porsche'
}

car.owner.driver.name= 'Elizabeth';
console.log(car.owner.driver.name);




// Arrays
const tweet1 = {
    text: 'I am learning js today.',
    likes: 5,
    shares: 2,
    retweets:1
  }
  
  const tweet2 = {
    text: 'I am learning arrays today.',
    likes: 8,
    shares: 3,
    retweets: 0
  }
  
  const tweets = [];
  tweets.push(tweet1);
  tweets.push(tweet2);
  tweets.length;
  tweets[1];
  
  // Dates
  const today = new Date();
  today.toString();
  today.toLocaleDateString();
  today.getHours();
  
  
   // If/Else
  if (true) {
    console.log('we are true');
  } else {
     console.log('we are false');
  }
  
   // If/Else
  if(today.getHours() >= 16) {
    console.log('class has ended!');
  } else {
    console.log('class is in session!'); 
  }
  
  // For loop
  for (let i = 0; i <= 10; i ++) {
    console.log('Notify friends!', i);
  }
  
  // Functions
// Defining functions
function login(username, password) {
  if (username =='annette' && password =='1234'){
      return 'User is logged in!';  
  } else if (username != 'annette!') {
    return 'invalid username!';
  } else if (password != '1234') {
    return 'invalid password!';
  } else {
    return 'invalid username or password!';
  }
}

// Invoking functions
login('annette','1234')

// Basic Arithmetic
12 + 34;
45 - 16;
7 * 12;
78 / 4;
78 % 4;


// comparison operators
2 === '2';
2 === 2;
3 !==  2;
3 !== 3;  


// Built-in Math functions
Math.round(37 /24);
Math.floor(37 /24);
Math.ceil(37/24);
Math.random();
Math.max(78, 12, 98, 14, 89);
Math.ceil(Math.random() * 1000000);

// Order of operations
1 * 2 + 3 -4 / 2 +2**2;

// Handling user inputs
// 1200 -'250';
// 1200 + 250;
1200 + Number('250')


















//  const myButton = document.getElementById('btn');
//  myButton.onclick = function () {
//     const name = prompt('Enter your full name.');
//     document.getElementById('name').innerText = name;
//  }

// const myButton = document.getElementById('btn');
// myButton.onclick = function () {
//     alert('You clicked me!');
// }

// document.getElementById('btn').onclick=function() {
//     alert('You clicked me!');
// }
