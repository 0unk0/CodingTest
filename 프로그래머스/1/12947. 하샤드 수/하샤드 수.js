function solution(x) {
    const sum = x.toString().split("").reduce((acc, num) => acc + parseInt(num), 0);
    return !(x % sum);
}