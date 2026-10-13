function findDifferentBinaryString(nums: string[]): string {
    let arr = [];
    for(let i = 0; i<nums.length; i++){
        const bin = nums[i];
        arr.push(bin[nums.length-i-1]==="0"?"1":"0");
    }
    return arr.toReversed().join('');
};