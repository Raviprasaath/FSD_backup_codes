package Leetcode.ArrayList;

import java.util.ArrayList;
import java.util.List;

public class PascalTriangle_118 {
    public static void main(String [] args) {
        int n = 5;
        List<List<Integer>> ans = generate(n);
        System.out.println(ans);
    }
    public static List<List<Integer>> generate(int numRows) {
        List<List<Integer>> ans = new ArrayList<>();
        int n = numRows;
        n = n-1;
        int [] prevArr = new int[1];
        prevArr[0] = 1;
        ArrayList <Integer> temp2 = new ArrayList<>();
        temp2.add(1);
        ans.add(temp2);
        while (n-- != 0) {
            int [] nextRow = new int [prevArr.length+1];
            nextRow[0] = 1;
            nextRow[nextRow.length-1] = 1;
            for (int i=1; i<nextRow.length-1; i++) {
                nextRow[i] = prevArr[i] + prevArr[i-1];
            }

            ArrayList <Integer> temp = new ArrayList<>();
            for (int i=0; i<nextRow.length; i++) {
                temp.add(nextRow[i]);
            }
            ans.add(temp);
            prevArr = nextRow;
        }
        return ans;
    }
}
