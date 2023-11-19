// 완주하지 못한 선수

function solution(participant, completion) {
  let map = new Map();

  participant.forEach((player) => {
    if (map.has(player)) {
      map.set(player, map.get(player) + 1);
    } else {
      map.set(player, 1);
    }
  });

  completion.forEach((player) => {
    if (map.get(player) > 1) {
      map.set(player, map.get(player) - 1);
    } else {
      map.delete(player);
    }
  });

  return [...map.keys()][0];
}
