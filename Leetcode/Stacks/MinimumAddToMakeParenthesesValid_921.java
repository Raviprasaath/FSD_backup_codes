package Leetcode.Stacks;

import java.util.Stack;

public class MinimumAddToMakeParenthesesValid_921 {
    public static void main(String [] args) {
        String s = "(((";
        System.out.println(minAddToMakeValid(s));
    }
    public static int minAddToMakeValid(String s) {
        Stack <Character> st = new Stack <>();
        for (int i=0; i<s.length(); i++) {
            char ch = s.charAt(i);
            if (ch == '(') {
                st.push(ch);
            } else if (!st.isEmpty() && st.peek() == '(' && ch == ')') {
                st.pop();
            } else {
                st.push(ch);
            }
        }
        return st.size();
    }
    public static int minAddToMakeValid1(String s) {
        int a = 0;
        int b = 0;
        for (int i=0; i<s.length(); i++) {
            char ch = s.charAt(i);
            if (ch == '(') {
                a++;
            } else {
                if (a != 0) {
                    a--;
                } else {
                    b++;
                }
            }
        }
        return a+b;
    }
}
