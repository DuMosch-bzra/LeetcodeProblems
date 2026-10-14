//two solutions same speed
function arraySign(nums: number[]): number {
    let str = nums.join();
    let count = 0;
    if(nums.includes(0)){
        return 0;
    }
    while(str !== ""){
        if(str.startsWith("-")){
            count++;
        }
        str = str.substring(1, str.length);
    }
    return count%2===0 ? 1 : -1;
};

function arraySignV2(nums: number[]): number {
    let product = 1;
    for(const n of nums){
        product *= n;
    }
    if(product > 0){
        return 1;
    }
    if(product < 0){
        return -1;
    }
    return 0;
};