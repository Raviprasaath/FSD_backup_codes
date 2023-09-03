package Leetcode.dp;

public class LongestPalindromicSubsequence_516 {
    public static void main(String[] args) {
        String s = "cbbd";
        System.out.println(longestPalindromeSubseq(s));
    }
    public static int longestPalindromeSubseq(String s) {
        StringBuilder sb = new StringBuilder(s);
        return longestPalindromeSubseqHelper(s, sb.reverse().toString());
    }
    public static int longestPalindromeSubseqHelper(String s1, String s2) {
        int n = s1.length();

        int [][] dp = new int[n+1][n+1];

        for (int i=1; i<=n; i++) {
            for (int j=1; j<=n; j++) {
                if (s1.charAt(i-1) == s2.charAt(j-1)) {
                    dp[i][j] = dp[i-1][j-1] + 1;
                } else {
                    dp[i][j] = Math.max(dp[i-1][j], dp[i][j-1]);
                }
            }
        }
        return dp[n][n];

    }
}
