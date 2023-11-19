// 카드 뭉치

function solution(cards1, cards2, goal) {
  var answer = "Yes";

  goal.forEach((card) => {
    if (card === cards1[0]) {
      cards1.shift();
    } else if (card === cards2[0]) {
      cards2.shift();
    } else {
      answer = "No";
    }
  });

  return answer;
}
