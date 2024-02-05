package Leetcode.Stacks;

import java.util.ArrayDeque;
import java.util.ArrayList;
import java.util.Collections;
import java.util.Deque;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Stack;

public class MinimumRemoveToMakeValidParentheses_1249 {
    public static void main(String[] args) {
        // String s = "(o()((()()(f)so))(((";
        String s = "))((";
        System.out.println(minRemoveToMakeValid(s));
    }

    public static String minRemoveToMakeValid1(String s) {
        StringBuilder sb = new StringBuilder();
        Stack<Character> st = new Stack<>();
        Stack<Integer> st2 = new Stack<>();
        HashMap<Integer, Character> hmap = new HashMap<>();
        for (int i = 0; i < s.length(); i++) {
            char ch = s.charAt(i);
            if (!st.isEmpty() && ch == ')' && st.peek() == '(') {
                st.pop();
            } else if (ch == ')' || ch == '(') {
                st.push(ch);
                hmap.put(i, ch);
            }
        }
        List<Map.Entry<Integer, Character>> entryList = new ArrayList<>(hmap.entrySet());
        Collections.sort(entryList, Map.Entry.comparingByKey());

        for (HashMap.Entry<Integer, Character> entry : entryList) {
            st2.push(entry.getKey());
        }

        for (int i = s.length() - 1; i >= 0; i--) {
            char ch = s.charAt(i);
            if (!st.isEmpty() && st.peek() == ch && st2.peek() == i) {
                st.pop();
                st2.pop();
            } else {
                if (!st.isEmpty() && st2.peek() == i) {
                    st2.pop();
                }
                sb.append(ch);
            }
        }

        return (sb.reverse().toString());
    }
    public static String minRemoveToMakeValid(String s) {
        Stack <Integer> stack = new Stack<>();
        StringBuilder sb = new StringBuilder(s);

        for (int i = 0; i < s.length(); i++) {
            if (sb.charAt(i) == '(') {
                stack.push(i);
            } else if (sb.charAt(i) == ')') {
                if (stack.isEmpty()) {
                    sb.setCharAt(i, '#');
                } else {
                    stack.pop();
                }
            }
        }

        while (!stack.isEmpty()) {
            sb.setCharAt(stack.pop(), '#');
        }

        return sb.toString().replaceAll("#", "");
  } 
}
