window.addEventListener('load', function(){
    data("https://jsonplaceholder.typicode.com/users");
});

function data(url) {
    fetch(url)
        .then(data => data.json())
        .then(data => {
            putData(data);
        });
}

function putData(data) {
    const tbody = document.querySelector("#cuerpo");
                
    data.forEach(element => {
        let tr = document.createElement("tr");
        let tdId = document.createElement("td");
        let tdName = document.createElement("td");
        let tdUsername = document.createElement("td");
        let tdPhone = document.createElement("td");

        let id = document.createTextNode(element.id);
        let name = document.createTextNode(element.name);
        let username = document.createTextNode(element.username);
        let phone = document.createTextNode(element.phone);

        tdId.appendChild(id);
        tr.appendChild(tdId);
        tdName.appendChild(name);
        tr.appendChild(tdName);
        tdUsername.appendChild(username);
        tr.appendChild(tdUsername);
        tdPhone.appendChild(phone);
        tr.appendChild(tdPhone);
        tbody.appendChild(tr);
    });
}
