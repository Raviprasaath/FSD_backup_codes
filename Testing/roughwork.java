package Testing;

import java.util.ArrayList;

public class roughwork {
    public static void main(String[] args) {
       String a = "abcd";
       String b = "cdabcdab";
       System.out.println(repeatedStringMatch(a, b));
    }
    public static int repeatedStringMatch(String a, String b) {
        int count = 1;
        String aCopy = a;
        while (true) {
            if (a.contains(b)) {
                return count;
            } else if (!a.contains(b)) {
                count++;
                a = a+aCopy;
                System.out.println(a);
            } else if (count == 10) {
                return -1;
            }
        }
    }
}