package Leetcode.Arrays;

public class RotateArray_189 {
    public static void main(String [] args) {
        int [] nums = {1,2,3,4,5,6,7};
        int k = 3;
        rotate(nums, k);
        for (int i=0; i<nums.length; i++) {
            System.out.print(nums[i]+" ");
        } 
    }
    public static void rotate(int[] nums, int k) {
        k = k % nums.length;
        reverse(nums, 0, nums.length-1);
        reverse(nums, 0, k-1);
        reverse(nums, k, nums.length-1);
    }
    public static void reverse(int [] nums, int left, int right) {
        while (left < right) {
            swap(nums, left++, right--);
        }
    }
    public static void swap(int [] nums, int left, int right) {
        int temp = nums[left];
        nums[left] = nums[right];
        nums[right] = temp;
    }
}
