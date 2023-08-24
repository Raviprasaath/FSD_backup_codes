package Leetcode.Strings;

import java.util.Arrays;

public class SortVowelsinaString_2785 {
    public static void main(String[] args) {
        String s = "lEetcOde";
        System.out.println(sortVowels(s));
    }
    public static String sortVowels(String s) {
        StringBuilder sb1 = new StringBuilder();
        StringBuilder sb2 = new StringBuilder();
        for (int i=0; i<s.length(); i++) {
            if (vowel (s.charAt(i))) {
                sb1.append(s.charAt(i));
            }
        }
        String [] charArr = sb1.toString().split("");
        Arrays.sort(charArr);
        int k = 0;
        for (int i=0; i<s.length(); i++) {
            if (vowel(s.charAt(i))) {
                sb2.append(charArr[k]);
                k++;
            } else {
                sb2.append(s.charAt(i));
            }
        }        
        return sb2.toString();
    }
    public static boolean vowel(char ch) {
        switch (ch) {
            case 'a':
            case 'A':
            case 'e':
            case 'E':
            case 'i':
            case 'I':
            case 'o':
            case 'O':
            case 'u':
            case 'U':
            return true;
        }
        return false;
    }
}
