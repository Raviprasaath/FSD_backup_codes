package Leetcode.Strings;

public class RemoveAllOccurrencesofaSubstring_1910 {
    public static void main(String[] args) {
        String s = "daabcbaabcbc";
        String part = "abc";
        System.out.println(removeOccurrences(s, part));
    }
    public static String removeOccurrences(String s, String part) {
        StringBuilder sb = new StringBuilder(s);
        while (sb.toString().contains(part)) {
            int temp = sb.indexOf(part);
            sb.delete(temp, temp + part.length());
            
        }
        return sb.toString();
    }
}
