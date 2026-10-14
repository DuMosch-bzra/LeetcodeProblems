function gaussStep(n: number, step: number): number{
    let lim = Math.floor(n/step);
    return step * ((lim*(lim+1))/2);
}

function gauss(n: number): number{
    return (n*(n+1))/2;
}

function gaussRangeIncluding(start: number, end: number):number{
    return ((end -start + 1)*((start + end)/2))
}