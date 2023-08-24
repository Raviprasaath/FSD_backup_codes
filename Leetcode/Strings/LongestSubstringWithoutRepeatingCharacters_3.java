package Leetcode.Strings;

import java.util.HashMap;

public class LongestSubstringWithoutRepeatingCharacters_3 {
    public static void main(String[] args) {
        String s = "abcabcbb";
        System.out.println(lengthOfLongestSubstring(s));
    }
    public static int lengthOfLongestSubstring(String s) {
        HashMap <Character, Integer> hmap = new HashMap<>();
        int max = 0, left = 0;
        for (int right=0; right<s.length(); right++) {
            char ch = s.charAt(right);
            if (hmap.containsKey(ch)) {
                left = Math.max (left, hmap.get(ch)+1);
                
            }
            hmap.put(ch, right);
            max = Math.max(max, right-left+1);
        } 
        return max;
    }
}
