// function add(){
//     let h1 = document.querySelector("h1");
//     let currentNumber = parseInt(h1.innerText.split(" - ")[1]);
//     h1.innerText = "Title - " + (currentNumber + 1);
// }




// let btn = document.querySelector("button");
// console.log(btn)

// let txt = document.querySelector("h1");
// txt.style.fontSize = "50px"
// txt.style.border = "red 2px solid"
// txt.style.padding = "3%"
// txt.style.margin = "3%"
// txt.style.textAlign = "center"
// txt.style.color = "red"
// console.log(txt)


// let txt2 = document.querySelector("h2");
// console.log(txt2)





const students = [
    { firstName: "John", lastName: "Doe", birthYear: 2004 },
    { firstName: "Alice", lastName: "Smith", birthYear: 2002 },
    { firstName: "Bob", lastName: "Johnson", birthYear: 2003 },
    { firstName: "Emily", lastName: "Davis", birthYear: 2005 },
    { firstName: "Michael", lastName: "Brown", birthYear: 2001 }
];



const studentsTable = document.querySelector("#tableOfStudents");

function init(students) {
    for (let student of students) {
        studentsTable.innerHTML += `<tr>
                                        <td> ${student.firstName} </td>               
                                        <td> ${student.lastName} </td>               
                                        <td> ${student.birthYear} </td>               
                                    </tr>`

    }
}

init(students)



