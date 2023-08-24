package Leetcode.DynamicProgramming;

public class UniquePaths_62 {
    public static void main(String[] args) {
        int m = 3;
        int n =  7;
        System.out.println(uniquePaths(m, n));
    }
    public static int uniquePaths(int m, int n) {
        int [][] dp = new int [m+1][n+1];
        return unqiuePathshelper(m, n, dp);

    }
    public static int unqiuePathshelper (int m, int n, int [][] dp) {
        
        dp[1][1] = 1;

        for (int i=1; i<=m; i++) {
            for (int j=1; j<=n; j++) {
                dp[i][j] += dp[i-1][j] + dp[i][j-1];
            }
        }
        return dp[m][n];
    }
}
