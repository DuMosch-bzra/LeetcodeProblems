function differenceOfSums(n: number, m: number): number {
    return gauss(n)-2*gaussStep(n,m);
};

/*
function gauss(n: number, step: number): number{
    let lim = Math.floor(n/step);
    return step * ((lim*(lim+1))/2);
}
implemented in HelperFunctions/helpers.ts
*/