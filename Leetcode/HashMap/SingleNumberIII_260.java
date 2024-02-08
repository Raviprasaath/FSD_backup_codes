package Leetcode.HashMap;
import java.util.*;

public class SingleNumberIII_260 {
    public static void main(String [] args) {
        int [] nums = {1,2,1,3,2,5};
        int [] ans = singleNumber(nums);
        for (int i = 0; i < ans.length; i++) {
            System.out.print(ans[i]+" ");
        }
    }
    public static int[] singleNumber(int[] nums) {
        HashMap <Integer, Integer> hmap = new HashMap<>();
        for (int i=0; i<nums.length; i++) {
            hmap.put(nums[i], hmap.getOrDefault(nums[i], 0)+1);
        }
        ArrayList <Integer> list = new ArrayList<>();
        for (HashMap.Entry <Integer, Integer> entry : hmap.entrySet()) {
            if (entry.getValue() == 1) {
                list.add(entry.getKey());
            }
        }
        int [] array = new int[list.size()];
        for (int i=0; i<list.size(); i++) {
            array[i] = list.get(i);
        }
        return array;
    }
}
