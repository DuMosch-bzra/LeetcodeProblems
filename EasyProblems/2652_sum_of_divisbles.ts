//simple functional version
function sumOfMultiples(n: number): number {
    let sum = 0;
    for(let i = 1; i <= n; i++){
        if(
            i%3===0||
            i%5===0||
            i%7===0
        ){
            sum += i
        }
    }
    return sum;
};

//faster approach using gauss' sum -> 1+2+....+n = (n(n+1))/2
function sumOfMultiplesV2(n: number): number {
    let r = gaussStep(n, 3) + gaussStep(n, 5) + gaussStep(n, 7);
    r -= gaussStep(n, 3*5) + gaussStep(n, 3*7) + gaussStep(n, 5*7);
    r += gaussStep(n, 3*5*7);
    return r;
}
/*
function gauss(n: number, step: number): number {
    let lim = Math.floor(n/step);
    return step * ((lim*(lim+1))/2);
}
implemented in HelperFunctions/gauss.ts
*/