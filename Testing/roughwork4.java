
import java.util.*;

public class roughwork4 {
    public static void main(String[] args) {
        String s = "(o()((()()(f)so))(((";
        System.out.println(minRemoveToMakeValid(s));
    }

    public static String minRemoveToMakeValid(String s) {
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

        System.out.println("list " + entryList);

        System.out.println("hashmap -> " + hmap);
        System.out.println(st);

        for (HashMap.Entry<Integer, Character> entry : entryList) {
            st2.push(entry.getKey());
        }
        System.out.println(st2);

        for (int i = s.length() - 1; i >= 0; i--) {
            char ch = s.charAt(i);

            if (!st.isEmpty() && st.peek() == ch && st2.peek() == i) {
                System.out.println(st2.peek() + "-" + hmap.get(i) + " check ");
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
}
