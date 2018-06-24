console.log('JS');

const employees = [
    {
        firstName : 'Ross',
        lastName : 'Qualey',
        idNumber : '81202',
        jobTitle : 'Peon',
        annualSalary : '60,000',
    },
];

$(document).ready( readyNow );
function readyNow() {
addClickHandlers ();
console.log('JQ');
    for(let employeeInfo of employees){
        addRow(employeeInfo.firstName, employeeInfo.lastName, employeeInfo.idNumber, employeeInfo.jobTitle, employeeInfo.annualSalary);
    }

function addClickHandlers() {
    $('#submit').on('click', handleSubmit);
    $('#employeeTable').on('click', '.deleteBtn', handleDelete);
}

function handleSubmit() {
    let firstName = $('#firstName').val();
    let lastName = $('#lastName').val();
    let idNumber = $('#idNumber').val();
    let jobTitle = $('#jobTitle').val();
    let annualSalary = $('#annualSalary').val();

    addRow(firstName, lastName, idNumber, jobTitle, annualSalary);
    $('#firstName').val('');
    $('#lastName').val('');
    $('#idNumber').val('');
    $('#jobTitle').val('');
    $('#annualSalary').val('');

}

function handleDelete() {
    $(this).closest('tr').remove();
}

function addRow(firstName, lastName, idNumber, jobTitle, annualSalary) {
    let $row = $('<tr></tr>');
    $row.append(`<td>${firstName}</td>`);
    $row.append(`<td>${lastName}</td>`);
    $row.append(`<td>${idNumber}</td>`);
    $row.append(`<td>${jobTitle}</td>`);
    $row.append(`<td>${annualSalary}</td>`);
    $row.append(`<td><button class="deleteBtn">DELETE</button></td>`);

    $("#employeeTable").append($row);
}
}

