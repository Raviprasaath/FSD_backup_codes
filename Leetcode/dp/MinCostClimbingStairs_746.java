package Leetcode.dp;

public class MinCostClimbingStairs_746 {
    public static void main(String[] args) {
        int [] cost = {10,15,20};
        System.out.println(minCostClimbingStairs(cost));
    }
    public static int minCostClimbingStairs(int[] cost) {
        int n = cost.length;

        
        for (int i = n-2; i >= 0; i--) {
            if (i == n-2) {
                cost[i] = Math.min(cost[i], cost[i] + cost[i+1]);
            } else {
                cost[i] = Math.min(cost[i] + cost[i+1], cost[i] + cost[i+2]);
            }
        }

        return Math.min(cost[0], cost[1]);
    }
}
