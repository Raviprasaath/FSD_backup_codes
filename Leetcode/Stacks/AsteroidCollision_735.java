package Leetcode.Stacks;
import java.util.*;

public class AsteroidCollision_735 {
    public static void main(String [] args) {
        int [] asteroids = {5, 10, -5};
        int [] ans = asteroidCollision(asteroids);
        for (int i = 0; i < ans.length; i++) {
            System.out.print(ans[i] + " ");
        }
    }
    public static int[] asteroidCollision(int[] asteroids) {
        Stack <Integer> st = new Stack<>();
        for (int i=0; i<asteroids.length; i++) {
            if (asteroids[i] > 0) {
                st.push(asteroids[i]);
            } else {
                while (!st.isEmpty() && st.peek() > 0 && st.peek() < -(asteroids[i])) {
                    st.pop();
                }
                if (st.isEmpty() || st.peek() < 0) {
                    st.push(asteroids[i]);
                } else if (st.peek() == -(asteroids[i])) {
                    st.pop();
                } else {
                    continue;
                }
            }
        }
        int [] ans = new int[st.size()];
        int j = ans.length-1;
        while (!st.isEmpty()) {
            ans[j] = st.pop();
            j--;
        }
        return ans;
    }
}
