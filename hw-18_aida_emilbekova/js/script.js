//task-1
//declaration

function showNumbers(x,y){

    for( let i=x; i<= y; i++){

    console.log(`declaration :${i}`);

    }
}

showNumbers(4,9)

//expression

const showNumbers2= function (x,y) {
  for( let i=x; i<= y; i++){
    console.log(`expression:${i}`);
  }
}

showNumbers2(4,9)

//arrow
const showNumbers3=(x,y)=> {
  for( let i=x; i<= y; i++){
    console.log(`arrow:${i}`);
  }

}

showNumbers3(4,9)


//task-2

//declaration
function showEvenNumbers(x,y) {
    for(let i=x;i<=y;i++){
        if(i%2===0){
            console.log(`even number using declaration: ${i}`);
            
        }
    }
    
}

showEvenNumbers(1,10)


//using  expression
const showEvenNumbers2=function (x,y) {
    while(x<=y){
        if(x%2===0){
            console.log(`even number using expression: ${x}`);
        }
        x++
    }
    
    
}

showEvenNumbers2(1,10);

//using arrow function
const showEvenNumbers3=(x,y)=>{
   
    for(let i=x;i<=y;i++){
        if(i%2===0){
          console.log(`even number using arrow: ${i}`);
          
           
        } 
  
    }
}

showEvenNumbers3(1,10);



// task-3
//declaration

function calculateSum(x,y) {
    let sum=0
    for(let i=x; i<=y;i++){
     
      if(i%2===0){
        sum +=i
       
      }
    }
    return sum
  }
  
  let result= calculateSum(1,100);
  console.log(`declaration: ${result}`);

//using function expression
 const displaySumOfEvenNumbers= function(x,y){
    let sum=0
    for(let i=x; i<=y;i++){
     
      if(i%2===0){
        sum +=i
       
      }
    }
    return sum

 }

 const resultDisplayEvenNumbers= displaySumOfEvenNumbers(1,100);
 console.log(`expression: ${resultDisplayEvenNumbers}`);


 //using arrow 
 const showSumOfEvenNumbers2= (x,y)=>{
    let sum=0
    for(let i=x; i<=y;i++){
     
      if(i%2===0){
        sum +=i
       
      }
    }
    return sum

 }


 const resultEvenNumbers3=showSumOfEvenNumbers2(1,100);
 console.log(`arrow: ${resultEvenNumbers3}`);
 



//task-4
//declaration
function findChar(word, char) {
  for (let i = 0; i < word.length; i++) {
    if (char === word.charAt(i)) {
      return true;
      break
    }
  }

  return false;
}

const resultCharWordd = findChar("Naruto Shipuden", "u");
console.log(`declaration: ${resultCharWordd}`);


//expression

const findChar2 = function(word1,char1)  {
    for (let i = 0; i < word1.length; i++) {
            if (char1 === word1.charAt(i)) {
              return true;
              break;
            }
}  return false
}

const resultOfCharWord= findChar2("Naruto Shipuden", "u");
console.log(`expression: ${resultOfCharWord}`);


//using arrow function

const findChar3=(word2,char2)=>{
    for (let i = 0; i < word2.length; i++) {
        if (char2 === word2.charAt(i)) {
          return true;
          break
        }
}  return false
}


const resultOfCharWord1= findChar3("Naruto Shipuden", "u");
console.log(` arrow: ${resultOfCharWord1}`);


//task-5
//declaration

function reverseString(string) {
   
    let  reversedWord="";
for( let i=string.length-1;i >=0;i--){
  reversedWord += string[i]
}return reversedWord
}

const resultOfReservedWord=reverseString("hello")
console.log(`declaration: ${resultOfReservedWord}`);


//using function expression
const reversedText=function(word){
    let  reversedWord="";
    for( let i=word.length-1;i >=0;i--){
      reversedWord += word[i]
    }return reversedWord
    }

const reversedTextResult= reversedText("javascript");
console.log(`expression: ${reversedTextResult}`);

//using arrow function

const reversedStr=(word)=>{
    let  reversedWord="";
    for( let i=word.length-1;i >=0;i--){
      reversedWord += word[i]
    }return reversedWord
    }


    const resultOfReversedStr= reversedStr("console");
    console.log(`arrow: ${resultOfReversedStr}`);
    


