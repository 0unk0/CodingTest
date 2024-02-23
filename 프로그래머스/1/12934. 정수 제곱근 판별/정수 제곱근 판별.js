function solution(n) {
    const x = Math.sqrt(n);
    return (Number.isInteger(x)) ? Math.pow(x + 1, 2) : -1;
}