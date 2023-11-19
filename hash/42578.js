// 의상

function solution(clothes) {
  let answer = 1;

  const map = new Map();
  clothes.forEach((item) => {
    if (map.has(item[1])) {
      map.set(item[1], map.get(item[1]) + 1);
    } else {
      map.set(item[1], 1);
    }
  });

  for (const num of map.values()) {
    answer *= num + 1;
  }

  return answer - 1;
}
