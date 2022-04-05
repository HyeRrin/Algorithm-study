function solution(skill, skill_trees) {
  let answer = 0;
  let tmp = [];
  let order = skill.split(""); // ["C", "B", "D"]

  // skill_trees에서 skill에 해당되는 알파벳만 골라내기
  for (let i = 0; i < skill_trees.length; i++) {
    answer++;
    skill_trees[i] = skill_trees[i].split("");
    let filteredSkill = [];
    for (let j = 0; j < skill_trees[i].length; j++) {
      for (let k = 0; k < order.length; k++) {
        // skill에 해당되는 알파벳의 index들을 배열에 저장
        if (skill_trees[i][j] === order[k]) {
          filteredSkill.push(k);
        }
      }
    }
    tmp.push(filteredSkill);
  }

  for (let p = 0; p < tmp.length; p++) {
    for (let q = 0; q < tmp[p].length; q++) {
      // 앞뒤 차이가 1이거나 첫순서에 첫번째 스킬이 오지 않으면 빼주기
      if (tmp[p][q] - tmp[p][q - 1] > 1 || tmp[p][0] !== 0) {
        answer--;
        break;
      }
    }
  }
  return answer;
}
