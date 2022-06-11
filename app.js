console.log("Hello World!\n==========\n");

// Exercise 1 Section
console.log("EXERCISE 1:\n==========\n");

// const printOdds = (count) => {

//     for(let i = 0; i <= count; i++){
//         if ( count % 2 == 0) {
//             continue
//         } else {
//             return console.log(i)
//         }
//     }
// } printOdds(51)

function printOdds(count){

    for(let i = 1; i <= count; i++){


        if ( i % 2 == 0) {
            continue
        } else {
             console.log(i)
        }
    }
} printOdds(51)


// Exercise 2 Section
console.log("EXERCISE 2:\n==========\n");

const checkAge = (name, age) => {
    let oldEnoughMsg = `Congrats ${name}! You can drive!`;
    let tooYoungMsg = `Sorry ${name}, you need to wait ${
      16 - age
    } year(s) until you can drive.`;
  
    if (age < 16) {
      console.log(tooYoungMsg);
    } else {
      console.log(oldEnoughMsg);
    }
  };
  
  checkAge("Ben", 12);
  checkAge("Seth", 16);
  checkAge("Cameron", 21);

function plane(x,y){
    if(x>0 && y> 0){
        console.log(`(${x}, ${y}) is in Quadrant 1`)
    } else if(x<0 && y > 0){
        console.log(`(${x}, ${y}) is in Quadrant 2`)
    } else if(x<0 && y <0){
        console.log(`(${x}, ${y}) is in Quadrant 3`)
    } else if(x>0 && y<0){
        console.log(`(${x}, ${y}) is in Quadrant 4`)
    } else if (x == 0 && y != 0){
        console.log("X-axis")
    } else if (x!=0 && y == 0){
        console.log("Y-axis")
    } else {
        console.log("Origin")
    }
} 
plane(0,2)
plane(2,0)
plane(1,4)
plane(-1,4)
plane(-2,-4)
plane(1,-3)
plane(0,0)

const isValidTriangle = (a, b, c) => a + b > c && a + c > b && b + c > a;
function triangle(a,b,c){
    let allSameNumber = s1 + s2 + s3
    let isValid = isValidTriangle(a, b, c);
    if(isValid){
        if (a == b && b == c) {
          return `Equilateral`;
        } else if (a == b || b == c || a == c) {
          return `Isosceles`;
        } else {
          return `Scalene`;
        }
      } else {
        return `Not a valid triangle.`;
      }
    };


triangle(1,1,2)

const dataUsageFeedback = (planLimit, day, usage) => {
    let periodLength = 30;
    let currentAvg = usage / day;
    let projectedAvg = planLimit / periodLength;
    let remainingDays = periodLength - day;
    let remainingData = planLimit - usage;
    let projectedUsage = remainingDays * currentAvg;
    let statusMsg;
  
    if (currentAvg > projectedAvg) {
      statusMsg = "EXCEEDING";
    } else if (currentAvg < projectedAvg) {
      statusMsg = "UNDER";
    } else {
      statusMsg = "AT";
    }
  
    console.log(`${day} day(s) used, ${remainingDays} day(s) remaining
    Average projected use: ${projectedAvg.toFixed(2)} GB/day.
    You are ${statusMsg} your average daily use (${currentAvg.toFixed(2)} GB/day),
    continuing this usage, you'll end up using ${
      planLimit - (usage + projectedUsage)
    } GB from your data limit.
    To stay below your data plan, use no more than ${(
      remainingData / remainingDays
    ).toFixed(2)} GB/day.`);
  };
  
  dataUsageFeedback(50, 10, 25);

