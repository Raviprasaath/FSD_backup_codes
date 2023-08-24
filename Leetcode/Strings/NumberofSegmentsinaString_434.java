package Leetcode.Strings;

public class NumberofSegmentsinaString_434 {
    public static void main(String[] args) {
        String s = "Hello, my name is John";
        System.out.println(countSegments(s));
    }
    public static int countSegments(String s) {
        int count = 0;
        for (int i=0; i<s.length(); i++) {
            if (s.charAt(i) !=' ' && (i == 0 || s.charAt(i - 1) == ' ')) {
                count++;
            }
        }
        return count;
    }
}
