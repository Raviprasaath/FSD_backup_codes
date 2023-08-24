package Leetcode.Basic;

public class CountIntegersWithEvenDigitSum_2180 {
    public static void main(String[] args) {
        int n = 30;
        System.out.println(countEven(n));
    }
    // 88% beats
    public static int countEven1(int num) {
        int count = 0;    
        for (int i=1; i<=num; i++) {
            int sum = 0;
            int j = i;
            while (j != 0) {
                int digit = j%10;
                sum += digit;
                j = j / 10;
            }
            if (sum % 2 == 0) {
                count++;
            }
        }
        return count;
    }
    // 100% beats
    public static int countEven(int num) {
        if (sumOfDigit(num) % 2 == 0) {
            return num / 2;
        }
        return (num - 1) / 2;
    }

    private static int sumOfDigit(int num) {
        int sum = 0;
        while (num > 0) {
            sum += num % 10;
            num /= 10;
        }
        return sum;
    }
}