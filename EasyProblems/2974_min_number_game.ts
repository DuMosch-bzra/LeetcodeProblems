function numberGame(nums: number[]): number[] {
    nums.sort((a,b)=>a-b);
    let arr: number[]=[];
    for(let i = 0; i<nums.length; i+2){
        let min = nums.shift();
        let next = nums.shift();
        arr.push(next??0, min??0);
    }
    return arr;
};