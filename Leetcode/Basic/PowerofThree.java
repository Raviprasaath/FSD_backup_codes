package Leetcode.Basic;

public class PowerofThree {
    public static void main(String[] args) {
        int n = 27;
        System.out.println(isPowerOfThree(n));
    }
    public static boolean isPowerOfThree(int n) {
        while(n >= 3){
            if(n%3 != 0) return false;
            n = n/3;
        }

        return n==1;
    }
}
