function isPalindrome(x: number): boolean {
    let reversed = 0;
    while(x > 0) {
        reversed = reversed * 10 + x % 10;
        if(reversed === x){
            return true;
        }
        x = Math.floor(x / 10);
    }
    return false;
};