let a = Math.floor(Math.random() * 20) + 1;
console.log(`a=${a}`);
let x = ' '
switch (a >10){
    case true:
        x += 'a is bigger than 10'
        break
    case false:
        x += 'a is less than or equal to 10'
        switch(a==5){
            case true:
                x += 'an example of special case'
                break
            case false:
                x+= ''    
        }
}  

switch (a==15){
    case true:
        x += 'but a is not 15'
        break
    case false:
        x += ''
}
switch (a>5){
    case true:
        x += 'and a is greater than 5'
        break
    case false:
        x += ' and a is less than or equal'
}
switch(a%2 ==0){
    case true:
        x += ' and a is odd'
        break
    case false:
        x +=' and a is even'
}
console.log(x)
