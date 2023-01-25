class EmployeePayrollData
{
    id;
    salary;
    gender;
    startDate;

    constructor(id,name,salary)
    {
        this.id=id;
        this.name=name;
        this.salary=salary;
    }

    get name(){return this._name;}
    set name(name)
    {
        console.log("Setting: "+name);
        this._name=name;
    }
    toString()
    {
        return "id=" +this.id+", name="+this.name+", salary="+this.salary;
    }
}

let employeePayrollData=new EmployeePayrollData(1, "charu", 30000);
console.log(employeePayrollData.toString());
employeePayrollData.id=0;
employeePayrollData.name="chocky";
console.log(employeePayrollData.toString());