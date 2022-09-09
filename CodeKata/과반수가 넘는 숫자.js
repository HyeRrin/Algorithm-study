function moreThanHalf(nums) {
  nums = nums.sort();

  let length = 0;
  let maxLength = 0;
  let majorityNum = nums[0];

  for (let i = 0; i < nums.length; i++) {
    length++;
    if (nums[i] !== nums[i + 1]) {
      if (maxLength < length) {
        maxLength = length;
        majorityNum = nums[i];
      }
      length = 0;
    }
  }

  return majorityNum;
}
