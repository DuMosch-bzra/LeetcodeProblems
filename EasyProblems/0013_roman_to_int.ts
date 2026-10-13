//first solution
function romanToInt(s: string): number {
    const array = s.split('')
    let res = 0;
    for (let i=0; i < array.length; i++){
        let j=i+1;
        switch(array[i]){
            case 'M':
                res += 1000;
                break;
            case 'D':
                res += 500;
                break;
            case 'C':
                if(array[j] === 'M'){
                    res += 900;
                    i++
                    break;
                }
                else if(array[j]==='D'){
                    res += 400;
                    i++
                    break;
                }
                else{
                    res += 100;
                    break;
                }
            case 'L':
                res += 50;
                break;
            case 'X':
                if(array[j] === 'C'){
                    res += 90;
                    i++
                    break;
                }
                else if(array[j]==='L'){
                    res += 40;
                    i++
                    break;
                }
                else{
                    res += 10;
                    break;
                }
            case 'V':
                res += 5;
                break;
            case 'I':
                if(array[j] === 'X'){
                    res += 9;
                    i++
                    break;
                }
                else if(array[j]==='V'){
                    res += 4;
                    i++
                    break;
                }
                else{
                    res += 1;
                    break;
                }
            default:
                break;
        }
    };
    return res;
};

//Better solution
function romanToIntV2(s: string): number {
    const map: Record<string, number> = {
        'I': 1,
        'V': 5,
        'X': 10,
        'L': 50,
        'C': 100,
        'D': 500,
        'M': 1000
    };

    let res = 0;
    for (let i = 0; i < s.length; i++) {
        const currentVal = map[s[i]];
        const nextVal = map[s[i + 1]];
        if(currentVal < nextVal) {
            res -= currentVal;
        } else {
            res += currentVal;
        }
    };
    return res;
}; 

