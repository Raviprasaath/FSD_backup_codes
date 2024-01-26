package Leetcode.Strings;

public class ValidAnagram_242 {
    public static void main (String[] args) {
        String str1 = "abancad";
        String str2 = "abanace";
        
        boolean ans = anagram(str1, str2);
        System.out.print((ans)?"YES":"NO");
    }
    public static boolean anagram(String str1, String str2) {
        if (str1.length() != str2.length()) {
            return false;
        }
        
        int [] ch = new int[26];
        for (int i=0; i<str1.length(); i++) {
            ch[str1.charAt(i) - 'a']++;
            ch[str2.charAt(i) - 'a']--;
        }
        for (int num : ch) {
            if (num != 0) {
                return false;
            }
        }
        return true;
    }
    public static boolean isAnagram(String s, String t) {
        if (s.length() != t.length()) return false;
        int [] chArr = new int[26];
        for (int i=0; i<s.length(); i++) {
            int num = s.charAt(i)-'a';
            chArr[num]++;
        }
        for (int i=0; i<s.length(); i++) {
            int num = t.charAt(i)-'a';
            chArr[num]--;
        }
        for (int i=0; i<chArr.length; i++) {
            if (chArr[i] != 0) {
                return false;
            }
        }
        return true;
    }
}
