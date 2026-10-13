function myAtoi(s: string): number {
    let digits = initDigitMap();
    let mult = 1;
    let array: number[] = [];
    let res = 0;

    while(s.startsWith(" ")){
        s = s.substring(1, s.length);
    }
    if(s.startsWith("-")||s.startsWith("+")){
        mult = s.startsWith("-")? -1 : 1;
        s = s.substring(1, s.length);
    }
    while(s.startsWith("0")){
        s = s.substring(1, s.length);
    }
    for (const char of s){
        let val = digits.get(char);
        if(digits.has(char)){
            if(val!==undefined){
                array.push(val);
            }
        }else{
            break;
        }
    }

    for (let i = 0; i < array.length; i++){
        res += Math.pow(10, array.length-1-i)*array[i]
    }

    res *= mult;

    const intMax = Math.pow(2, 31) -1;
    const intMin = -1*Math.pow(2, 31);

    res = Math.min(res, intMax);
    res = Math.max(res, intMin);

    return res;

};

function initDigitMap(): Map<string, number>{
    let s = new Map<string, number>();
    for(let i = 0; i<= 9; i++){
        s.set(String(i), i);
    }
    return s;
}
