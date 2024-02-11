package Leetcode.Stacks;
import java.util.Stack;

public class LongestValidParentheses_32 {
    public static void main(String [] args) {
        String s = ")()())";
        System.out.println(longestValidParentheses(s));
    }
    public static int longestValidParentheses(String s) {
        int max = 0;
        Stack <Integer> st = new Stack<>();
        st.push(-1);
        for (int i=0; i<s.length(); i++) {
            char ch = s.charAt(i);
            if (ch == '(') {
                st.push(i);
            } else {
                if (!st.isEmpty()) {
                    st.pop();
                }
                if (!st.isEmpty()) {
                    max = Math.max(max, i - st.peek());
                } else {
                    st.push(i);
                }
            }
        }
        return max;
    }
}
