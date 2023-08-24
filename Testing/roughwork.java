package Testing;
import java.util.*;
public class roughwork {
    public static void main(String[] args) {
        Stack <Integer> st = new Stack<>();
        int [] array = {6,2,1,5,3};
        int [] ans = new int[array.length];
        Arrays.fill(ans, -1);
        for (int i=array.length-1; i>=0; i--) {
            while (!st.isEmpty() && (array[st.peek()] < array[i])) {
                ans[st.peek()] = array[i];
                st.pop();
            }
            st.push(i);
        }
        for (int i=0; i<ans.length; i++) {
            System.out.print(ans[i]+" ");
        }
    }
}

// 5, 4,3,2,1
// [-1, 5, 4, 3, 2]
// -1, 6, 2, 6, 5
// untrack testing
// untrack testing
