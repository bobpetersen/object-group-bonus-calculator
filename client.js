const atticus = { name: 'Atticus', employeeNumber: '2405', annualSalary: '47000', reviewRating: 3 };
const jem = { name: 'Jem', employeeNumber: '62347', annualSalary: '63500', reviewRating: 4 };
const scout = { name: 'Scout', employeeNumber: '6243', annualSalary: '74750', reviewRating: 5 };
const robert = { name: 'Robert', employeeNumber: '26835', annualSalary: '66000', reviewRating: 1 };
const mayella = { name: 'Mayella', employeeNumber: '89068', annualSalary: '35000', reviewRating: 2 };

const employees = [ atticus, jem, scout, robert, mayella ];

// YOU SHOULD NOT NEED TO CHANGE ANYTHING ABOVE THIS POINT

console.log(employees);

class Employee  {
    constructor(name, employeeNumber, annualSalary, reviewRating) {
        this.name = name;
        this.bonusPercentage = calcPercent(reviewRating, employeeNumber, annualSalary);
        this.totalBonus = this.bonusPercentage * annualSalary;
        this.totalCompensation = this.totalBonus + Number(annualSalary);
    }
}

function newEmp(emp) {
    let thisGuy = new Employee(emp.name, emp.employeeNumber, emp.annualSalary, emp.reviewRating);
    return thisGuy;
    }

for (let emp of employees) {
    console.log(newEmp(emp));
}

function calcPercent(reviewRating, employeeNumber, annualSalary) {
    let percentage = 0;

    if (reviewRating === 3) {
        percentage += 4;
    }
    else if (reviewRating === 4){
        percentage += 6;
    }
    else if (reviewRating === 5){
        percentage += 10;
    }//end reviewrating
    
    if (employeeNumber.length === 4){
        percentage += 5;
    }//end employeeNumber

    if (Number(annualSalary) >= 65000){
        percentage -= 1;
    }// end annualSalary

    if (percentage > 13){
        percentage = 13;
    }
    else if (percentage < 0){
        percentage = 0
    }//end cap percent

    return percentage/100;
}//end calcPercent

