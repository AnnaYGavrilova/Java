let a = Math.floor(Math.random() * 20) + 1;
console.log(`a=${a}`);
let x = ' '
if (a >10){
    x += 'a is bigger than 10'
}
else{
    x += 'a is less than or equal to 10'
    if (a==5){
        x += 'an example of special case'  
    }
}
if (a==15){
    x += 'but a is not 15'
}
if (a>5){
    x += 'and a is greater than 5'
}
else{
    x += ' and a is less than or equal'
}
if (a%2 ==0){
    x += ' and a is odd'
}
else{
    x +=' and a is even'
}
console.log(x)


// условие с условным (тернарным) оператором перевести в if...else И switch()
// результат выводить в консоль, с пощью console.log()