document.querySelector("h1").style.color="red"

// let a=15; //number
// let b="16"; //string
// let c=false/true; //bool
// let d=null; //neither undefied but can be changed in future
// let e=undefined; //no one knew no one knows
// const fr="bomba"; //unchangable variable

// const array=['first','second','third','fourth'];
// array.push('fifth');
// console.log(array);

// let fName='Dachi ';
// let sName='Bitsadze';
// let fullName=fName+sName;
// console.log(fullName)



function adding(a,b){
    return a+b;
}

function removing(a,b){
    return a-b;
}

function multiplying(a,b){
    return a*b;
}

function separation(a,b){
    if(b==0){
        return 'second parameter is wrong'
    }

    else return a/b;
}


let num1=10;
let num2=10;

let num3=separation(num1, num2);
console.log(num3)