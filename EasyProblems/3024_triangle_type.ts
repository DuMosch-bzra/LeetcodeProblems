function triangleType(nums: number[]): string {
    if(nums[0] === nums[1] && nums[0] === nums[2]){
        return "equilateral"
    }
    for(let i = 0; i < nums.length; i++){
        let j = (i+1)%3;
        let k = (i+2)%3;
        if(nums[i]+nums[j] < nums[k]){
            return "none";
        }
        if(nums[i]===nums[j]){
            return "isosceles"
        }
    }
    return "scalene"
};