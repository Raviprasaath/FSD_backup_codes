package Leetcode.Strings;

public class IncreasingDecreasingString_1370 {
    public static void main(String[] args) {
        String s = "aaaabbbbcccc";
        System.out.println(sortString(s));
    }
    public static String sortString(String s) {
        int [] arr = new int[26];
        for (int i=0; i<s.length(); i++) {
            int ch = s.charAt(i)-'a';
            arr[ch]++;
        }
        // System.out.print(Arrays.toString(arr));
        StringBuilder sb = new StringBuilder ();
        while (sb.length() != s.length()) {
            for (int i=0; i<26; i++) {
                if (arr[i] > 0) {
                    char ch = (char) (i + 'a');
                    sb.append(ch);
                    arr[i]--;
                }
            }
            for (int i=25; i>=0; i--) {
                if (arr[i] > 0) {
                    char ch = (char)(i + 'a');
                    sb.append(ch);
                    arr[i]--;
                }
            }
            // System.out.print(sb.toString());
        }
        return sb.toString();
    }
}
