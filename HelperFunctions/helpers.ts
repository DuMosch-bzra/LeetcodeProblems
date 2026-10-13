function gauss(n: number, step: number): number{
    let lim = Math.floor(n/step);
    return step * ((lim*(lim+1))/2);
}