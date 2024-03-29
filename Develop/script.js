// Get a reference to the #add-employees-btn element
const addEmployeesBtn = document.querySelector('#add-employees-btn');

// Collect employee data


const collectEmployees = function() {
  
  let employeesArray = [];

    while (true) {
    let firstName = prompt("Enter first name:");

      if (firstName === null) {
        break;
      }

      let lastName = prompt("Enter last name.");

      if (lastName === null) {
        break;
      }
//Instructor showed me parsefloat in place of isNaN function here
      let salary = prompt("Enter salary.");
      

      if (parseFloat(salary)) {
        salary = parseFloat(salary)

      }
      else { 
        salary = 0
      }

      let employee = {
        firstName: firstName,
        lastName: lastName,
        salary: salary
      };

      employeesArray.push(employee);

      console.log(employeesArray)
      let goAgain = confirm("Continue?");

      if (!goAgain) {
        break;
      }
      
}
return employeesArray
}

  // TODO: Get user input to create and return an array of employee objects

  // Number.isNaN()

// Display the average salary
const displayAverageSalary = function(employeesArray) {
  
  
  let combinedSalary = 0;
  
  //for loop using dot notation to target the salary inputs of the objects. This took me hours to figure out!
  for (let i = 0; i < employeesArray.length; i++) {
    let object = employeesArray[i];
    combinedSalary += object.salary;
  }

  let averageSalary = parseFloat(combinedSalary) / employeesArray.length;

  console.log(`With our ${employeesArray.length} employees the average salary is $${averageSalary}`)
 
}



  // TODO: Calculate and display the average salary


// Select a random employee
const getRandomEmployee = function(employeesArray) {

  //Using randomIndex to make it easy because thats what the ai assistant used when I asked the syntax. 
  let randomIndex = 
  Math.floor(Math.random() * employeesArray.length);

  //Takes a random index in the employeesArray and makes it a randomEmployee variable

  let randomEmployee = 
  employeesArray[randomIndex];

  //Just like the average salary function I used dot notation to target just first and last name so i don't get back a salary.
  
  console.log(`The randomly selected employee is ${randomEmployee.firstName + ' ' + randomEmployee.lastName}`)
  // TODO: Select and display a random employee
}

/*
  ====================
  STARTER CODE
  Do not modify any of the code below this line:
*/

// Display employee data in an HTML table
const displayEmployees = function(employeesArray) {
  // Get the employee table
  const employeeTable = document.querySelector('#employee-table');

  // Clear the employee table
  employeeTable.innerHTML = '';

  // Loop through the employee data and create a row for each employee
  for (let i = 0; i < employeesArray.length; i++) {
    const currentEmployee = employeesArray[i];

    const newTableRow = document.createElement("tr");

    const firstNameCell = document.createElement("td");
    firstNameCell.textContent = currentEmployee.firstName;
    newTableRow.append(firstNameCell);

    const lastNameCell = document.createElement("td");
    lastNameCell.textContent = currentEmployee.lastName;
    newTableRow.append(lastNameCell);

    const salaryCell = document.createElement("td");
    // Format the salary as currency
    salaryCell.textContent = currentEmployee.salary.toLocaleString("en-US",{
      style:"currency",
      currency:"USD"
    });

    newTableRow.append(salaryCell);

    employeeTable.append(newTableRow);
  }
}

const trackEmployeeData = function() {
  const employees = collectEmployees();

  console.table(employees);

  displayAverageSalary(employees);

  console.log('==============================');

  getRandomEmployee(employees);

  employees.sort(function(a,b) {
    if (a.lastName < b.lastName) {
      return -1;
    } else {
      return 1;
    }
  });

  displayEmployees(employees);
}

// Add event listener to 'Add Employees' button
addEmployeesBtn.addEventListener('click', trackEmployeeData);
