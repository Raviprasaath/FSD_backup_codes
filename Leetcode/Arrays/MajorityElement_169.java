package Leetcode.Arrays;

public class MajorityElement_169 {
    public static void main(String [] args) {
        int [] array = {2,2,1,1,1,2,2};
        System.out.print(majorityElement(array));
    }
    public static int majorityElement(int[] nums) {
        int count = 0;
        int cand = 0;
        for (int i=0; i<nums.length; i++) {
            if (count==0) {
                cand = nums[i];
            }
            if (cand == nums[i]) {
                count++;
            } else {
                count--;
            }
        }
        return cand;
    }
}
