package Leetcode.HashMap;

import java.util.HashMap;

public class MostFrequentEvenElement_2404 {
    public static void main(String[] args) {
        int [] array = {0,1,2,2,4,4,1};
        System.out.println(mostFrequentEven(array));
    }
    public static int mostFrequentEven(int[] nums) {
        HashMap <Integer, Integer> hmap = new HashMap <>();

        for (int i=0; i<nums.length; i++) {
            if (hmap.containsKey(nums[i])) {
                hmap.put(nums[i], hmap.get(nums[i])+1);
            } else {
                hmap.put(nums[i], 1);
            }
        }
        int max = 0;
        // System.out.print(hmap);
        for (HashMap.Entry <Integer, Integer> entry : hmap.entrySet()) {
            if (entry.getKey() % 2 == 0) {
                max = Math.max(max, entry.getValue());
            }
        }
        int min = Integer.MAX_VALUE;
        int temp = 0;
        for (HashMap.Entry <Integer, Integer> entry : hmap.entrySet()) {
            if (max == entry.getValue() && entry.getKey() % 2 == 0) {
                min = Math.min(min, entry.getKey());
                temp++;
            }
        }
        return temp == 0 ? -1 : min;
    }
}
