package Leetcode.Strings;

public class AddingSpacestoaString_2109 {
    public static void main(String[] args) {
        String s = "LeetcodeHelpsMeLearn";
        int [] spaces = {8,13,15};
        System.out.println(addSpaces(s, spaces));
    }
    public static String addSpaces(String s, int[] spaces) {
        StringBuilder sb = new StringBuilder();
        int k = 0, length = spaces.length;
        for (int i=0; i<s.length(); i++) {
            if (k < length) {
                if (i == spaces[k]) {
                    sb.append(" ");
                    k++;
                }
            }         
            sb.append(s.charAt(i));
        }
        return sb.toString();
    }
}
