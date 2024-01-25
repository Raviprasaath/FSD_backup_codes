package Leetcode.Strings;

public class BackspaceStringCompare_844 {
    public static void main(String [] args) {
        String s = "ab#c";
        String t= "ad#c";
        System.out.println(backspaceCompare(s, t));
    }
    public static boolean backspaceCompare(String s, String t) {        
        return (stringCheck(s).equals(stringCheck(t)));
    }

    
    public static String stringCheck(String s) {
        StringBuilder sb = new StringBuilder();
        for (char c : s.toCharArray()) {
            if (c != '#') {
                sb.append(c);
            } else if (sb.length() != 0) {
                sb.deleteCharAt(sb.length()-1);
            }
        }
        return sb.toString();
    }

    public static String stringCheck1(String str) {
        StringBuilder sb = new StringBuilder();
        for (int i=0; i<str.length(); i++) {
            if (str.charAt(i) != '#') {
                sb.append(str.charAt(i));
            } else if (sb.length()!=0) {
                sb.deleteCharAt(sb.length()-1);
            }
        }
        return sb.toString();
    }
}