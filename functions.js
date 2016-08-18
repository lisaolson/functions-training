
function combineWords(word1, word2) {
    var result = word1 + word2;
    return result;
}

function repeatPhrase(phrase, n) {

    for(var i=0; i < n; i++) {
        console.log(phrase);
}
}

function toTheNthPower(number, power) {
    // TODO: Place your code here
    //whatever they put in for number, I want to times that number to the number they put in for power
    var result = 1
    for (var i=0; i < power; i++)  {
            result *= number
    }
    return result;

    function areaOfACircle(radius) {
    var pi = 3.14159;
    // TODO: Place your code here
    //one input --> radius output needs to be 3.14 * 2 * 2
    return pi * 2 * 2;
}

function pythagoreanTheorem(a, b) {
    // TODO: Place your code here
    //c which is result = a times a plus b times b
    var c = (a * a) + (b * b);
    c = Math.sqrt(c);
    return c;
}

var result = pythagoreanTheorem(3, 4);
conosle.log(result);
// should display 5;

function isXEvenlyDivisibleByY(x, y) {
    // TODO: Place your code here
    //x % y === 0
    var result = x % y === 0;
    return result;
}

function countVowels(word) {
    // TODO: Place your code here
    //Loop looking at string - word - checking each index for a e i o u y, if it is, then add 1 to result
    var count = result += 1
    for (var i = 0; i < word.length; i++) {
        if (word[i]='a' || word[i]='e'||word[i]='i'||word[i]='o'||word[i]='u'||word[i]='y') {
            count++;
        }

    }
    return result;
}

var result = countVowels("stealing");
console.log(result);
// displays 3

findWdi([9,'Bart Simpson', true, 'wdi']) // returns true
findWdi(['a','b','c']) // returns false
    function findWdi(arr){
        for(var i = 0; i <arr.length; i++) {
            if (arr[i] === 'wdi') {
                return true;
            }
        }
        return false;
    }

    function printTriangle(length) {
    for (var i = '*'; i.length <= length; i+= '*') {
        console.log(i);
    }
}

function printPyramid(length) {
  for(var i = "*"; i.length <= length; i += "*") {
      var space = " ";

    for(var j = length - i; j > 0; j-= " ")
    space += " ";
  }
  console.log(space);
}

printPyramid(10);
