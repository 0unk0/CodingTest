function solution(arr, divisor) {
    const answer = arr.filter((n)=> {return n % divisor === 0}).sort((a, b) => {return a - b});
    return answer.length > 0 ? answer : [-1];
}