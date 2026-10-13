function missingNumber(nums: number[]): number {
    let total = 0;
    for (let i = 1; i <= nums.length; i++){
        total += i;
    }
    for (const num of nums){
        total -= num;
    }
    return total;
};

//Better memory, runs longer
function missingNumberXOR(nums: number[]): number{
    let n = nums.length;
    nums.sort((a, b) => a-b);
    for (let i = 0; i < n; i++){
        if(nums[i]!==i){
            return i;
        }
    }
    return 0;
}