function addDigits(num: number): number {
    let res = 0;
    while (num > 0){
        res += (num % 10);
        num = Math.floor(num/10);
    }
    if(Math.floor(res/10)===0){
        return res;
    }
    else{
        return addDigits(res);
    }
};

// Somehow this works??? (not my solution)
function addDigitsV2(num: number): number {
    if(num===0){
        return num;
    }
    return 1 + (num - 1) % 9;
}; 
