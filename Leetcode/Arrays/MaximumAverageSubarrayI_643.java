package Leetcode.Arrays;

public class MaximumAverageSubarrayI_643 {
    public static void main(String[] args) {
        int [] array = {1,12,-5,-6,50,3};
        int k = 4;
        System.out.println(findMaxAverage(array, k));
    }

    public static double findMaxAverage(int[] nums, int k) {
        double sum = 0;
        for (int i = 0; i < k; i++) {
            sum += nums[i];
        }
        double max = sum;

        for (int i = k; i < nums.length; i++) {
            sum += nums[i] - nums[i - k];
            max = Math.max(max, sum);
        }
        return max / k;
    }
}
