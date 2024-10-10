exports.capitalize = function capitalize(str) {
    let newStr = str[0].toUpperCase();
    newStr += str.slice(1);
    return newStr
}

exports.reverseString = function reverseString(str) {
    let newStr = "";
    for(let i = str.length - 1; i >= 0; i--) {
        newStr += str[i];
    }
    return newStr
}

exports.calculator = {
    add(a, b) {
        return a + b
    },
    subtract(a, b) {
        return a - b;
    },
    divide(a, b) {
        return a / b;
    },
    multiply(a, b) {
        return a * b;
    }
}

exports.ceaserCipher = function ceaserCipher(str, factor) {
    let arr = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
    let resultString = "";
    let strLower = str.toLowerCase();

    for(let i = 0; i < str.length; i++) {
        let pos = arr.indexOf(strLower[i]);
        if(pos < 0 && str[i] === " ") {
            resultString += " ";
            continue;
        } else if (pos < 0){
            resultString += str[i];
            continue;
        }
        resultString += checkUpperCase(str[i], arr[pos + factor]);
    }

    return resultString
}

function checkUpperCase(strChar, arrChar) {
    if(strChar === strChar.toUpperCase()) {
        return arrChar.toUpperCase()
    }
    return arrChar;
}

exports.analyzeArray = function analyzeArray(arr) {
    let average = 0;
    let min = +Infinity;
    let max = 0;
    let length = arr.length;

    for(let i = 0; i < arr.length; i++) {
        if(arr[i] > max) max = arr[i];
        if(arr[i] < min) min = arr[i];
        average += arr[i];
    }
    average = average / arr.length
    return {
        average,
        min,
        max,
        length
    }
}