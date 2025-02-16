//reverse a string with build in function

function reverseString(str) {
    console.log(str)
    let splitStr = str.split("")
    console.log(splitStr)
    let reverseSplitStr = splitStr.reverse()
    console.log(reverseSplitStr)
    let joinReversedStr= reverseSplitStr.join("")
    console.log(joinReversedStr)
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
    console.log(newStr)
    return newStr
}

reverseString2("hello")
