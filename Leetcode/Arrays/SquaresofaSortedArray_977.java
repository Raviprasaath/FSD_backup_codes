package Leetcode.Arrays;

public class SquaresofaSortedArray_977 {
    public static void main(String[] args) {
        int [] array = {-4, -1, 0, 3, 10};
        int [] ans = sortedSquares(array);
        for (int i = 0; i < ans.length; i++) {
            System.out.print(ans[i]+" ");
        }
    }
    public static int[] sortedSquares1(int[] nums) {
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
    public static int[] sortedSquares(int[] nums) {
        int left = 0;
        int right = nums.length-1;
        int i = nums.length-1;
        int [] ans = new int[nums.length];
        while (left <= right) {
            if (Math.abs(nums[left]) < Math.abs(nums[right])) {
                ans[i] = nums[right] * nums[right];
                right--;
            } else {
                ans[i] = nums[left] * nums[left];
                left++;
            }
            i--;
        }
        return ans;
    }
}
