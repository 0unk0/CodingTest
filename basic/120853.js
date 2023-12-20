// 컨트롤 제트

function solution(s) {
  var answer = 0;

  const array = s.split(" ");

  for (let i = 0; i < array.length; i++) {
    if (array[i + 1] === "Z") {
      i++;
    } else {
      answer += parseInt(array[i]);
    }
  }
  return answer;
}
