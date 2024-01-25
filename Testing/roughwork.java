package Testing;
public class roughwork {
    public static void main(String[] args) {
        String s = "anagram";
        String t = "nagaram";
        System.out.println(isAnagram(s, t));
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