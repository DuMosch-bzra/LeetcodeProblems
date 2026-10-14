function maximumWealth(accounts: number[][]): number {
    let max = 0;
    for(const wealth of accounts){
        let temp = 0;
        for (const d of wealth){
            temp += d;
        }
        max = Math.max(max,temp);
    }
    return max;
};