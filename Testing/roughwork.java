package Testing;

import java.util.ArrayList;

public class roughwork {
    public static void main(String[] args) {
       int [][] arr = {{1,2},{3,5},{6,7},{8,10},{12,16}};
       int [] newArr = {4,8};
       System.out.println(insert(arr, newArr));
    }
    public static int[][] insert(int[][] intervals, int[] newInterval) {
        ArrayList <Integer> list = new ArrayList<>();
        for (int i=0; i<intervals.length; i++) {
            for (int j=0; j<intervals[0].length; j++) {
                list.add(intervals[i][j]);
            }
        }
        boolean flag = true;
        int i = 0, count = 0;
        while(flag) {
            int left = newInterval[0];
            int right = newInterval[1];
            if (list.get(i) > left && list.get(i) < right) {
                int index = list.indexOf(i);
                list.remove(index);
                count++;
                i=0;
            } else if (count != 0) {
                flag = false;
            }
            i++;
        }
        System.out.print(list);
        int [][] ans = new int[1][2];
        return ans;
    }
}