function checkIfPangram(sentence: string): boolean {
    let set = new Set<string>();
    for (const c of sentence){
        set.add(c);
    }
    return set.size === 26;
};