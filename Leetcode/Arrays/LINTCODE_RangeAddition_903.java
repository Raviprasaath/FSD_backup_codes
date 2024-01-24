package Leetcode.Arrays;

public class LINTCODE_RangeAddition_903 {
    public static void main(String [] args) {
        int length = 5;
        int [][] updates = {{1,2,3}, {2,4,3}, {0,2,-2}};
        int [] ans = getModifiedArray(length, updates);
        for (int i = 0; i < ans.length; i++) {
            System.out.print(ans[i]+" ");
        }
    }
    public static int[] getModifiedArray(int length, int[][] updates) {
        int [] array = new int[length];
        for (int i=0; i<updates[0].length; i++) {
            
            System.out.println(updates[1]);
             
            
        }
        return array;
    }
}
