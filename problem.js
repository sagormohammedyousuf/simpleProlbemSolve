`use strict`;

// Problem number : 1 //

/*

    Write a js program to check tow numbers and return true if one of 
    the number is 100 of if the sum of tow numbers is 100

     দুটি সংখ্যা পরীক্ষা করার জন্য একটি js প্রোগ্রাম লিখুন এবং দুটি সংখ্যার যোগফল 
     100 হলে একটি সংখ্যা 100 হলে সত্য ফেরত দিন



const isEqualTo100 = (a, b ) => a === 1000 || b === 100 || a + b === 100;

console.log(isEqualTo100(100 , 0));
console.log(isEqualTo100(0,100));

console.log(isEqualTo100(10 , 0));
console.log(isEqualTo100(0 ,10));

console.log(isEqualTo100(20 , 80));
console.log(isEqualTo100(50 , 50));


*/

// Problem number : 2 //

/* Write a js program to get extention of file name 

const getFileExtension = (srt) => str.slice
(str.lastIndexOf("."));

console.log(getFileExtension("problem.html"));
console.log(getFileExtension("config.java"));
console.log("i am working with you")

*/

// Problem number : 3 //

/* Write a js program to replace every character in a
 given string withe character following it the alphabet 
 
একটি প্রদত্ত স্ট্রিং এর প্রতিটি অক্ষরকে বর্ণমালা অনুসরণ করে অক্ষর দিয়ে
 প্রতিস্থাপন করতে একটি js প্রোগ্রাম লিখুন

 */

// string.fromCharCode
// charcodeAt

/*
const moveCharsForwad = (str) => 
str 
.split("")
.map(char => String.fromCharCode(char.charCodeAt
    (0) + 1))

    .join("");

    console.log(moveCharsForwad("z"))


*/

/*  // Problem number : 4 //

Write a js program to get the current date 

expected output : 

mm-dd-yyyy, mm/dd/yyy or dd-mm-yyyy, dd/mm/yyyy

*/

/*

const formateDate = (date = new Date()) => {
    const days = date.getDate();
    const months = date.getMonth();
    const years = date.getFullYear();
    return `${days}/${months}/${years}`
}

console.log(formateDate())

*/

/* // Problem number : 5 // 

write a js program to create a new string adding "New!" in font of 
a given string.if the given sting begins with "New!" already 
then return the original string .

"নতুন!" যোগ করে একটি নতুন স্ট্রিং তৈরি করতে একটি js প্রোগ্রাম লিখুন 
এর ফন্টে একটি প্রদত্ত স্ট্রিং. যদি প্রদত্ত স্টিং "নতুন!" দিয়ে শুরু হয় ইতিমধ্যে
তারপর মূল স্ট্রিং ফেরত দিন।




const addNew = (str) => {
    str.indexOf("New!") === 0 ? str : `New ! ${str}`
}

console.log(addNew("New! Offers"));

*/

/* problem number : 6 

write a js program to create a  new string from a given string 
taking the first 3 characters and the last 3 characters of sting
and adding the together . the sting length must be 3 or more ,
if not the original string is returned .

একটি প্রদত্ত স্ট্রিং থেকে একটি নতুন স্ট্রিং তৈরি করতে একটি js প্রোগ্রাম লিখুন
স্টিং এর প্রথম 3টি অক্ষর এবং শেষ 3টি অক্ষর নিচ্ছে৷
এবং একসাথে যোগ করা. স্টিং দৈর্ঘ্য 3 বা তার বেশি হতে হবে,
না হলে মূল স্ট্রিং ফেরত দেওয়া হয়।





const makeNewSting = (str) => 
    str.length < 3 ? str : str.slice(0,3) + str.slice(-3)


    console.log(makeNewSting("abc"))
    console.log(makeNewSting("abchljeljj"))
    console.log(makeNewSting("abchojohoha"))
    console.log(makeNewSting("abcbeoudja"))


    */

/* Problem Number : 7 
        Write a js program to extract the first half of a sting of even length .
        জোড় দৈর্ঘ্যের একটি স্ট্রিং এর প্রথমার্ধ বের করার জন্য একটি js প্রোগ্রাম লিখুন
 

        const firstHalf = (str) => str.slice(0, str.length /2 )

        console.log(firstHalf("hello"))

   */

/* Problem number : 8
        write a js program to concatenate to string 
        expect their first character .


        const concatenate = (str1, str2) => 
        str1.slice(1) + str2.slice(1)

        console.log(concatenate("abce" , "hello"))

            */

/*  Problem Number : 9
        
        given two values , write a js program to find out 
        which one is nearest to 100 ;
        



        const closetTo100 = (a,b) => (100 - a) < (100 -b) ? a : b ;

        console.log (closetTo100(99 , 88))

                */

/*Problem number : 10 
        write a js program to check a given string contains
        2 to 4 occurrences of a specified character .

        একটি প্রদত্ত স্ট্রিং রয়েছে চেক করতে একটি js প্রোগ্রাম লিখুন
         একটি নির্দিষ্ট অক্ষরের 2 থেকে 4টি ঘটনা।
        



         const countChars = (str, char) => 
         str.split("").filter(ch => ch === char).length;

         const contains2To4 = (str, char) => 
         contains2To4(str , char) >= 2 && countChars(str , char)


         console.log(contains2To4("ooh!" , "o"))

        */

/* Problem number : 11 
         Write a js program to find number of even digits
          in a an array of integers 
         
        


        let newArray = [1,2,3,4,5,6,7,8,9,10]

          const countEventNubmbers = (arr) => 

          arr.filter(num => num % 2 === 0).length;

          console.log(countEventNubmbers(newArray))


           */

/* Problem Number : 12 
            Write a js program to find then umber of even values 
            up to a given number 



            const countEventNumbers = (arr) =>
            arr.filter(num => num % 2 === 0 ).length;

            const  createArrayOfNumbers = (num) => {
                const returnArray = [];
                for (let i = 0; i <= num; i += 1){
                    returnArray.push(i)
                }
                return returnArray;
            };

            console.log(countEventNumbers(createArrayOfNumbers(9)))
            console.log(createArrayOfNumbers(7))

                      
          */

/* Problem number : 13 

            Write a js program to check whether a given array 
            of integers is sorted ascending order .

            পূর্ণসংখ্যার একটি প্রদত্ত অ্যারে আরোহী ক্রমে সাজানো হয়েছে কিনা তা
             পরীক্ষা করার জন্য একটি js প্রোগ্রাম লিখুন।
            
    


             const isAscending = (arr) => {
                for (let i = 0; i < arr.length; i++){
                    if (arr[i + 1] < arr[i]) return false;
                }
                return true
             }


             console.log(isAscending([1,2,3,4,5,6,7,8,9,10]))


                  


             const largestEven = (arr) => 
             Math.max(...arr.filter(num =>  num % 2 === 0));

             console.log(largestEven([1,2,3,4,5,6,7,8,9,10]))


                */

/** Problem number : 14
              * Write a javascript program to replace the first digit 
              * in a sting ( should cotains at least digit )
              *  with $ character
              


             const replaceFirstDigit = (str) => 
             str.replace(/[0-9]/ , "$");

             console.log(replaceFirstDigit("helloM4yDear"));


             */

/* Problem Number : 15 
               Given a year , repor if it is a leap year


               const isLeapYear = (year) => year % 4 === 0;

               console.log(isLeapYear(2024))


                            */

/** Problem number : 16
                * Write a js program to compare two objects to determine 
                * if the first one contais the same properties as the 
                * second one (which may also have additional properties)



               const objA = {a: 1, b: 2, c:1}
               const objB = {a: 1, b: 1, c:1}
               const objC = {a: 1, b: 1, c:1}

               const objectsEqual = ( a , b) => 
                Object.keys(a).every(keys => b[keys]);

                console.log(objectsEqual(objA,objB))


                                */

/* Problem Number : 17
                Write a javascript program to convert a comm-separeted values
                (csv) sting to a  2D arrary . a new line indicates a new row in
                the array
                


                const parseCSV = (csvSting ) => 
                    csvSting.split('\n').map(row => row.split(" ,"))

                    const str = `abc, def , ghi 
                    jkl,mno,pqr 
                    stu, vwx , yza
                    `;


                    console.log(parseCSV(str))


                    */


/*Problem Number : 18 

Write a javascript program to generate a random hexadecimal color code


 */

const getRandomHexNumber = () => 
Math.floor(Math.random() * 16).toString(16);

const getRandomHexColor = () => '#' + Array.from(
    {length: 6}).map(getRandomHexNumber).join("");

    console.log(getRandomHexColor());


   

