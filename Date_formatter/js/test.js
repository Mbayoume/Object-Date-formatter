
// the split method takes a string and split the element with a separator then in a new array

// console.log(list.reverse())/

// function timing (){
//     const list = "this is the main string";

//     console.log(list.split(" ").reverse().join(" "))
// }


// // 


// function sayHi() {
//     console.log('hi there');
// }

// sayHi(); // Run once immediately

// // Stop any previous interval before starting a new one
// if (intervalId !== null) {
//     clearInterval(intervalId);
// }

// intervalId = setInterval(sayHi, 1000); // Run every second

let intervalId = null;

function time(){
    const date = new Date()

    const second = date.getSeconds();
    console.log(second);
}
if (intervalId !== null) {
    clearInterval(intervalId);
}
time();
intervalId = setInterval(time,1000);


