interface Student {
    firstName: string,
    lastName: string,
    age: number,
    location: string
}

let student1: Student = {
    firstName: 'leon',
    lastName: 'kagozi',
    age: 50,
    location: 'kagugu'
}

let student2: Student = {
    firstName: 'kagozi',
    lastName: 'mugabe',
    age: 20,
    location: 'gisozi'
}

const studentsList: Student[] = [student1, student2];


const table = document.createElement('table');
studentsList.forEach(function (student) {
    const row = document.createElement('tr');
    const firstName = document.createElement('td');
    firstName.textContent = `firstName: ${student.firstName}`;
    const location = document.createElement('td');
    location.textContent = `location: ${student.location}`;
    row.appendChild(firstName)
    row.appendChild(location)
    table.appendChild(row);
})

document.body.appendChild(table);