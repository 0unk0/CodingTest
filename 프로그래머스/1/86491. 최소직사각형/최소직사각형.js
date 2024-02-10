function solution(sizes) {
    sizes.forEach(s => s.sort((a, b) => {return  b - a}));
    const a = sizes.map(item => item[0]).sort((a, b) => {return  b - a})[0];
    const b = sizes.map(item => item[1]).sort((a, b) => {return  b - a})[0];
    return a * b;
}