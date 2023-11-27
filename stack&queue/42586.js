// 기능개발

function solution(progresses, speeds) {
  var answer = [1];
  let index = 0;

  progresses.forEach((progress, index) => {
    progresses[index] = Math.ceil((100 - progress) / speeds[index]);
  });

  for (let j = 1; j < progresses.length; j++) {
    if (progresses[index] >= progresses[j]) {
      answer[answer.length - 1] += 1;
    } else {
      index = j;
      answer.push(1);
    }
  }
  return answer;
}
