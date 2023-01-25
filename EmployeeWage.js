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
//UC4
const isparttime=1;
const isfulltime=2;
const parttimehours=4;
const fulltimehours=8;
const wageperhour=20;
const numberofworlingdays=20;
{
    function getWorkingHours(empCheck)
    {
        switch(empCheck)
        {
            case isparttime:
                return parttimehours;
            case isfulltime:
                return fulltimehours;
            default:
                return 0;
        }
    }
    let totalEmpHrs=0;
    for(let day=0; day<numberofworlingdays; day++)
    {
        let empCheck=Math.floor(Math.random() * 10) % 3;
        totalEmpHrs += getWorkingHours(empCheck);
    }
    let empWage=totalEmpHrs * wageperhour;
    console.log("Total Hours: " + totalEmpHrs +"\nEmployee Wage: " + empWage);
}
//UC5
const PART_TIME=1;
const FULL_TIME=2;
const PART_TIME_HOUR=4;
const FULL_TIME_HOURS=8;
const WAGE_PER_HOURS=20;
const NUM_OF_WORKING_DAYS=20;
const MAX_HRS_IN_MONTH=160;
{
    function getWorkingHours(empCheck)
    {
        switch(empCheck)
        {
            case PART_TIME:
                return PART_TIME_HOUR;
            case FULL_TIME:
                return FULL_TIME_HOURS;
            default:
                return 0;
        }
    }
    let totalEmpHrs=0;
    let totalWorkingDays=0;
   while(totalEmpHrs<= MAX_HRS_IN_MONTH && totalWorkingDays < NUM_OF_WORKING_DAYS)
    {
        totalWorkingDays++;
        let empCheck=Math.floor(Math.random() * 10) % 3;
        totalEmpHrs += getWorkingHours(empCheck);
    }
    let empWage=totalEmpHrs * WAGE_PER_HOURS;
    console.log("Total Days: " + totalWorkingDays + "\nTotal Hours: " + totalEmpHrs +"\nEmployee Wage: " + empWage);
}