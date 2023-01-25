//UC13
class EmployeePayrollData
{
    id;
    name;
    salary;
    gender;
    startDate;
    //constructor
    constructor(id,name,salary,gender,startDate)
    {
        this.id=id[0];
        this.name=name[1];
        this.salary=salary[2];
        this.gender=gender[3];
        this.startDate=startDate[4];
    }
    //getter setter method
    get name(){return this._name;}
    set name(name){
        let nameRegex = RegExp('^[A-Z]{1}[a-z]{3,}$');
        if(nameRegex.test(name))
        this._name = name;
        else throw 'name is incorrect!';
    }
    //method
    toString(){
        const options={year:'numeric',month:'long',day:'numeric'};
        const empDate=!this.startDate?"undefined":
                      this.startDate.toLocalDateString("en-US",options);
        return "id=" + this.id + ",name='" + this.name +",salary=" + this.salary+","+"gender="+this.gender+",startDate="+empDate;
    }
}
let employeePayrollData=new EmployeePayrollData(1, "charu", 30000);
console.log(employeePayrollData.toString());
try{
employeePayrollData.name="chocky";
console.log(employeePayrollData.toString());
}
catch(e){
    console.error(e);
}
let newEmployeePayrollData = new EmployeePayrollData(1,"chocky",300000,"F",new Date());
console.log(newEmployeePayrollData.toString());