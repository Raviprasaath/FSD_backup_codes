package Leetcode.Strings;

public class ReverseOnlyLetters_917 {
    public static void main (String [] args) {
        String s = "Test1ng-Leet=code-Q!";
        System.out.println(reverseOnlyLetters(s));
    }
    public static String reverseOnlyLetters(String s) {
        char [] sb = s.toCharArray();
        int left = 0;
        int right = sb.length-1;
        while (left < right) {
            if (Character.isLetter(sb[left]) && Character.isLetter(sb[right]) ) {
                char temp = sb[left];
                sb[left] = sb[right];
                sb[right] = temp;
                left++;
                right--;
            } else if (!Character.isLetter(sb[left])) {
                left++;
            } else if (!Character.isLetter(sb[right])) {
                right--;
            }
        }
        StringBuilder str = new StringBuilder();
        for (int i=0; i<sb.length; i++) {
            str.append(sb[i]);
        }
        return str.toString();
    }
}
