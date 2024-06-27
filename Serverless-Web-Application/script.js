var API_ENDPOINT = "API_ENDPOINT_PASTE_HERE";

document.getElementById("savestudent").onclick = function() {
    var inputData = {
        studentid: document.getElementById('studentid').value,
        name: document.getElementById('name').value,
        class: document.getElementById('class').value,
        age: document.getElementById('age').value
    };
    fetch(API_ENDPOINT, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(inputData)
    })
    .then(response => response.json())
    .then(() => {
        document.getElementById("studentSaved").innerText = "Student Data Saved!";
    })
    .catch(() => {
        alert("Error saving student data.");
    });
};

document.getElementById("getstudents").onclick = function() {
    fetch(API_ENDPOINT, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    })
    .then(response => response.json())
    .then(data => {
        var table = document.getElementById('studentTable').getElementsByTagName('tbody')[0];
        table.innerHTML = "";
        data.forEach(student => {
            var row = table.insertRow();
            row.insertCell(0).innerText = student.studentid;
            row.insertCell(1).innerText = student.name;
            row.insertCell(2).innerText = student.class;
            row.insertCell(3).innerText = student.age;
        });
    })
    .catch(() => {
        alert("Error retrieving student data.");
    });
};
