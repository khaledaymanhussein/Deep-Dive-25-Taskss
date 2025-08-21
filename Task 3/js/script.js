// 1 Variables
const name = "khaled ayman";
console.log(name);

let age = 19;
console.log(age);

var Love_Programming = true;
console.log(Love_Programming);

let Numbers = [80, 19, 7, 10];
console.log(Numbers[3]);

// 2 Operators

let x = 90, y = 80, z = 70;
let a = x + y + z;
console.log(a);
console.log(a / 3);

if(a >= a)
{
    console.log("the student is passed");
}
else
{
    console.log("the student is not passed");
}

// 3 if / else / else if

if(a >= 90)
{
    console.log("Excellent")
}
else if(a >= 75)
{
    console.log("Very Good")
}
else if(a >= 60)
{
    console.log("Good")
}
else
{
    console.log("Failed")
}

// 4 switch

let SubjectNumber = parseInt(prompt("Enter subject number (1, 2, or 3):"));

let MathGrade = 90;
let ScienceGrade = 85;
let EnglishGrade = 88;

switch (SubjectNumber) {
    case 1:
        console.log("Math: " + MathGrade);
        break;
    case 2:
        console.log("Science: " + ScienceGrade);
        break;
    case 3:
        console.log("English: " + EnglishGrade);
        break;
    default:
        console.log("Invalid subject number!");
}

// 5 Loops – for => with 9

// 6 Functions

function CalculateTotal(math, science, english) {
    return math + science + english;
}

const CalculateAverage = (total, NumberOfSubjects) => total / NumberOfSubjects;  //function

let TotalGrades = CalculateTotal(MathGrade, ScienceGrade, EnglishGrade);
let AverageGrades = CalculateAverage(TotalGrades, 3);

console.log("Total Grades:" + TotalGrades);
console.log("Average Grades:" + AverageGrades);

// 7 while

let num = 10;
while(num < 10)
{
    console.log("done");
    num++;
}

// 8 do-while

let num2 = 10;
do
{
    
    console.log("done");
    num++;

} while(num2 < 10);

// 9 Array

let numbers = [1, 2, 3, 4, 5, 6];

let SumFor = 0;
for(let i = 0 ; i < numbers.length ; i++ )
{
    SumFor += numbers[i];
}

let SumWhile = 0;
let j = 0;
while(j < numbers.length)
{
    SumWhile += numbers[j];
    j++;
}

console.log("Sum Using For Loop: " + SumFor);
console.log("Sum Using While Loop: " + SumWhile);