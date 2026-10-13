function firstUniqChar(s: string): number {    
    let map = new Map<string, number>();
    for (const c of s){
        map.set(c, (map.get(c) ?? 0) + 1)
    }
    for (const arr of map){
        if(arr[1]===1){
            return s.indexOf(arr[0]);
        }
    }
    return -1;
};