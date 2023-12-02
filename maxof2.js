let x = 3;
let y = 3;

const maxOfTwo=(x,y)=>{
    if(x === y){
        return ("The values are identical");
    } else if(x > y){
        return x;
    } else {
        return y;
    }
}
console.log(maxOfTwo(x,y));