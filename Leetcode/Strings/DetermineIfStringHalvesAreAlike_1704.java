package Leetcode.Strings;

public class DetermineIfStringHalvesAreAlike_1704 {
    public static void main(String [] args) {
        String s = "book";
        System.out.println(halvesAreAlike(s));
    }
    public static boolean halvesAreAlike(String s) {
        int n = s.length();
        int count1 = 0;
        int count2 = 0;
        for (int i=0; i<n/2; i++) {
            char ch = s.charAt(i);
            if (vowels(ch)) {
                count1++;
            }
        }
        for (int i=n/2; i<n; i++) {
            char ch = s.charAt(i);
            if (vowels(ch)) {
                count2++;
            }
        }
        return count1==count2;
    }
    public static boolean vowels (char c) {
        switch (c) {
            case 'a':
            case 'e':
            case 'i':
            case 'o':
            case 'u':
            case 'A':
            case 'E':
            case 'I':
            case 'O':
            case 'U':
                return true;
        }
        return false;
    }
}
