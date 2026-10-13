function differenceOfSum(nums: number[]): number {
    let esum = 0;
    let dsum = 0;
    for(let i of nums){
        esum += i;

        while (i > 0){
            dsum += i % 10;
            i = Math.floor(i/10);
        }
    }
    return Math.abs(esum-dsum);
};