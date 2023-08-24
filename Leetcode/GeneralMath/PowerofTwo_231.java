package Leetcode.GeneralMath;

public class PowerofTwo_231 {
    public static void main(String[] args) {
        int n = 16;
        System.out.print(isPowerOfTwo(n));
    }
    public static boolean isPowerOfTwo(int n) {
        if (n == 0) {
            return false;
        }

        while (n != 1) {
            if (n % 2 != 0) {
                return false;
            }
            n = n / 2;
        }
        return true;
    }
}
