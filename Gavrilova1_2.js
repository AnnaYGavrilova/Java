let a = Math.floor(Math.random() * 100);
console.log(a)
switch (a >10){
    case true:
        a=a
        break
    case false:
        a=a*2 
}
switch (a>5){
    case true:
        a =a*2+1
        break
    case false:
        switch (a<3){
            case true:
               a=1
               break
            case false:
                a=2*(a-2)
        }
        switch (a>4){
            case true:   
                 a=5
                 break
            case false:
                switch (a%2==0){
                    case true: 
                        a=6
                        break
                    case false:
                 }        a=7
        }
    
}
console.log(a)




//(a > 10 ? a : a * 2) > 5 ? (2 * a) + 1 : (a < 3 ? 1 : 2 * (a - 2)) > 4 ? 5 : (a % 2 == 0 ? 6 : 7);

// условие с условным (тернарным) оператором перевести в if...else И switch()
// результат выводить в консоль, с пощью console.log()