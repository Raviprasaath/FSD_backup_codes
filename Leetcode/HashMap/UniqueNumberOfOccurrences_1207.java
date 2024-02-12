package Leetcode.HashMap;
import java.util.*;

public class UniqueNumberOfOccurrences_1207 {
    public static void main(String [] args) {
        int [] arr = {1,2,2,1,1,3};
        System.out.println(uniqueOccurrences(arr));
    }
    public static boolean uniqueOccurrences(int[] arr) {
        HashMap <Integer, Integer> hmap = new HashMap<>();
        for (int i=0; i<arr.length; i++) {
           hmap.put(arr[i], hmap.getOrDefault(arr[i], 0) + 1);
        }
        HashSet <Integer> hset = new HashSet<>();
        for (HashMap.Entry <Integer, Integer> entry:hmap.entrySet()) {
            if (hset.contains(entry.getValue())) {
                return false;
            }
            hset.add(entry.getValue());
        }
        return true;
    }
}
