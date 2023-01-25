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
//UC6
const ISPART_TIME=1;
const ISFULL_TIME=2;
const PARTTIME_HOURS=4;
const FULLTIME_HOUR=8;
const WAGEPER_HOUR=20;
const NUMOF_WORKING_DAYS=20;
const MAXHRS_IN_MONTH=160;
{
    function getWorkingHours(empCheck)
    {
        switch(empCheck)
        {
            case ISPART_TIME:
                return PARTTIME_HOURS;
            case ISFULL_TIME:
                return FULLTIME_HOUR;
            default:
                return 0;
        }
    }
    function calcDailyWage(empHrs)
    {
        return empHrs * WAGEPER_HOUR;
    }
    let empHrs=0;
    let totalEmpHrs=0;
    let totalWorkingDays=0;
    let empDailyWageArr=new Array();
   while(totalEmpHrs<= MAXHRS_IN_MONTH && totalWorkingDays < NUMOF_WORKING_DAYS)
    {
        totalWorkingDays++;
        let empCheck=Math.floor(Math.random() * 10) % 3;
        totalEmpHrs += getWorkingHours(empCheck);
        empDailyWageArr.push(calcDailyWage(empHrs));
    }
    let empWage = calcDailyWage(totalEmpHrs);
    console.log("Total Days: " + totalWorkingDays + "\nTotal Hours: " + totalEmpHrs +"\nEmployee Wage: " + empWage);
}
//Array Helper Functions
//UC7A
const IS_PARTTIME=1;
const IS_FULLTIME=2;
const PART_TIMEHOURS=4;
const FULL_TIMEHOUR=8;
const WAGE_PERHOUR=20;
const NUM_OF_WORKINGDAYS=20;
const MAX_HRS_INMONTH=160;
{
    function getWorkingHours(empCheck)
    {
        switch(empCheck)
        {
            case IS_PARTTIME:
                return PART_TIMEHOURS;
            case IS_FULLTIME:
                return FULL_TIMEHOUR;
            default:
                return 0;
        }
    }
    function calcDailyWage(empHrs)
    {
        return empHrs * WAGE_PERHOUR;
    }
    let empHrs=0;
    let totalEmpHrs=0;
    let totalWorkingDays=0;
    let empDailyWageArr=new Array();
    let empDailyWageMap=new Map();
    let empDailyHrsMap=new Map();
   while(totalEmpHrs<= MAX_HRS_IN_MONTH && totalWorkingDays < NUM_OF_WORKING_DAYS)
    {
        totalWorkingDays++;
        let empCheck=Math.floor(Math.random() * 10) % 3;
        let empHrs=getWorkingHours(empCheck);
        totalEmpHrs += empHrs;;
        empDailyWageArr.push(calcDailyWage(empHrs));
        empDailyHrsMap.set(totalWorkingDays,empHrs);
        empDailyWageMap.set(totalWorkingDays,calcDailyWage(empHrs));
    }
    let empWage = calcDailyWage(totalEmpHrs);
    console.log("UC6 - Total Days: " + totalWorkingDays + "\nTotal Hours: " + totalEmpHrs +"\nEmployee Wage: " + empWage);
//UC 7A
let totEmpWage=0;
function sum(dailyWage)
{
    totEmpWage += dailyWage;
}
empDailyWageArr.forEach(sum);
console.log("\nUC7A - Total Days: " + totalWorkingDays + "\nTotal Hours: " + totalEmpHrs +"\nEmployee Wage: " + totEmpWage);

function totalWages(totalWage,dailyWage){
    return totalWage + dailyWage;
}
console.log("UC7A - Emp Wage With Reduce: "+empDailyWageArr.reduce(totalWages,0));

//UC 7B
let dailyCntr = 0;
function mapDayWithWage(dailyWage){
    dailyCntr++;
    return dailyCntr + " = " + dailyWage;
}
let mapDayWithWageArr = empDailyWageArr.map(mapDayWithWage);
console.log("\nUC7B - Daily Wage Map");
console.log(mapDayWithWageArr);

//UC 7C-Show Days When Full Time Wage of 160 Were Earned
function fulltimeWage(dailyWage) {
    return dailyWage.includes("160");
}
let fullDayWageArr = mapDayWithWageArr.filter(fulltimeWage);
console.log("\nUC7C - Daily Wage Filter When Fulltime Wage Earned");
console.log(fullDayWageArr);

//UC 7D - Find The First Occurrence When Full Time Wage Was Earned Usinf Find Function 
function findFulltimeWage(dailyWage){
    return dailyWage.includes("160");
}
console.log("\nUC 7D - First Time Fulltime Wage Was Earned On Day: "+ mapDayWithWageArr.find(findFulltimeWage));

//UC 7E - Check if Every Element of Fulltime Wage is truely holding Fulltime Wage
function isAllFulltimeWage(dailyWage){
    return dailyWage.includes("160");
}
console.log("\nUC 7E - Check All Element Have Full Time Wage: "+fullDayWageArr.every(isAllFulltimeWage));

//UC 7F - Check if there is any Part Time Wage
function isAnyPartTimeWage(dailyWage){
    return dailyWage.includes("80");
}
console.log("\nUC 7F - Check If Any Part Time Wage: "+mapDayWithWageArr.some(isAnyPartTimeWage));

//UC 7G - Find The Number Of Days The Employee Worked
function totalDaysWorked(numOfDays,dailyWage){
    if(dailyWage > 0) return numOfDays+1;
    return numOfDays;
}
console.log("\nUC 7G - Number Of Days Employee Worked: "+empDailyWageArr.reduce(totalDaysWorked, 0));

//UC 8 - Map Function
console.log("\nUC 8 - Employee Wage Map TotalHrs: "+Array.from(empDailyWageMap.values()).reduce(totalWages,0));

//UC 9 - Arrow Functions
const findTotal = (totalVal, dailyVal) =>{
    return totalVal + dailyVal;
}
let totalHours = Array.from(empDailyHrsMap.values()).filter(dailyHours =>dailyHours > 0).reduce(findTotal,0);
let totalSalary = empDailyWageArr.filter(dailyWage => dailyWage > 0).reduce(findTotal,0);
console.log("UC 9A - Employee Wage With Arrow: "+"Total Hours: "+totalHours+"Total Wages: "+totalSalary);

let nonWorkingDays = new Array();
let partWorkingDays = new Array();
let fullWorkingDays = new Array();
empDailyHrsMap.forEach( (value, key, map)=> {
    if(value == 8) fullWorkingDays.push(key);
    else if (value == 4) partWorkingDays.push(key);
    else nonWorkingDays.push(key);
});
console.log("Full Working Days: "+fullWorkingDays);
console.log("Part Working Days: "+partWorkingDays);
console.log("Non Working Days: "+nonWorkingDays);
}