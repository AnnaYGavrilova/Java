let a = Math.floor(Math.random() * 100);
console.log(a)
if (a >10){
    a=a
}  
else{
    a=a*2 
}
if (a>5){
    a=a*2+1
}
else{
     if (a<3){
        a=1
     }
     else{
        a=2*(a-2)
     }
     if (a>4){
        a=5
    }
     else{
        if (a%2==0){
            a=6
        } 
        else{
            a=7
        }
    }
}
console.log(a)
        





//(a > 10 ? a : a * 2) > 5 ? (2 * a) + 1 : (a < 3 ? 1 : 2 * (a - 2)) > 4 ? 5 : (a % 2 == 0 ? 6 : 7);

// условие с условным (тернарным) оператором перевести в if...else И switch()
// результат выводить в консоль, с пощью console.log()