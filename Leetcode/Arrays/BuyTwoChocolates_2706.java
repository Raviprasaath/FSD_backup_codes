package Leetcode.Arrays;

public class BuyTwoChocolates_2706 {
    public static void main(String [] args) {
        int [] arr = {1,2,2};
        int money = 3;
        System.out.println(buyChoco(arr, money));
    }
    public static int buyChoco(int[] prices, int money) {
        int min1 = Integer.MAX_VALUE;
        int min2 = Integer.MAX_VALUE;

        for (int i : prices) {
            if (i <= min1) {
                min2 = min1;
                min1 = i;
            } else if (i < min2) {
                min2 = i;
            }
        }
        int amount = min1 + min2;
        if (amount == money) {
            return 0;
        } else if (amount < money) {
            return money - amount;
        }
        return money;
    }
}
