package Leetcode.Arrays;

public class MaximumSumWithExactlyKElements_2656 {
    public static void main(String[] args) {
        int [] nums = {1,2,3,4,5};
        int k = 3;
        System.out.println(maximizeSum(nums, k));
    }
    public static int maximizeSum(int[] nums, int k) {
        int sum = 0, max = Integer.MIN_VALUE;

        for (int i=0; i<nums.length; i++) {
            max = Math.max(nums[i], max);
        }
        for (int i=0; i<k; i++) {
            sum += max++;
        }
        return sum;
    }
}
