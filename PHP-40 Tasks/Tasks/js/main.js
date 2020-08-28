//Question 1
function checkPalin(string) {
    let newString = string.split("").reverse().join("");
    if (newString === string) {
        return true;
    } else {
        return false;
    }
}
console.log(checkPalin("eyeeye"))
console.log(checkPalin("ahmed"))


//Question 2
function anagrams(stringA, stringB) {
    return sortString(stringA) == sortString(stringB)
}

function sortString(string) {
    return string.split('').sort().join('');
}

console.log(anagrams("ali", "lia"));

//Question 3
function sum(Number1) {
    return function (Number2) { return function (Number3) { return function (Number4) { return Number1 + Number2 + Number3 + Number4 }}};
}
console.log(sum(5)(5)(5)(5));

//Question 4
function reverseString(chk) {
    var newString = "hello";
    for (var i = newString.length - 1; i >= 0; i--) { 
        let str;
        newString += str[i];
    }
    return newString;
    console.log(newString);
}
reverseString();

//Question 5
function myObject(name, message){
   this.name = name.toString();
    this.message = message.toString();
    get Name(){
        return this.name;
    }
    get Message(){
        return this.message;
    }
}

//Question 6
function checkPrime(number) {
    if (number === 2) {
        return true;
    } else if (number > 1) {
        for (let i = 2; i < number / 2; i++) {
            if (number % i !== 0) {
                return true;
            } else {
                return false;
            }
        }
    } else {
        return false;
    }
}
console.log(checkPrime(37));

//Question 7

//Question 8
function testPow(a, b) {
    let value = 1;
    for (let i = 0; i< b; i++) {
        value = value * a;
    }
    return value;
}
console.log(testPow(5,3));

