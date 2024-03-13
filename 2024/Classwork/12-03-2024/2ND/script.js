const form = document.querySelector("form");
const tbody = document.querySelector("tbody");

function idGenerator(){
    return Math.random().toFixed(4).slice(2)
}

form.addEventListener("submit", (event) => {
    event.preventDefault();
    let formData = new FormData(form);
    const user = Object.fromEntries(formData);
    user.id=idGenerator();
    saveUser(user);
    renderUsers(getUsers())
    form.reset();
    console.log(user);
});

function getUsers(){
    return JSON.parse(localStorage.getItem("users") ?? [])
}

function saveUser(user){
    const users=getUsers();
    let index = users.findIndex(el => el.id === user.id);
    index >= 0?users[index]=user: users.push(user);
    localStorage.setItem('users', JSON.stringify(users));
}

function renderUsers(arr){
    tbody.innerHTML = "";
    arr.forEach(user => {
        tbody.innerHTML += `
        <tr>
            <td>
        `
    })
}

