export const getGlobalStats = (arr, p1, p2)=>{
    return arr.reduce((prev, curr)=>{
        return prev+curr[p1][p2];
    }, 0);
}