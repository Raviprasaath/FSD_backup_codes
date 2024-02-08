package HashMap;
import java.util.*;

public class SubArraysEquals1s0s {
    public static void main(String[] args) {
        int [] array = {1,0,0,1,0,1,1};
        for (int i = 0; i < array.length; i++) {
            if (array[i] == 0) {
                array[i] = -1;
            }
        }
        System.out.println(subArrayEqual(array));
    }
    public static int subArrayEqual (int [] array) {
        HashMap <Integer, Integer> map = new HashMap<>();
        int ans = 0, sum = 0;
        map.put(0, 1);
        for (int i=0; i<array.length; i++) {
            sum += array[i];
            if (map.containsKey(sum)) {
                ans += map.get(sum);
            }
            map.put(sum, map.getOrDefault(sum, 0) + 1);
        }
        return ans;
    }
}
