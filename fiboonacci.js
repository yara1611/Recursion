
function fibs(n){
    console.log("This was printed recursively");

    if(n<=0){
       
        return 0;
    }
    if(n===1){
        
        return 1
    }
    let sum= fibs(n - 1) + fibs(n - 2);
    return sum
}

function sequence(n){
    let s=[]
    for (let i = 0; i < n; i++) {
        
        s.push(fibs(i))
    }
    return s
}

console.log(sequence(4))