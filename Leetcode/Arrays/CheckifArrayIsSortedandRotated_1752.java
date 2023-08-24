package Leetcode.Arrays;

public class CheckifArrayIsSortedandRotated_1752 {
    public static void main(String[] args) {
    int [] arr = {3,4,5,1,2};
    System.out.println(check(arr));
    }   
    public static boolean check(int[] nums) {
        int count = 0;
        for (int i=0; i<nums.length-1; i++) {
            if (nums[i] > nums[i+1]) {
                count++;
            }
        }
        if (nums[0] < nums[nums.length-1]) {
            count++;
        }
        return (count<=1);
    } 
}
