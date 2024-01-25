package Leetcode.Array2d;
import java.util.Scanner;

public class NumberOfIslands_200 {
    public static void main (String [] args) {
        Scanner sc = new Scanner(System.in);
        int n = sc.nextInt();
        int m = sc.nextInt();
        char [][] grid = new char[n][m];


        for (int i=0; i<grid.length; i++) {
            for (int j=0; j<grid[0].length; j++) {
                grid[i][j] = sc.next().charAt(0);
            }
        }
        System.out.println(numIslands(grid));
    }
    public static int numIslands(char[][] grid) {
        int count = 0;
        
        for (int i=0; i<grid.length; i++) {
            for (int j=0; j<grid[0].length; j++) {
                if (grid[i][j] == '1') {
                    count++;
                    isLandCount(grid, i, j);
                }
            }
        }
        return count;
    }
    public static void isLandCount(char [][] grid, int i, int j) {
        int n = grid.length -1 ;
        int m = grid[0].length -1;

        if (i < 0 || j < 0 || i > n || j > m || grid[i][j] == '0') {
            return;
        }
        grid[i][j] = '0';
        isLandCount(grid, i+1, j);
        isLandCount(grid, i-1, j);
        isLandCount(grid, i, j-1);
        isLandCount(grid, i, j+1);
    }
}


// 4 5 '1' '1' '1' '1' '0' '1' '1' '0' '1' '0' '1' '1' '0' '0' '0' '0' '0' '0' '0' '0'