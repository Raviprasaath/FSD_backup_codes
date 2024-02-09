package Leetcode.Stacks;

import java.util.Stack;

public class EvaluateReversePolishNotation_150 {
    public static void main(String [] main) {
        String [] str = {"2","1","+","3","*"};
        System.out.println(evalRPN(str));
    }
    public static int evalRPN(String[] tokens) {
        Stack <Integer> st = new Stack<>();
        for (int i=0; i<tokens.length; i++) {
            String c = tokens[i];
            if (c.equals("+")) {
                int a = st.pop();
                int b = st.pop();
                st.push(a + b);
            } else if (c.equals("-")) {
                int a = st.pop();
                int b = st.pop();
                st.push(b - a);
            } else if (c.equals("*")) {
                int a = st.pop();
                int b = st.pop();
                st.push(b * a);
            } else if (c.equals("/")) {
                int a = st.pop();
                int b = st.pop();
                st.push(b / a);
            } else {
                int num = Integer.parseInt(c);
                st.push(num);
            }
        }
        return st.pop();
    }
}
