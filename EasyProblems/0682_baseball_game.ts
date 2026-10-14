function calPoints(operations: string[]): number {
    let arr = []
    let res = 0;
    for(const op of operations){
        if(!Number.isNaN(Number.parseFloat(op))){
            arr.push(Number.parseFloat(op));
        }
        if(op === "C"){
            arr.pop();
        }
        if(op === "D"){
            arr.push(arr.at(-1)!*2)
        }
        if(op === "+"){
            arr.push(arr.at(-1)!+arr.at(-2)!)
        }
    }
    for(const n of arr){
        res += n;
    }
    return res;
};