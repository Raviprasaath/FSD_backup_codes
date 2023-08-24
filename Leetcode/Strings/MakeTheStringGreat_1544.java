package Leetcode.Strings;

import java.util.Stack;

public class MakeTheStringGreat_1544 {
    public static void main(String[] args) {
        String s = "leEeetcode";
        System.out.println(makeGood(s));
    }
    public static String makeGood(String s) {
        StringBuilder sb = new StringBuilder();
        Stack <Character> st = new Stack<>();
        st.push(s.charAt(0));

        for (int i=1; i<s.length(); i++) {
            if (!st.isEmpty() && Math.abs(s.charAt(i) - st.peek()) == 32) {
                st.pop();
            } else {
                st.push(s.charAt(i));
            }
        }
        while (!st.isEmpty()) {
            sb.append(st.pop());
        }
        return sb.reverse().toString();
    }
}
