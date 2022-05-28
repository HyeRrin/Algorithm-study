function solution(id_list, report, k) {
  let answer = new Array(id_list.length).fill(0);
  const reportList = {};

  id_list.map((v) => {
    reportList[v] = [];
  });

  report.map((v) => {
    const [userId, reportId] = v.split(" ");
    if (!reportList[reportId].includes(userId)) {
      reportList[reportId].push(userId);
    }
  });

  for (const key in reportList) {
    if (reportList[key].length >= k) {
      reportList[key].map((user) => {
        answer[id_list.indexOf(user)] += 1;
      });
    }
  }

  return answer;
}
