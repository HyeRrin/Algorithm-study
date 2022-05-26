function solution(new_id) {
  let answer = "";
  const specialChar = [
    "~",
    "!",
    "@",
    "#",
    "$",
    "%",
    "^",
    "&",
    "*",
    "(",
    ")",
    "=",
    "+",
    "[",
    "{",
    "]",
    "}",
    ":",
    "?",
    ",",
    "<",
    ">",
    "/",
  ];

  // 1단계
  new_id = new_id.toLowerCase();

  // 2단계, 3단계
  for (let i = 0; i < new_id.length; i++) {
    if (specialChar.indexOf(new_id[i]) > -1) {
      continue;
    } else {
      if (new_id[i] === "." && answer[answer.length - 1] === ".") {
        continue;
      } else {
        answer += new_id[i];
      }
    }
  }

  // 4단계
  for (let i = 0; i < answer.length; i++) {
    if (answer[0] === ".") {
      answer = answer.substring(1, answer.length);
    }
    if (answer[answer.length - 1] === ".") {
      answer = answer.substring(0, answer.length - 1);
    }
  }

  // 5단계
  if (answer === "") {
    answer += "aaa";
  }

  // 6단계
  if (answer.length > 15) {
    answer = answer.substring(0, 15);
    if (answer[answer.length - 1] === ".") {
      answer = answer.substring(0, answer.length - 1);
    }
  }

  // 7단계
  if (answer.length < 3) {
    while (answer.length < 3) {
      answer += answer[answer.length - 1];
    }
  }

  return answer;
}
