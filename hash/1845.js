// 폰켓몬

function solution(nums) {
  const set = new Set(nums);
  const max = nums.length / 2;
  const answer = set.size >= max ? max : set.size;
  return answer;
}
