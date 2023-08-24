package Leetcode.Arrays;

import java.util.ArrayList;

public class KeepMultiplyingFoundValuesbyTwo_2154 {
    public static void main(String[] args) {
        int [] num = {5,3,6,1,12};
        int original = 3;
        System.out.println(findFinalValue(num, original));
    }
    public static int findFinalValue(int[] nums, int original) {
        ArrayList <Integer> list = new ArrayList<>();
        for (int i=0; i<nums.length; i++) {
            list.add(nums[i]);
        }
        if (!list.contains(original)) {
            return original;
        }
        int num = original*2;
        while (true) {
            if (list.contains(num)) {
                num = num * 2;
            } else {
                break;
            }
        }
        return num;
    }
}
