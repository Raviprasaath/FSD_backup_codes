package Testing;
import java.util.*;

public class roughwork4 {    
    public static void main(String[] args) {
        String s = "))((";
        System.out.println(minRemoveToMakeValid(s));
    }
    public static String minRemoveToMakeValid(String s) {
        StringBuilder sb = new StringBuilder();
        Stack <Character> st = new Stack <>();
        for (int i=0; i<s.length(); i++) {
            char ch = s.charAt(i);
            if (!st.isEmpty() && ch == ')' && st.peek() == '(' ) {
                st.pop();
            } else if (ch == ')'|| ch == '(') {
                st.push(ch);
            }
        }
        System.out.print(st);
        for (int i=0; i<s.length(); i++) {
            char ch = s.charAt(i);
            if (!st.isEmpty() && st.peek() == ch) {
                st.pop();
            } else {
                sb.append(ch);
            }
        }
        return (sb.toString());
    }
}



