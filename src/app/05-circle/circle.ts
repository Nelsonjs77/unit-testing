export function circle(radio: number){
    let pi = 3.1416;
    let area;
    if(radio == 1 || radio < 0){
        if(radio == 1){
            area = pi;
        }else{
            area = 0;
        }   
    }else{   
        area = pi * (radio * radio);
    }
    
    return area;
}
