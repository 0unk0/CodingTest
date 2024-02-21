function solution(arr) {
    var answer = arr.filter((n) => {return n != Math.min(...arr)});
    return answer.length > 0 ? answer : [-1];
}