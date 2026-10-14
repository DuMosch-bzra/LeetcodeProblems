function canAliceWin(nums: number[]): boolean {
    const digits = nums.filter((a) => Math.floor(a / 10) === 0);
    const sum = nums.reduce((a, b) => a + b, 0);
    let digitSum = 0;
    if (digits.length !== 0) {
        digitSum = digits.reduce((a, b) => a + b, 0);
    }
    return digitSum * 2 !== sum;
}