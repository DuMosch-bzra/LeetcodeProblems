function judgeCircle(moves: string): boolean {
    let x=0;
    let y=0;
    for(const c of moves){
        switch(c){
            case "U":
                y++;
                break;
            case "D":
                y--;
                break;
            case "L":
                x--;
                break;
            case "R":
                x++;
                break;
            default:
                break;
        }
    }
    return x===0 && y===0;
};