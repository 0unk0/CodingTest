// 올바른 괄호
// 시간 초과,,,

function solution(s) {
  let answer = true;
  let stack = [];

  for (let i = 0; i < s.length; i++) {
    if (s[i] === "(") {
      stack.push(s[i]);
    } else {
      if (stack.pop() !== "(") {
        answer = false;
      }
    }
  }

  if (stack.length > 0) {
    answer = false;
  }

  return answer;
}
