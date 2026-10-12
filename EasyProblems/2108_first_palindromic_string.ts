function firstPalindrome(words: string[]): string {
    for (const element of words){
        let split = element.split('').reverse();
        if (element === split.join('')){
            return element;
        }
    }
    return "";
};