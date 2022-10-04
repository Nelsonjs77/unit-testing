export function pow(x: number, n: number) {
    let num = x;
    if(n == 0 || n < 0){
        if(n==0){
            num = 1;    
        }else{
            num = 0;
        }
    }else{
        for (let i = 0; i< n; i++){
            if(i != 0){
                let resultado = num;
                num = resultado*x;
            }
        }
    }
        return num;
}