'use strict'
let a = 5;
//1
while(true) {
    console.log(a);
    a++
    if(a==101){
        break
    }
}
//2
let array1= [1, 2, 4, -1, -3, 8, 7, 0, -5, 18, 12];
for (let i=0; i<array1.length; i++){
    if(array1[i]>0 && array1[i]<10){
        console.log(array1[i])
    }
}
//3
let array2 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
for(let i=0; i<array2.length; i++){
    if (array2[i]===5){
        console.log('არის')
    }
}

//4
let array3= [1, 2, 3, 4, 5];
let number = 0
for (let i of array3){
    number += i
} console.log(number)

//5
let array4= [1, 2, 3, 4, 5];
let number2=0
for (let i of array4){
    number2 += i
}
console.log(number2/array4.length)

//6
let array5 = [1, 2, 3, 7, 6, 9];
for (let item of array5){
    if(item == 7){
        continue
    }
   console.log(item)
}

//7
let user = {
    firstname: "giorgi",
    lastname: "smith",
    age: 25,  
    studentstatus: "active"
  };
console.log (user.studentstatus);  



//9

let array6 = [ 2, 3, 5, 10,25,24,11, 100 , 6,7, 10 ]
for (let i of array6){
    if (i % 2 === 0){
        console.log(i)
    }
}

//10 
let users = [
    {username: 'giorgi', status: false},
    {username: 'levani', status: false},
    {username: 'anna', status: true}
]
for (let i = 0; i < users.length; i++){
    if (users[i].status === true){
        console.log(users[i])
    }
}