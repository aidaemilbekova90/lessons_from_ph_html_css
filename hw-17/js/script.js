//task-1

let number=1;
while(number<=100){
    console.log(number)
    number++
}

for( let i=1; i<=100;i++){
    console.log(i);

}

//task-2
for( let i=1;i<=100;i++){
    if(i%2===0)

        console.log(i)

}

let evenNumber=1;
while(evenNumber<=100){
    if(evenNumber%2===0){
        console.log(evenNumber);
    }
    evenNumber++
}

//task-3
//sum using for loop
let sum=0

for(let i=1; i<=100;i++){
    if(i%2===0){

        sum +=i;

    }
}

console.log(`using for loop: ${sum}`);
// sum using while loop
let summ=0;
let num=1;
while(num<=100){
    if(num%2===0){
        summ +=num
    }

    num++
}
console.log(`using while loop: ${summ}`);


//task-4
const string = "Naruto Shipuden";

let index1 = 0;


let result1 = "jok";

while (index1 < string.length) {
  let currentChar = string.charAt(index1);
  if (currentChar === "u") {
    result1 = "bar";
    break;
  }
  index1 ++;
}

console.log(`using while loop :${result1}` );



const str1 = "Naruto Shipuden";
let indexx = 0;

let answer = "jok";
for (let indexx = str1.length - 1; indexx >= 0; indexx--) {
  currentChar = str1.charAt(indexx);
  if (currentChar === "u") {
    answer = "bar";
    break;
  }
}

console.log(`using for loop:${answer}`);

//task-5
let str="hello"
let  reversedWord="";
for( let i=str.length-1;i >=0;i--){
  reversedWord += str[i]
}
console.log(`Reverse with for loop : ${reversedWord}`);



const word = 'hello';
let index=word.length-1;
let newWord=''
while (index>=0) {
newWord +=word[index]

   index--
} 

console.log(`Reverse with while loop : ${newWord}`);
//
//task-6
let result = "";

for (let i = 0; i < 6; i++) {
  let str = "";

  for (let j = 0; j < 10; j++) {
    if (i === 0 || i === 5 || j === 0 || j === 9) {
      str += "*";
    } else {
      str += "-";
    }
  }

  result += str + "\n";
}

console.log(result);
