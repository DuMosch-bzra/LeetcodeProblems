function isValid(s: string): boolean {
    const map: Record<string, string> = {
        ')':'(',
        ']':'[',
        '}':'{'
    }
    let stack = [];
    for (const c of s){
        if(map[c]===undefined){
            stack.push(c)
        }else if(map[c]!==stack.pop()){
            return false;
        }
    }
    return stack.length===0;
};