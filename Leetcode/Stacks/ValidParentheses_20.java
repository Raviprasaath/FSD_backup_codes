package Leetcode.Stacks;
import java.util.Stack;

public class ValidParentheses_20 {
    public static void main(String[] args) {
        String str = "()[]{}";
        System.out.println(isValid(str));
    }

    public static boolean isValid(String s) {
        Stack <Character> st = new Stack<>();
        
        for (int i=0; i<s.length(); i++) {
            char ch = s.charAt(i);
            if (ch == '{' || ch == '(' || ch == '[') {
                st.push(ch);
            } else if ((!st.isEmpty()) && ch == '}' && st.peek() == '{' ) {
                st.pop();
            } else if ((!st.isEmpty()) && ch == ']' && st.peek() == '[' ) {
                st.pop();
            }else if ((!st.isEmpty()) && ch == ')' && st.peek() == '('  ) {
                st.pop();
            } else {
                st.push(ch);
            }
        }
        return (st.isEmpty());
    }
}