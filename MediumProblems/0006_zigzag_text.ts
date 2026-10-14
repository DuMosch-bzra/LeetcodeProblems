function convert(s: string, numRows: number): string {
    if(numRows === 1){
        return s;
    }
    let arrays: string[][] = initArray(numRows);
    let array: string[] = [];
    let counter = 0;
    let upOrDown = -1
    for (const c of s){
        if(counter === 0 || counter === numRows-1){
            upOrDown *= -1 
        }
        arrays[counter].push(c);
        counter += upOrDown;
    }
    for (const a of arrays){
        array = array.concat(a);
    }
    return array.join('');
};

function initArray(n: number): string[][]{
    let a: string[][] = [];
    for (let i = 0; i < n; i++){
        a.push([])
    }
    return a;
}