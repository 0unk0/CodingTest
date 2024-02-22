function solution(n)
{
    return n.toString().split("").reduce((acc, val) => acc + parseInt(val), 0);
}