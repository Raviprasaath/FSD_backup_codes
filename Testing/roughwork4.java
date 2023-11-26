package Testing;
import java.util.*;

public class roughwork4 {    
    public static void main(String[] args) {
        String str = "ravasdasodsf";
        Stack <Character> st = new Stack();
        for (int i=0; i<str.length(); i++) {
            st.push(str.charAt(i));
        }
        for (int i=0; i<str.length(); i++) {
            System.out.print(st.pop());
            
        }
    }
}



