function countDigits(num: number): number {
    let str = String(num)
    let count = 0;
    for(const c of str){
        if(num % Number.parseFloat(c) === 0){
            count++
        }
    }
    return count;
};