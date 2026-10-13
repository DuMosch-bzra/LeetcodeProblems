function mostWordsFound(sentences: string[]): number {
    let max = 0;
    for(const s of sentences){
        max = Math.max(max, s.split(' ').length);
    }
    return max;
};