function solution(k, tangerine) {
    var answer = 0;
    const map = new Map();
    tangerine.forEach((size) => {
        if(map.has(size)) {
            map.set(size, map.get(size) + 1)
        } else {
            map.set(size, 1);
        }
    })
    const sortMap = [...map.entries()].sort((a, b) => b[1] - a[1]);
    
    sortMap.forEach((data) => {
        if(k > 0) { 
            k = k-data[1];
            answer++;
        } else {
            return; 
        }
    })
    
    return answer;
}