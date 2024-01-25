package Leetcode.Strings;

public class ValidPalindromeII_680 {
    public static void main(String [] args) {
        String s = "abca";
        System.out.println(validPalindrome(s));
    }
    public static boolean validPalindrome(String s) {
        int left = 0;
        int right = s.length()-1;
        while (left < right) {
            char ch1 = s.charAt(left);
            char ch2 = s.charAt(right);
            if (ch1 != ch2) {
                return palindrome(s, left+1, right) || palindrome(s, left, right-1);
            } else {
                left++;
                right--;
            }
        }
        return true;
    }
    public static boolean palindrome(String s, int left, int right) {
        while (left < right) {
            char ch1 = s.charAt(left);
            char ch2 = s.charAt(right);
            if (ch1 != ch2) {
                return false;
            } else {
                left++;
                right--;
            }
        }
        return true;
    }
}
