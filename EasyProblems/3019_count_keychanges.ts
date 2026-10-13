function countKeyChanges(s: string): number {
    s = s.toLowerCase();
    let count = 0;
    while(s.length>0){
        if(s[1]!==s[0]){
            count++
        }
        s = s.substring(1, s.length);
    }
    return count-1;
};