/* ========================= EASY ========================= */

// E1. A person can enter the club only if age is 18 or older
//     AND hasID is true. Print "Welcome" or "Denied".
const age1 = 20;
const hasID = true;
if(age1 >= 18 && hasID === true){
    console.log("welcome")

} else {
    console.log("Denied")
}

// Expected: Welcome
// your code here


// E2. It is a day off if isWeekend is true OR isHoliday is true.
//     Print "Day off" or "Work day".
const isWeekend = false;
const isHoliday = true;
 if(isWeekend ===true || isHoliday === true){
    console.log("dayoff")

 } else {
    console.log("workday")
 }
// Expected: Day off
// your code here


// E3. Go to the beach only if temperature is above 30 AND isSunny.
//     Print "Beach" or "Stay home".
const temperature = 33;
const isSunny = true;
 if(temperature >= 30&& isSunny === true){
    console.log("beach")
 } else{
    console.log("stayhome")
 }
  
// Expected: Beach
// your code here


// E4. Grant admin access if username is "admin" OR username is "root".
//     Print "Admin access" or "Regular user".
const username = "root";
 if(username === "root"|| username ==="admin"){
    console.log("admin access")

 }else{
    console.log("regular user")
 }
// Expected: Admin access
// your code here


// E5. A number is "good" if it is positive (> 0) AND even (n % 2 === 0).
//     Print "Good" or "Not good".
const number = 8;
 if(number > 0||n % 2 === 0 ){
    console.log("good")

 } else {
    console.log("not good")
 }
  
// Expected: Good
// your code here


/* ======================== MEDIUM ======================== */
/* Combine && and || together, or chain several conditions. */

// M1. Login succeeds if the username is "elbeg" AND password is "1234".
//     Print "Login OK" or "Wrong credentials".
const user = "elbeg";
const password = "1234";
if(user ="elbeg" && password === "1234"  ){
    console.log(" Login OK")
} else {
    console.log("Wrong credentials")
}
// Expected: Login OK
// your code here


// M2. A customer gets a discount if they are a member (isMember)
//     OR they spent more than 100000.
//     Print "Discount" or "Full price".
const isMember = false;
const totalSpent = 120000;
 if(isMember === true && totalSpent <=100000){
    console.log("discount")

 } else {
    console.log("full price")
 }
// Expected: Discount
// your code here


// M3. Entry is free if age is under 5 OR over 65. Otherwise paid.
//     Print "Free" or "Paid".
const age3 = 70;
 if( age3 >= 5 || age3 <= 65){
    console.log("free")
 } else {
    console.log("paid")
 }
// Expected: Free
// your code here


// M4. A person may drive only if ALL are true:
//     age is 18+, hasLicense is true, AND isSober is true.
//     Print "Can drive" or "Cannot drive".
const age4 = 25;
const hasLicense = true;
const isSober = false;
if( age4 <= 18 && hasLicense === true && isSober === true){
    console.log(" can drive")

} else{
    console.log("Cannot drive")
}
// Expected: Cannot drive
// your code here


// M5. Bring an umbrella if it isRaining,
//     OR if it isCloudy AND humidity is above 80.
//     Print "Umbrella" or "No umbrella".
const isRaining = false;
const isCloudy = true;
const humidity = 85;
if(isRaining === true || humidity >= 80 && isCloudy === true){
    console.log("umbrella")
} else {
    console.log("No umbrella")
}
// Expected: Umbrella
// your code here


/* ========================= HARD ========================= */
/* Operator precedence, ranges, and multi-part logic.
   Tip: when mixing && and ||, use parentheses to be explicit. */

// H1. Leap year. A year is a leap year if:
//     it is divisible by 4 AND not by 100,
//     OR it is divisible by 400.
//     Print "Leap year" or "Not a leap year".
//     After it works, mentally test: 1900 (no), 2000 (yes), 2023 (no).
const year = 2024;
// Expected: Leap year
// your code here
if( year % 4 === 0){
    

}


// H2. A grade is "valid B" if score is at least 80 AND below 90.
//     Print "Grade B" or "Not B".
const score = 84;
// Expected: Grade B
// your code here


// H3. Access the control panel only if the user isLoggedIn
//     AND (role is "admin" OR role is "moderator").
//     Print "Access granted" or "Access denied".
const isLoggedIn = true;
const role = "moderator";
// Expected: Access granted
// your code here


// H4. Three side lengths form a valid triangle only if EVERY pair
//     of sides sums to more than the third side:
//     a+b > c AND b+c > a AND a+c > b.
//     Print "Valid triangle" or "Invalid triangle".
const a = 3;
const b = 4;
const c = 5;
// Expected: Valid triangle
// your code here


// H5. A password is "strong" if its length is at least 8
//     AND it contains a number OR a symbol.
//     (hasNumber and hasSymbol are given as booleans.)
//     Print "Strong" or "Weak".
const pwLength = 10;
const hasNumber = false;
const hasSymbol = true;
// Expected: Strong
// your code here