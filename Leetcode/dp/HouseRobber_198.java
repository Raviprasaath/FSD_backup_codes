package Leetcode.dp;

public class HouseRobber_198 {
    public static void main(String[] args) {
        int [] array = {1,2,3,1};
        System.out.println(rob(array));

    }
    public static int rob(int[] nums) {

        return maxAmount(0, nums);
    }

    public static int maxAmount(int i, int [] nums) {

        if (i >= nums.length) {
            return 0;
        }

        int temp1 = (maxAmount(i+1, nums));
        int temp2 = (maxAmount(i+2, nums)) + (nums[i]);
        
        return Math.max(temp1, temp2);
    }
}
