function findDisappearedNumbers(nums: number[]): number[] {
    let n = nums.length;
    let arr: number[] = [];
    let map = new Map<number, number>();
    for (let i = 1; i <= n; i++){
        map.set(i, 0)
    }
    for (const num of nums){
        map.set(num, num)
    }
    map.forEach((v: number, k: number)=>{
        if(v!==k){
            arr.push(k);
        }
    })
    return arr;
};

//needs improvement