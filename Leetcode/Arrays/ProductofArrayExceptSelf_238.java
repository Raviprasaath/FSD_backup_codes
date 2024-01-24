package Leetcode.Arrays;

public class ProductofArrayExceptSelf_238 {
    public static void main(String[] args) {
        int [] nums = {1,2,3,4};
        int [] ans = productExceptSelf(nums);
        for (int i=0; i<nums.length; i++) {
            System.out.print(ans[i]+" ");
        }

    }
    public static int[] productExceptSelf1(int[] nums) {
        int [] array = new int [nums.length];
        array[0] = 1;
        for (int i=1; i<nums.length; i++) {
            array[i] = nums[i-1] * array[i-1];
        }
        int temp = 1;
        for (int i=nums.length-2; i>=0; i--) {
            array[i] *= nums[i+1] * temp;
            temp *= nums[i+1];
        }
        return array;
    }
    public static int[] productExceptSelf(int[] nums) {
        int multi = 1;
        int count = 0;
        boolean flag = false;
        for (int i=0; i<nums.length; i++) {
            if (nums[i] != 0) {
                multi *= nums[i];
            } else {
                count++;
                flag = true;
            }
        }
        if (count == nums.length || nums.length > 2 && count >= 2) multi = 0;
        for (int i=0; i<nums.length; i++) {
            if (!flag) {
                nums[i] = multi/nums[i];
            } else if (flag) {
                if(nums[i] != 0) {
                    nums[i] = 0;
                } else {
                    nums[i] = multi;
                }
            }
        }
        return nums;
    }
}
