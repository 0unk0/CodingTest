// 주식가격

function solution(prices) {
  var answer = [];

  for (let i = 0; i < prices.length; i++) {
    answer[i] = 0;
    for (let j = i + 1; j < prices.length; j++) {
      answer[i] += 1;
      if (prices[i] > prices[j]) {
        break;
      }
    }
  }
  return answer;
}
