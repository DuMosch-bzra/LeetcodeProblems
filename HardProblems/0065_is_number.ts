const digitSet = initDigitSet();
const symbolSet = new Set<string>;
    symbolSet.add("+");
    symbolSet.add("-");
    symbolSet.add(".");

function isNumber(s: string): boolean {
    s = s.toLowerCase();
    
    let base = s;
    if(s.includes('e')){

        base = s.split('e')[0];

        if(base ===""){
            return false;
        }

        let exponents = s.split('e');
        exponents.shift();
        
        if(exponents?.length !== 1){
            return false;
        }
        for (const e of exponents){
            if(!isInt(e)){
                return false;
            }
        }
    }
    if(!isFloat(base)){
        return false;
    }
    return true;
}

function isInt(s: string): boolean{
    if(s.includes('.')){
        return false;
    }
    if(!isFloat(s)){
        return false;
    }
    return true;
}

function isFloat(s: string): boolean{
    let num = String(Number.parseFloat(s));
    if(num === "NaN"){
        return false;
    }
    for (const sym of symbolSet){
        if(sym !== "."){
            if(s.includes(sym) && !s.startsWith(sym)){
                return false;
            }
        }
        if(s.indexOf(sym)!==s.lastIndexOf(sym)){
            return false;
        }
    }
    for (const dig of s){
        if(!digitSet.has(dig)){
            return false;
        }
    }
    return true;
}

function initDigitSet(): Set<string>{
    let s = new Set<string>();
    for(let i = 0; i<= 9; i++){
        s.add(String(i));
    }
    s.add("+");
    s.add("-");
    s.add(".");    
    return s;
}