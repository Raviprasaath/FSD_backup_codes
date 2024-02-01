package Leetcode.Array2d;
import java.util.ArrayList;
import java.util.Arrays;

public class MergeIntervals_56 {
    public static void main(String [] args) {
        int [][] intervals = {{1,3},{2,6},{8,10},{15,18}};
        int [][] ans = merge(intervals);
        for (int i = 0; i < ans.length; i++) {
            for (int j = 0; j < ans[0].length; j++) {
                System.out.print(ans[i][j]+" ");
            }
        }
    }
    public static int[][] merge(int[][] intervals) {
        int index = 0;
        Arrays.sort(intervals, (a, b)->(a[0]-b[0]));
        ArrayList <int []> list = new ArrayList<>();
        while (index < intervals.length) {
            int startIndex = intervals[index][0];
            int endIndex = intervals[index][1];
            while (index < intervals.length-1 && endIndex >= intervals[index+1][0]) {
                endIndex = Math.max(endIndex, intervals[index+1][1]);
                index++;
            }
            list.add(new int[]{startIndex, endIndex});
            index++;
        }
        index = 0;
        int [][] ans = new int[list.size()][2];
        for(int [] arr : list) {
            ans[index] = arr;
            index++;
        }
        return ans;
    }
}
