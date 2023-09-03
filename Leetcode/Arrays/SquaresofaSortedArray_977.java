package Leetcode.Arrays;

public class SquaresofaSortedArray_977 {
    public static void main(String[] args) {
        int [] array = {-4, -1, 0, 3, 10};
        int [] ans = sortedSquares(array);
        for (int i = 0; i < ans.length; i++) {
            System.out.print(ans[i]+" ");
        }
    }
    public static int[] sortedSquares(int[] nums) {
        int [] ans = new int[nums.length];
        int l = 0;
        int r = nums.length-1;
        int i = nums.length-1;
        while (l <= r) {
            if (Math.abs(nums[l]) > Math.abs(nums[r])) {
                ans[i--] = nums[l] * nums[l++];
            } else {
                ans[i--] = nums[r] * nums[r--];
            }
        }
        return ans;
    }
}
