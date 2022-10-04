export function fact(n: number){
    let factorial = 1;
    if(n > 16 || n < 0){
        factorial = 0;
    }else{
        for(let i = 0; i < n; i++){
            factorial = factorial * (i+1);
        }
    }

    return factorial;
}