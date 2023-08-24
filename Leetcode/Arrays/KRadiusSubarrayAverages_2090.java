package Leetcode.Arrays;

import java.util.Arrays;

public class KRadiusSubarrayAverages_2090 {
    public static void main(String[] args) {
        int [] array = {7,4,3,9,1,8,5,2,6};
        int k = 3;
        int ans [] = (getAverages(array, k));
        for (int i = 0; i < ans.length; i++) {
            System.out.print(ans[i]+" ");
        }
    }
    public static int[] getAverages(int[] nums, int k) {
        int n = nums.length;
        int size = 2 * k + 1;
        int[] ans = new int[n];
        Arrays.fill(ans, -1);
        
        if (size > n) {
            return ans;
        }

        long sum = 0;

        for (int i = 0; i < size; i++) {
            sum += nums[i];
        }

        for (int i = k; i + k < n; i++) {
            ans[i] = (int) (sum / size);
            if (i + k + 1 < n) {
                sum += nums[i + k + 1] - nums[i - k];
            }
        }

        return ans;
    }
}
