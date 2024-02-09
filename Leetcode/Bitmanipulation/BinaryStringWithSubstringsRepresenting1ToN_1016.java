package Leetcode.Bitmanipulation;

public class BinaryStringWithSubstringsRepresenting1ToN_1016 {
    public static void main(String[] args) {
        String s = "0110";
        int n = 3;
        System.out.println(queryString(s, n));
    }
    public static boolean queryString(String s, int n) {
        for (int i = n; i > n/2; i--) {
            if (!s.contains(Integer.toBinaryString(i))) {
                return false;
            }
        }
        return true;
    }
}
