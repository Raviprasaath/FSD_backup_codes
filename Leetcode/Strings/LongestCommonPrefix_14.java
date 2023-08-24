package Leetcode.Strings;
import java.util.Arrays;

public class LongestCommonPrefix_14 {
    public static void main(String[] args) {
        String [] str = {"flower","flow","flight"};
        System.out.println(longestCommonPrefix(str));
    }
    // poor method
    public static String longestCommonPrefix1(String[] strs) {
        Arrays.sort(strs);
        String s = strs[0];
        String e = strs[strs.length-1];
        for (int i=0; i<s.length(); i++) {
            if(s.charAt(i) != e.charAt(i)) {
                return s.substring(0, i);
            }
        }
        return s;
    }
    
    public static String longestCommonPrefix(String[] strs) {
        if (strs.length == 0) {
            return "";
        }
        String prefix = strs[0];
        for (int i=1; i<strs.length; i++) {
            while (strs[i].indexOf(prefix) != 0){
                prefix = prefix.substring(0, prefix.length()-1);
            }
        }
        return prefix;
    }
}


