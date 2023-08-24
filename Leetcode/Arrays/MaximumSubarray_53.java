package Leetcode.Arrays;

public class MaximumSubarray_53 {
    public static void main(String[] args) {
        int [] nums = {-2,1,-3,4,-1,2,1,-5,4};
        System.out.println(maxSubArray(nums));
    }
    public static int maxSubArray(int[] nums) {
        int sum = 0;
        int max = Integer.MIN_VALUE;
        for (int i=0; i<nums.length; i++) {
            sum += nums[i];
            max = Math.max(sum, max);
            if (sum < 0) {
                sum = 0;
            }
        }
        return max;
    }




    public static int maxSubArray1(int[] nums) {
        int max = 0;
        int min = Integer.MIN_VALUE;
        int sum = 0;
        for (int i=0; i<nums.length; i++) {
            sum += nums[i];
            if (sum <= 0) {
                min = Math.max(min, sum);
                sum = 0;
            }
            max = Math.max(sum, max);
        }
        if (max <= 0) {
            return min;
        }
        return max;
    }
}
