function solution(nums) {
  let tmp = nums
    .sort((a, b) => a - b)
    .filter((v, i) => nums[i] !== nums[i + 1]);
  return nums.length / 2 < tmp.length ? nums.length / 2 : tmp.length;
}
