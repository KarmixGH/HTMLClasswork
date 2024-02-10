// const cars = ['Toyota', 'Honda', 'Ford', 'Chevrolet', 'BMW'];

// // cars.push('Volvo')
// // cars.push('Bentley')
// cars.splice(1, 1, 'Bugatti');


// const first=cars[0];
// const seventh=cars[6];

// console.log(first)
// console.log(seventh)


// function getLastIndex(a){
//     const lastIndex=a.length -1
//     return lastIndex
// }

// const lastIndex = getLastIndex(cars);
// console.log(lastIndex)


// console.log(cars);







// const array1=['0','1','2','3','4']
// const array2=[',5','6','7','8','9,'] 
// const array3=['thats','crazy'] 

// let finalArray=array1.concat(array2).concat(array3)
// console.log(finalArray)







// const digits = ['1', '2', '3', '4', '5', '6', '7', '8', '9'];
// let removed = digits.splice(3, 2);

// console.log(digits)
// console.log(removed)







// const arr=[1,2,3,4,5,6,7,8,9];

// for(let i=0; i<arr.length; i++){
//     arr[i]=arr[i]*10;
// }

// console.log(arr)






// const array = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// const arrayOdd = [];
// const arrayEven = [];

// for (let i = 0;  i < array.length; i++) {
//     if (array[i] % 2 === 0) {
//         arrayEven.push(array[i]); 
//     } else {
//         arrayOdd.push(array[i]);
//     }
// }

// console.log("original array:", array);
// console.log("odd array:", arrayOdd);
// console.log("oven array:", arrayEven);







// const arr=[[1,2,3],[4,5,6],[7,8,9]];

// for (let i = 0; i < arr.length; i++) {
//     for (let a = 0; a < arr[i].length; a++) {
//         arr[i][a] += 10;
//     }
// }

// console.log(arr)
// console.log(arr[0])
// console.log(arr[1])
// console.log(arr[2])




// let firstName = "john ";
// let age = 20;

// console.log(firstName+age)

// let job, isMarried;
// job = "teacher";
// isMarried = "false";

// console.log(firstName + "is a " + age + " years old " + job + ". Is he married? " + isMarried)





// let markHeight = 1.75;
// let markMass = 82;
// let markBmi = markMass/ (markHeight*markHeight);

// let johnHeight = 1.85;
// let johnMass = 102;
// let johnBmi = johnMass/ (johnHeight*johnHeight);
 
// // if (johnBmi > markBmi){
// //     console.log("Johns BMI is " + johnBmi + " and its higher than Marks " + markBmi)
// // } else {
// //     console.log("Marks BMI is " + markBmi + " and its higher than Johns " + johnBmi)
// // }

// let result = (johnBmi > markBmi) ? 
//     "John's BMI is " + johnBmi + " and it's higher than Mark's " + markBmi :
//     "Mark's BMI is " + markBmi + " and it's higher than John's " + johnBmi;
// console.log(result);









// let firstName = "Lamar";
// let age = 24;

// if (age < 13) {
//     console.log(firstName + " is " + age + ", so he is considered as a small boi");
// } else if (age < 18) {
//     console.log(firstName + " is " + age + ", so he is considered as a teenager, yet not mature enough");
// } else {
//     console.log(firstName + " is " + age + ", so he is considered as an adult and can do whatever he wants till it's legal");
// }







let johnTeamScore = [99, 135, 112];
let mikeTeamScore = [116, 135, 123];
let maryTeamScore = [97, 134, 105];

function calculateAverage(scores) {
    let sum = 0;
    for (let i = 0; i < scores.length; i++) {
        sum += scores[i];
    }
    return sum / scores.length;
}

let johnAverage = calculateAverage(johnTeamScore);
let mikeAverage = calculateAverage(mikeTeamScore);
let maryAverage = calculateAverage(maryTeamScore);

console.log("John's team score is " + johnAverage)
console.log("Mike's team score is " + mikeAverage)
console.log("Mary's team score is " + maryAverage)

if (johnAverage > mikeAverage && johnAverage > maryAverage) {
    console.log("John's Team Won! " + johnAverage + " Points in average");
} else if (mikeAverage > johnAverage && mikeAverage > maryAverage) {
    console.log("Mike's Team Won! " + mikeAverage + " Points in average");
} else if (maryAverage > johnAverage && maryAverage > mikeAverage) {
    console.log("Mary's Team Won! " + maryAverage + " Points in average");
} else {
    console.log("It's a draw!");
}