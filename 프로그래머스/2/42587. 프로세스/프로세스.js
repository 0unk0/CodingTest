function solution(priorities, location) {
    var answer = 0;
    let queue = priorities.map((priorities, index) => { return {priorities, index}});
    
    while(queue.length > 0) {
        let current = queue.shift();
        let isLow = queue.some(e => current.priorities < e.priorities);
        
        if(isLow) {
            queue.push(current);
        } else {
            answer++;
            
            if(current.index === location) {
                break;
            }
        }        
    } 
    
    return answer;
}