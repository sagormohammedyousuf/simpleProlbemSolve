// crate random number of 1 to 6 //

/*

var random = Math.round(Math.random() * 6)

console.log(random)

*/


// short a array alfabetically  // 

/*

var friendList = ["Sagor" , "Yousuf" , "Sajid" , "Miraze" , "Arman" , "Hamim"]

var sorting = friendList.sort()

console.log(sorting)




// ‍sort a arry of numbers //



var numArry = [5,,87,,9,8,,4,32,98,5,6,89,3,10]

var newArry = numArry.sort(function(a,b){return a - b})

console.log(newArry)


/*
// leap year check  with js //

function leapYear(year) {
    if((year % 400 === 0) || (year % 4 === 0) && (year % 100 !== 0)){
        console.log(`${year} is a leap year`)
    }else {
        console.log(`${year} is a normal year not a leap year`)
    }
}

leapYear(2024)

*/

/*
// create a vowel counter // 

const vowels = ["a", "e", "i" , "o" , "u" , "A" , "I" , "O" , "U"]

function countVowels(sentence) {
    let count = 0; 
    const letters = Array.from(sentence)

    letters.forEach(function(value){
        if(vowels.includes(value)){
            count ++;
        }
    })

    return count
}

*/

/*

// find a duplicate number of a array // 

const numbers =  [1,2,3,4,5,67,7,8,9,9,4,5];

const duplicates = numbers.filter(function(value ,index , array){
    return array.indexOf(value) === index;
})

console.log(duplicates)

*/


// count repeated words in a string // 

/*

const sentence  = "Quora is a social question-and-answer website and online knowledge market headquartered in Mountain View, California. It was founded on June 25, 2009, and made available to the public on June 21, 2010. Users can collaborate by editing questions and commenting on answers that have been submitted by other users."


const matches = sentence.match(/on/gi)

console.log(matches)

*/

/*

// input: linearSearch([a,b,c,d,c],c)

// output: 2 or not found  

// problem : show  implements  of  linearSearch() function


function linearSearch(arr , val) {
    const length = arr.length;

    for (let i = 0; i < length; i++) {
        if(arr[i] === val){
            return i;
        }
    }
    return "not Found !"
}

console.log(linearSearch(["a","b","c","d", "c"], "c"))

*/


// fizz buzz // 

function fizzBuzz (number) {
    for(let i = 0; i<=number; i++) {
        if(i % 15 === 0){
            console.log(`${i} is FizzBuzz`)
        }else if (i % 3 === 0) {
            console.log(`${i} is fizz`)
        }else if (i % 5 === 0) {
            console.log(`${i} is buzz`)
        }else {
            console.log(i)
        }
    }
}

fizzBuzz(100)