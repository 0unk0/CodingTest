function solution(answers) {
    const answer = [];
    var count = [0, 0, 0];
    const n = [[1, 2, 3, 4, 5], 
               [2, 1, 2, 3, 2, 4, 2, 5], 
               [3, 3, 1, 1, 2, 2, 4, 4, 5, 5]]
    
    answers.forEach((a, i) => {
        n.forEach((num, index) => {
            if(a === num[i % num.length ]) { count[index]++ };
        }) 
    });
    
    const max = Math.max(...count);

    count.forEach((e, i) => {
        if (e === max) {
            answer.push(i + 1);
        }
    });
    
    return answer;
}