package Testing;

import java.util.Stack;

public class roughwork {
    public static void main(String[] args) {
        int [] array = {73,74,75,71,69,72,76,73};
        int [] ans = dailyTemperatures(array);
        for (int i = 0; i < array.length; i++) {
            System.out.print(ans[i]+" ");
        }
    }
    public static int[] dailyTemperatures(int[] temperatures) {
        int count = 0;
        int k = temperatures.length-1;
        int [] ans = new int[temperatures.length];
        Stack <Integer> st = new Stack <>();
        Stack <Integer> tempStack = new Stack <>();
        for (int i=temperatures.length-1; i>=0; i--) {
            int temp = temperatures[i];
            while (!st.isEmpty()) {
                if (temp < st.peek()) {
                    if(tempStack.isEmpty()) {
                        count++;
                        ans[k] = count;
                    } else {
                        count = tempStack.size();
                        ans[k] = count;
                    }
                    while(!tempStack.isEmpty()) {
                        st.push(tempStack.pop());
                    }
                    count = 0;
                    break;
                } else {
                    tempStack.push(st.pop());
                }
            }
            if (st.isEmpty() && count == 0) {
                ans[k] = 0;
                count = 0;
            }
            st.push(temp);
            k--;
            System.out.println("temp: "+temp+" "+st);
        }
        return ans;
    }
    
}