function xorOperation(n: number, start: number): number {
    let arr: number[] = [];
    for(let i = 0; i < n; i++){
        arr.push(start + 2*i);
    }
    while(arr.length>1){
        let x = arr.shift();
        let y = arr.shift();
        arr.unshift(x!^y!);
    }
    return arr[0];
};