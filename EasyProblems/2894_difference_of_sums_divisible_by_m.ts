function differenceOfSums(n: number, m: number): number {
    return gauss(n,1)-2*gauss(n,m);
};

/*
function gauss(n: number, step: number): number{
    let lim = Math.floor(n/step);
    return step * ((lim*(lim+1))/2);
}
implemented in HelperFunctions/helpers.ts
*/