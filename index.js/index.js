// 1. Print every element of the array, each on its own line.
const fruits = ["apple", "banana", "cherry"];
// Expected:
//   apple
//   banana
//   cherry
// your code here
for(i = 0; i < 3 ; i++){
   console.log(fruits[i])
}
    




// 2. Add up all the numbers and print the total.
const nums = [4, 8, 15, 16, 23, 42];
// Expected: 108
// your code here
let sum = 0 ;
for(let i = 0 ; i < 6 ; i++){
  sum = sum + num[i]
}
 


// 3. Count how many numbers in the array are even, and print the count.
const values = [3, 6, 9, 12, 15, 18];
let counts =0

// Expected: 3
// your code here
for( i = 0 ; i < 6 ; i++){
    console.log(values)
    if( values[i] %2 ===0 ){
     counts++
       }
       }
    console.log(counts)
    

    



// 4. Find and print the largest number in the array.
const scores = [42, 17, 99, 23, 56];
let ihtoo = scores[0]
// Expected: 99
// your code here
for(i = 0 ; i < 5 ; i++){
if(ihtoo < scores[i]){
    ihtoo < scores[i]
    console.log(scores[i])

}

   
}



// 5. Find the smallest number AND the index where it sits.
//    Print:  smallest <value> at index <i>
const temps = [12, 5, 8, 3, 20];
// Expected: smallest 3 at index 3
// your code here
let min = temps[0]
for(i = 0 ; i < 5 ; i++){
if(min > temps[i]){
    min > temps[i]
    console.log(temps[i])

}

}




// 6. Build a NEW array where every number is doubled, then print it.
const base = [1, 2, 3, 4];
// Expected: [ 2, 4, 6, 8 ]
// your code here
let double = [] 
for(i = 0 ; i < 4 ; i++){
   console.log(base[i] * 2)
   double[i]= base

}



// 7. Count how many times the target value appears in the array.
const items = [1, 2, 2, 3, 2, 4];
const target = 2;
let box = 0
// Expected: 3
// your code here
for(i = 0; i < 6; i++){
    if(target === items[i] ){
    box= box + items[i]
    }
}
console.log(box)



// 8. Calculate and print the average of the numbers.
const data = [10, 20, 30, 40];
let cal = 0
// Expected: 25
// your code here
for(i = 0; i < 4; i++){
   cal= data[i] + cal
   }
console.log(cal=cal/4)


// 9. Build a NEW array containing only the numbers greater than 10,
//    then print it.
const list = [5, 12, 8, 20, 3, 15];
let exp = []

// Expected: [ 12, 20, 15 ] 
// your code here
for(i = 0; i < 7; i++){
    if(list[i] >= 10){
       exp.push(list[i])
    }

}
console.log(exp)



// 10. Reverse the array into a NEW array WITHOUT using .reverse().
//     Then print the new array.
const letters = ["a", "b", "c", "d"];
let letter = []
// Expected: [ 'd', 'c', 'b', 'a' ]
// your code here
for( i = 3 ; i > 0; i--){
     letter.push(letters[i])
}
console.log(letter)




// 1. Print each character of the word on its own line.
const word = "code";
// Expected:
//   c
//   o
//   d
//   e
// your code here




// 2. Count the characters using a loop (increment a counter).
//    Do NOT just print .length — count them one by one.
const text = "javascript";
// Expected: 10
// your code here


// 3. Count how many vowels (a, e, i, o, u) are in the string.
const phrase = "education";
// Expected: 5
// your code here


// 4. Count how many times the letter "a" appears.
const sentence = "banana";
// Expected: 3
// your code here


// 5. Reverse the string into a NEW string (don't use a built-in reverse).
//    Build it character by character, then print it.
const name = "elbeg";
// Expected: geble
// your code here


// 6. Build a NEW string with all the spaces removed, then print it.
const spaced = "h e l l o";
// Expected: hello
// your code here


// 7. Build a NEW string where every space is replaced with a dash "-".
const title = "learn java script";
// Expected: learn-java-script
// your code here


// 8. Check if the word is a palindrome (reads the same forwards and
//    backwards). Print true or false.
const candidate = "level";
// Expected: true
// your code here


// 9. Count how many words are in the sentence.
//    Hint: words are separated by spaces.
const line = "I love javascript a lot";
// Expected: 5
// your code here


// 10. Count how many UPPERCASE letters are in the string.
//     Hint: a character ch is uppercase when  ch >= "A" && ch <= "Z"
const mixed = "HelloWorldJS";
// Expected: 4
// your code here
