package Leetcode.Arrays;

public class RearrangeArrayElementsBySign_2149 {
    public static void main(String [] args) {
        int [] nums = {3,1,-2,-5,2,-4};
        int [] ans = rearrangeArray(nums);
        for (int i = 0; i < ans.length; i++) {
            System.out.print(ans[i] + " ");
        }
    }
    public static int[] rearrangeArray(int[] nums) {
        int [] array = new int[nums.length];
        int k = 0, j = 1;
        for (int i=0; i<nums.length; i++) {
            if (nums[i] < 0) {
                array[j] = nums[i];
                j = j + 2;
            } else {
                array[k] = nums[i];
                k = k + 2;
            }
        }
        return array;
    }
}
