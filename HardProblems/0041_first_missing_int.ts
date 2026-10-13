function firstMissingPositive(nums: number[]): number {
    nums.sort((a,b)=>a-b);
    let count = 1;
    while(nums[0]<=0){
        nums.shift();
    }
    while(nums[0]===count){
        if(nums[1]!==count){
            count++
        }
        nums.shift();
    }
    return count;
};

//solution is slow, needs improvement