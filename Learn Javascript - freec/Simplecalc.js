// //Simple calculator without inputs 
// function simpleCalc(a, b){
//     console.log(a + b);
// }
// simpleCalc(60, 9)


function switchStatement(val){
    var answer = ""; 
    switch(val){
        case 1:
         answer = "alpha"; 
         break; 
        case 2:
         answer = "beta"; 
         break; 
        case 3: 
         answer = "omega"; 
         break; 
        case 4: 
         answer = "theta"; 
         break; 
        case 5: 
         answer = "Kanye"; 
         break; 
        default: 
         answer = "Stuff"
         break; 
    }
    return answer; 
    }

console.log(switchStatement(51))
