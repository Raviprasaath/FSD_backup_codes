package Leetcode.Array2d;

public class MaxIncreasetoKeepCitySkyline_807 {
    public static void main(String[] args) {
        int [][] array = {{3,0,8,4},{2,4,5,7},{9,2,6,3},{0,3,1,0}};
        System.out.println(maxIncreaseKeepingSkyline(array));
    }
    public static int maxIncreaseKeepingSkyline(int[][] grid) {

        int [] row = new int[grid.length];
        int [] col = new int[grid.length];

        int sum = 0;
        
        for (int i=0; i<grid.length; i++) {
            int maxRow = 0, maxCol = 0;
            for (int j=0; j<grid.length; j++) {
                maxRow = Math.max(maxRow, grid[i][j]); 
                maxCol = Math.max(maxCol, grid[j][i]);
            }
            row[i] = maxRow;
            col[i] = maxCol;
        }

        for (int i=0; i<grid.length; i++) {            
            for (int j=0; j<grid.length; j++) {
                sum += Math.min(row[i], col[j]) - grid[i][j];
            }
        }
        return sum;
    }

}
