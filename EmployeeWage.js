//UC1 IF ELSE CONDITION
{
    const IS_ABSENT=0
    let empCheck = Math.floor(Math.random() * 10) % 2;
    if(empCheck==IS_ABSENT)
    {
        console.log("EMPLOYEE IS ABSENT");
    }
    else
    {
        console.log("EMPLOYEE IS PRESENT");
    }
}
//UC2 SWITCH CASE
const IS_PART_TIME=1;
const IS_FULL_TIME=2;
const PART_TIME_HOURS=4;
const FULL_TIME_HOUR=8;
const WAGE_PER_HOUR=20;
{
    let empHrs=0;
    let empCheck=Math.floor(Math.random() * 10) % 3;
    switch(empCheck)
    {
        case IS_PART_TIME:
            empHrs=PART_TIME_HOURS;
            break;
        case IS_FULL_TIME:
            empHrs=FULL_TIME_HOUR;
            break;
        default:
            empHrs=0;
    }
    let empWage=empHrs*WAGE_PER_HOUR;
    console.log("Employee Wage: " + empWage);
}
//UC3
const ISPARTTIME=1;
const ISFULLTIME=2;
const PARTTIMEHOURS=4;
const FULLTIMEHOUR=8;
const WAGEPERHOUR=20;
{
    function getWorkingHours(empCheck)
    {
        switch(empCheck)
        {
            case IS_PART_TIME:
                return PART_TIME_HOURS;
            case IS_FULL_TIME:
                return FULL_TIME_HOUR;
            default:
                return 0;
        }
    }
    let empCheck=Math.floor(Math.random() * 10) % 3;
    let empHrs=getWorkingHours(empCheck);
    let empWage=empHrs*WAGE_PER_HOUR;
    console.log("Hours: " +empHrs+ "\nEmployee Wage: " + empWage);
}