package Leetcode.Arrays;

public class SortAnArray_912 {
    public static void main(String[] args) {
        int [] nums = {5,2,3,1};
        int [] ans = sortArray(nums);
        for (int i = 0; i < nums.length; i++) {
            System.out.print(ans[i]+" ");
        }
    }
    public static int[] sortArray(int[] nums) {
        quickSort(nums, 0, nums.length-1);
        return nums;
    }
    public static void quickSort(int [] nums, int left, int right) {
        if (left >= right) return;
        int start = left;
        int end = right;
        int pivot = nums[end];
        while (start <= end) {
            while (nums[start] < pivot) start++; 
            while (nums[end] > pivot) end--; 
            if (start <= end) {
                int temp = nums[start];
                nums[start] = nums[end];
                nums[end] = temp;
                start++;
                end--;
            }
        }
        quickSort(nums, left, end);
        quickSort(nums, start, right);
    }
}
