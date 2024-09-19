/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum1 = function(nums, target) {
    for (let i = 0;i<nums.length;i++){
        for(j=i+1;j<nums.length;j++){
            if(nums[i]+nums[j]===target){
                return [i,j];
            }
        }
    }
};

var twoSum2 = function(nums, target) {
    const numIndex = new Map();
    for (let i = 0; i < nums.length; i++) {
        const difference = target - nums[i];
        if (numIndex.has(difference)) {
            return [numIndex.get(difference), i];
        }
        numIndex.set(nums[i], i);
    }
};

const nums = [2, 7, 11, 15];
const target = 9;

const result1 = twoSum1(nums, target);
const result2 = twoSum2(nums, target);

console.log('result 1',result1);
console.log('result 2',result2);