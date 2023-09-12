function longestConsecutive(nums: number[]): number {
  if (nums.length === 0) {
    return 0;
  }
  // create result variable to store sequnce length, set to 1
  let result = 1;
  // convert input array into a set
  const numSet = new Set(nums);
  // iterate through the set
  for (const num of numSet) {
    // if current num is the start of a sequence
    if (!numSet.has((num - 1))) {
      // count the number of consecutive elements
      let seqLength = 1;
      let nextNum = num + 1;
      while (numSet.has((nextNum))) {
          seqLength++;
          nextNum++;
      }
      // if consecutive nums count is higher than the current highest count
      if (seqLength > result) {
          // reassign highest count
          result = seqLength;
      }
    }
  }
  // return result
  return result;
};