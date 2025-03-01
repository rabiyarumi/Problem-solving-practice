//reverse a string with build in function

function reverseString(str) {
  // console.log(str)
  let splitStr = str.split("");
  // console.log(splitStr)
  let reverseSplitStr = splitStr.reverse();
  // console.log(reverseSplitStr)
  let joinReversedStr = reverseSplitStr.join("");
  // console.log(joinReversedStr)
  return joinReversedStr;

  //shortcut
  // return str.split("").reverse().join("");
}

reverseString("Sidra");

//reverse a string with Decrementing for loop
function reverseString2(str) {
  let newStr = "";
  for (let i = str.length - 1; i >= 0; i--) {
    newStr += str[i];
  }
  // console.log(newStr)
  return newStr;
}

reverseString2("hello");

//sum of array
function sumOfArray(arr) {
  // console.log(arr)
  let sum = 0;
  for (const a of arr) {
    // console.log(a)
    sum = sum + a;
  }
  // console.log(sum)
  return sum;
}
sumOfArray([6, 10, 3, 6, 9, 6]);

// Find the even and odd number

function checkParity(n) {
  // console.log(n)
  if (n % 2 === 0 && n >= 0) {
    // console.log("Even");
  } else if (n % 2 === 1 && n >= 0) {
    // console.log("Odd");
  } else if (n < 0) {
    // console.log("Number is negative");
  }
}
checkParity(-999);

function findTheMax(arr) {
  // console.log(arr)
  let max = arr[0];
  for (const a of arr) {
    if (a > max) {
      max = a;
    }
  }
  // console.log(max)
  return max;
}

findTheMax([-5, 0, -1, -9, -2]);

function findTheMax2(arr) {
  return Math.max(...arr);
}

// console.log(findTheMax2([-5, -7, -1, -9, -2]));

// Check Palindrome
function checkPalindrome(str) {
  // console.log(str)
  let reverseStr = "";
  for (let i = str.length - 1; i >= 0; i--) {
    reverseStr += str[i];
  }
  const result = reverseStr === str ? "Yes" : "No";
  // console.log(result);
  return result;
  // if(newStr === str){
  //     console.log("Yes")
  // }
  // if(newStr !== str){
  //     console.log("No")
  // }
}

checkPalindrome("adam");

function findPureValue(arr) {
  // console.log("original", arr);
  const uniqueValue = arr.filter((item, index) => arr.indexOf(item) === index);
  // console.log("after removing all duplicates", uniqueValue)
  return uniqueValue
  
}
const arr = [4, 5, 6, 7, 5, 6, 4, 5, 6, 2, 1, 9, 7, 0, 1, 3];
findPureValue(arr);


const sum = 3+2+'7'
console.log(sum)