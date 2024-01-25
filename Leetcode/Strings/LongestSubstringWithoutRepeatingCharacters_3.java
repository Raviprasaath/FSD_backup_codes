package Leetcode.Strings;

import java.util.HashMap;
import java.util.HashSet;

public class LongestSubstringWithoutRepeatingCharacters_3 {
    public static void main(String[] args) {
        String s = "pwwkew";
        System.out.println(lengthOfLongestSubstring(s));
    }
    public static int lengthOfLongestSubstring1(String s) {
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
    public static int lengthOfLongestSubstring(String s) {
        int max = 0;
        StringBuilder sb = new StringBuilder();
        for (int i=0; i<s.length(); i++) {
            String ch = ""+s.charAt(i);
            if (!sb.toString().contains(ch)) {
                sb.append(ch);
            } else {
                int index = sb.toString().indexOf(ch);
                if (index != 0) {
                    sb.delete(0, index+1);
                } else {
                    sb.deleteCharAt(0);
                }
                sb.append(ch);
            }
            max = Math.max(max, sb.length());
        }
        return max;
    } 
}
