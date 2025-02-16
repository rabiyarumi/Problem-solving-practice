//reverse a string with build in function

function reverseString(str) {
    // console.log(str)
    let splitStr = str.split("")
    // console.log(splitStr)
    let reverseSplitStr = splitStr.reverse()
    // console.log(reverseSplitStr)
    let joinReversedStr= reverseSplitStr.join("")
    // console.log(joinReversedStr)
    return joinReversedStr

    //shortcut
    // return str.split("").reverse().join("");
}

reverseString("Sidra")

//reverse a string with Decrementing for loop
function reverseString2(str){
    let newStr=""
    for(let i = str.length - 1; i >= 0; i--){
        newStr += str[i]
    }
    // console.log(newStr)
    return newStr
}

reverseString2("hello")


//sum of array
function sumOfArray(){
    function readLine() {
        return inputString[currentLine++];
    }
    const n = parseInt(readLine().trim(), 10);
    
    const arr = readLine().replace(/\s+$/g, '').split(' ').map(arrTemp => parseInt(arrTemp, 10));
    
    console.log(arr)

    let sum = 0;
    for(const a of arr){
        console.log(a)
        sum = sum + a
    }
    console.log(sum)
    return sum
}
sumOfArray("4 6 8 9 5 3 2")

