//task-1
let num=8;
if(num===10){
    console.log("верно");
}else{
    console.log('неверно');

}

//task-2
let apartmentEntrance=+ prompt("введите номер квартиры");
if (apartmentEntrance<0||apartmentEntrance<=20){
    console.log('подъезд №1');
}else if (apartmentEntrance<=21||apartmentEntrance<=48){
    console.log('подъезд №2');
}else if (apartmentEntrance<=49||apartmentEntrance<=90){
    console.log('подъезд №3');
}else{
    console.log("вы ввели несуществующий номер квартиры");
}

//task-3
let number=9;
if(number>0 && number<5){
    console.log('true');

}else {
    console.log("false");
}

//task-4
let number1 = 1;
let number2 = 2;
if ((number1 > 2 && number1 < 11) || (number2 >= 6 && number2 < 14)) {
  console.log("верно");
} else {
  console.log("неверно");
}


//task-5
let player1=prompt("First player,select  your choice from those words:'paper','rock','scissors'");
let player2=prompt("second player,select  your choice from those words:'paper','rock','scissors'");
if(player1==="rock" && player2==="rock" || player1==="paper" && player2==="paper" || player1==="scissors" && player2==="scissors"){
    console.log('draw');

}else if( player1==="rock" && player2==="paper" || player1==="scissors" && player2==="rock" || player1==="paper" && player2==="scissors"){
    console.log('second player won');

}else if (player1==="paper" && player2==="rock" || player1==="scissors" && player2==="paper" || player1==="rock" && player2==="scissors"){
    console.log("first player won");

}else{
    console.log("you wrote incorrect");
}

//task-6

const userPoints=prompt("введите ваши баллы");
if(userPoints>0 && userPoints<=49){
    console.log('ваша оценка:2');
    
}else if(userPoints>=50 && userPoints<=70){
    console.log("ваша оценка:3");
}else if(userPoints>70 && userPoints<=85){
    console.log('ваша оценка:4');
    
}else if(userPoints>85 && userPoints<=100){
    console.log('ваша оценка:5');
    
}else{
    console.log("введите ваши баллы корректно");
}