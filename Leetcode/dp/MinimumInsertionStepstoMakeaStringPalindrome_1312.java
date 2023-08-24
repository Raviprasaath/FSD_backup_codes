package Leetcode.dp;
import java.util.*;
public class MinimumInsertionStepstoMakeaStringPalindrome_1312 {
    public static void main(String[] args) {
        String s = "leetcode";
        System.out.println(minInsertions(s));
    }
    public static int minInsertions(String s) {
        int [][] dp = new int [s.length()][s.length()];
        for (int i=0; i<s.length(); i++) {
            Arrays.fill(dp[i], -1);
        }
        return minInsertionsHelper(s, 0, s.length()-1, dp);
    } 
    public static int minInsertionsHelper(String s, int i, int j, int [][] dp) {
        if (i >= j) {
            return 0;
        }
        if (s.charAt(i) == s.charAt(j)) {
            dp[i][j] = minInsertionsHelper(s, i+1, j-1, dp);
            return dp[i][j];
        }
        if (dp[i][j] != -1) {
            return dp[i][j];
        }
        dp[i][j] = Math.min(1 + minInsertionsHelper(s, i+1, j, dp), 
                            1 + minInsertionsHelper(s, i, j-1, dp));
        return dp[i][j];                        
    }

}