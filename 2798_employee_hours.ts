function numberOfEmployeesWhoMetTarget(hours: number[], target: number): number {
    let count = 0;
    for(const hour of hours){
        if(hour >= target){
            count++;
        }
    }
    return count;
};