function solution(hp) {
    var answer = parseInt(hp / 5) + parseInt(hp % 5 / 3) + parseInt(hp % 5 % 3);
    return answer;
}