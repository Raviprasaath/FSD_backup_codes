package Leetcode.Bitmanipulation;

public class ReverseBits_190 {
    public static void main(String[] args) {
        // int n = 00000010100101000001111010011100;
        int n = 10100000;
        System.out.println(reverseBits(n));
    }
    public static int reverseBits(int n) {
        return Integer.reverse(n);
    }
}