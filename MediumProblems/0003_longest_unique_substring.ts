//generally works but takes too long
function lengthOfLongestSubstring(s: string): number {
    let map = new Map()
    let max = 0;
    for (let i = 0; i < s.length; i++){
        if(!map.has(s[i])){
            console.log("new");
            map.set(s[i], i);
            max = Math.max(max, map.size);
            if(map.size == s.length){
                return s.length;
            }
        }else{
            console.log("duplicate")
            i = map.get(s[i]);
            console.log(max);
            map.clear();
        }
    }
    return max;
};

//New attempt
function lengthOfLongestSubstringV2(s: string): number{
    let left = 0;
    let max = 0;
    let charSet = new Set();

    //TS complains that this isnt for-of but i find this more readeable
    for (let right = 0; right < s.length; right++){
        while(charSet.has(s[right])){
            charSet.delete(s[left])
            left++;
        }
        charSet.add(s[right]);
        max = Math.max(max, charSet.size);
    }
    return max;
}