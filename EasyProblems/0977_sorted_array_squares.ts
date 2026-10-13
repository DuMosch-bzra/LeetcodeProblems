function sortedSquares(nums: number[]): number[] {
    return nums
        .map((value: number) => value * value)
        .sort((a: number, b: number) => a - b);
}