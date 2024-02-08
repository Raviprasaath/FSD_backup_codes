package HashMap;
import java.util.*;

public class LongestSubArrayWithGivenSum {
    public static void main(String[] args) {
        int [] array = {15,-2,2,-8,1,7,10,23};
        int target = 0;
        System.out.println(longestSubArray(array, target));
    }
    public static int longestSubArray (int [] array, int target) {
        HashMap <Integer, Integer> map = new HashMap<>();
        map.put(0, -1);
        int max = 0;
        int prev = 0;
        for (int i=0; i<array.length; i++) {
            prev += array[i];
            if (map.containsKey(prev - target)) {
                max = Math.max(max, i - map.get(prev-target));
            } else {
                map.put(prev, i);
            }
        }

        return max;
    }
}
