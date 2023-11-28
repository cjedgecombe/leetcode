/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
  // create a variable to store max area
  let maxArea = 0;
  // create left and right pointers, place at beginning and end of array
  l = 0;
  r = height.length - 1;
    // while the index of the left and riht pointers is not the same
    while (l !== r) {
        // calculate the max area and record if it is larger than the current max area
        let potentialMax = (Math.min(height[l], height[r])) * (r - l);

        if (potentialMax > maxArea) {
            maxArea = potentialMax;
        }

        // shift whichever pointer rests on a lower value
        if (height[l] < height[r]) {
            l++;
        } else if (height[r] < height[l]) {
            r--;
        // if both pointers rest on the same value, shift whichever will move to the greatest value
        } else if (height[r] === height[l]) {
            if (height[r - 1] > height[l + 1]) {
                r--;
            } else {
                l++;
            }
        }
    }
    // return the maximum area
    return maxArea;
};