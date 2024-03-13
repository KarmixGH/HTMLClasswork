console.log("")



// const input = [1, 2, 3, 4, 5];
// const result = input.map(digits => digits **2)
// console.log(result)


console.log("")




// const input = [1, -4, 12, 0, -3, 29, -150];

// const result = input.filter(digit => digit > 0);
// const initialValue = 0
// const summOfResult = result.reduce((valueStorer, currentValue) => valueStorer + currentValue + initialValue,);


// console.log(summOfResult)


console.log("")




// const input = [12, 46, 32, 64];


// const result = input.sort().reduce(
//   (accumulator, currentValue, index, array) => {
//     accumulator.mean += currentValue / array.length;

//     if (array.length % 2 === 0) {
//       if (index === array.length / 2 - 1) {
//         accumulator.median += currentValue;
//       } else if (index === array.length / 2) {
//         accumulator.median += currentValue;
//         accumulator.median /= 2;
//       }
//     } else {
//       if (index === (array.length - 1) / 2) {
//         accumulator.median = currentValue;
//       }
//     }

//     return accumulator;
//   },
//   { mean: 0, median: 0 }
// );

// console.log(result);




console.log("")




// const input = "George Raymond Richard Martin";

// const words = input.split(' ');

// const firstCharacter = words.map(word => word[0])

// const result = firstCharacter.join('')

// console.log(words)
// console.log(firstCharacter)
// console.log(result)




console.log("")




// const input = [
//     {
//       name: "John",
//       age: 13,
//     },
//     {
//       name: "Mark",
//       age: 56,
//     },
//     {
//       name: "Rachel",
//       age: 45,
//     },
//     {
//       name: "Nate",
//       age: 67,
//     },
//     {
//       name: "Jennifer",
//       age: 65,
//     },
//   ];

// const ages = input.map(person => person.age);

// const minAge = Math.min(...ages)
// const maxAge = Math.max(...ages)
// const differenceBetweenAge = maxAge - minAge

// const result = {minAge, maxAge, differenceBetweenAge};


// console.log(result)


console.log("")




// const input = "Today i went to the museum and met lebron james there";

// const createNumeronym = word =>
//   word[0] + (word.length -2) + word[word.length -1];

// const result = input
//   .split(" ")
//   .map(word => (word.length >= 4 ? createNumeronym(word) : word))
//   .join(" ");

// console.log(result);




console.log("")



// function factorialCounter(factorial) {
//     return [...Array(factorial).fill(0)].map((_, index) => index + 1).reduce((accumulator, currentValue) => accumulator * currentValue, 1);
//   }


//   console.log(factorialCounter(5));





console.log("")


// const products = [
//     { name: "Product 1", price: 70, category: "Electronics" },
//     { name: "Product 2", price: 30, category: "Clothes" },
//     { name: "Product 3", price: 10, category: "Electronics" },
//     { name: "Product 4", price: 90, category: "Clothes" },
//     { name: "Product 5", price: 60, category: "Clothes" },
//     { name: "Product 6", price: 60, category: "Electronics" },
//     { name: "Product 7", price: 50, category: "Clothes" },
//     { name: "Product 8", price: 90, category: "Electronics" },
//   ];
  
//   const res = products.reduce((acum, item) => {
//       let key = item.category;
//       if (acum[key]) {
//           acum[key].push({price: item.price, name: item.name});
//       } else {
//           acum[key] = [{price: item.price, name: item.name}];
//       }
//       return acum;
//   }, {});
  
//   console.log(res);




console.log("")




// const employees = [
//   { name: "John", salary: 50000, department: "IT" },
//   { name: "Jane", salary: 60000, department: "HR" },
//   { name: "Bob", salary: 55000, department: "IT" },
//   { name: "Sophie", salary: 75000, department: "HR" },
//   { name: "Mike", salary: 65000, department: "IT" },
//   { name: "Emily", salary: 80000, department: "HR" },
//   { name: "David", salary: 70000, department: "IT" },
// ];

// const result = employees.reduce((accumulator, employee) => {
//     let key = employee.department;
//     if (accumulator[key]) {
//         accumulator[key].push({ name: employee.name, salary: employee.salary });
//     } else {
//         accumulator[key] = [{ name: employee.name, salary: employee.salary }];
//     }
//     return accumulator;
// }, {});

// console.log(result);



console.log("")






// const array1 = [1,2,3,4,3,5,4,7,5,7,8,9,9,5,6,2,3,5,1,2,3,1]

// function getUnique(arr){
//     return arr.reduce((a,b)=>a.includes(b)?a:[...a,b],[])
// }

// console.log(getUnique(array1))
 


console.log("")




// function calculateTipAndTotal(bills) {
//     const tips = [];
//     const totals = [];
    
//     for (let i = 0; i < bills.length; i++) {
//         const bill = bills[i];
//         let tip;
        
//         if (bill < 50) {
//             tip = bill * 0.2;
//         } else if (bill >= 50 && bill <= 200) {
//             tip = bill * 0.15;
//         } else {
//             tip = bill * 0.1;
//         }
        
//         tips.push(tip);
//         totals.push(bill + tip);
//     }
    
//     return [tips, totals];
// }

// const bills = [124, 48, 268];
// const result = calculateTipAndTotal(bills);

// const tips = result[0];
// const totals = result[1];

// console.log("Tips: " + tips.map(tip => tip.toFixed(2)));
// console.log("Total Cost: " + totals.map(total => total.toFixed(2))); 




console.log("")




// function isString(str){
//     const res=typeof str
//     if(res==='string'){
//         return true
//     }   else{
//         return false
//     }
// }


// console.log(isString(123))




console.log("")




// const text = "Robin Signh from USA.";

// function StringParameter(str) {
//     const result = str.split(" ").map(item => item.toLowerCase()).join("-");
//     return result.endsWith(".") ? result.slice(0, result.length - 1) : result;
// }

// console.log(StringParameter(text));


console.log("")




// const text = "robin Signh from USA.";
// function test(str){
//     return str.replace(str[0], str[0].toUpperCase())
// }

// console.log(test(text))




console.log("")




// const text = "robin signh from as sad d s aUSA.";
// function test(str){
//     return str.split(" ").map(el => el.replace(el[0],el[0].toUpperCase())).join(" ")
// }

//  console.log(test(text))




console.log("")





// const text = "robin signh from as sad d s a USA.";

// function test(str) {
//     let res = "";
//     for (let i = 0; i < str.length; i++) {
//         let char = str[i];
//         if (char.toUpperCase() === char) {
//             res += char.toLowerCase();
//         } else {
//             res += char.toUpperCase();
//         }
//     }
//     return res;
// }

// console.log(test(text));



console.log("")




// function repeat(str, count){
//     if(typeof(count) == "undefined"){
//         count = 1;
//     }
//     return count < 1, Array(count + 1).join(str);
// }

// console.log(repeat("Usopp! "))
// console.log(repeat("Haha! ", 10))






console.log("")




function insert(main_str,str,pos){
    if (typeof(pos) == "undefined"){
        pos = 0;
    }
    return main_str.slice(0,pos) +  str +  main_str.slice(pos)
}

console.log(insert("we are doing somethings", "bab"))