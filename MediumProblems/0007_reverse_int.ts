function reverse(x: number): number {
    let negative = x<0 ? -1 : 1;
    let reversed = 0;
    x = Math.abs(x);
    while(x>0){
        reversed = reversed*10 + x%10;
        x = Math.floor(x/10);
    }
    if(isInt32(reversed*negative)){
        return reversed*negative;
    }
    return 0;
};

function isInt32(n:number):boolean{
    const intMax = Math.pow(2, 31) -1;
    const intMin = -1*Math.pow(2, 31);

    if(n > intMax || n < intMin){
        return false;
    }
    return true;
}