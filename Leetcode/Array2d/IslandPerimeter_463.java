package Leetcode.Array2d;

public class IslandPerimeter_463 {
    public static void main(String[] args) {
        int [][] grid = {{0,1,0,0},{1,1,1,0},{0,1,0,0},{1,1,0,0}};
        System.out.println(islandPerimeter(grid));
    }
    public static int islandPerimeter(int[][] grid) {
        int isLand = 0;
        int wall = 0;
        for (int i=0; i<grid.length; i++) {
            for (int j=0; j<grid[0].length; j++) {
                if (grid[i][j] == 1) {
                    isLand++; // 1 + 1 + 1 + 1 + 1 + 1 => 7 * 4 => 28 - 12 16
                    if (i > 0 && grid[i-1][j] == 1) {
                        wall++; // 1 1 1
                    }
                    if (j > 0 && grid[i][j-1] == 1) {
                        wall++; // 1 1 1
                    }
                }
            }
        }   
        return (isLand*4)-(wall*2);
    }
}
