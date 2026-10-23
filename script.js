
let students = [];

function addStudent() {
    let name = document.getElementById("name").value.trim();
    let roll = document.getElementById("roll").value.trim();
    let department = document.getElementById("department").value.trim();
    let message = document.getElementById("message");

    if (name === "" || roll === "" || department === "") {
        message.style.color = "red";
        message.innerText = "Please fill all fields!";
        return;
    }

    if (students.some(s => s.roll === roll)) {
        message.style.color = "red";
        message.innerText = "Roll number already exists!";
        return;
    }

    students.push({ name, roll, department });

    message.style.color = "green";
    message.innerText = "Student added successfully!";

    document.getElementById("name").value = "";
    document.getElementById("roll").value = "";
    document.getElementById("department").value = "";

    displayStudents();
}

function displayStudents() {
    let search = document.getElementById("search").value.toLowerCase();
    let list = document.getElementById("studentList");

    list.innerHTML = "";

    students
        .filter(s =>
            s.name.toLowerCase().includes(search) ||
            s.roll.toLowerCase().includes(search)
        )
        .forEach((s, index) => {
            list.innerHTML += `
                <tr>
                    <td>${s.name}</td>
                    <td>${s.roll}</td>
                    <td>${s.department}</td>
                    <td>
                        <button onclick="deleteStudent('${s.roll}')">
                            Delete
                        </button>
                    </td>
                </tr>`;
        });
}

function deleteStudent(roll) {
    students = students.filter(s => s.roll !== roll);
    document.getElementById("message").innerText =
        "Student deleted successfully!";
    displayStudents();
}
