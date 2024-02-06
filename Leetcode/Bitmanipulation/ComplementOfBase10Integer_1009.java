package Leetcode.Bitmanipulation;

public class ComplementOfBase10Integer_1009 {
    public static void main(String[] args) {
        int n = 5;
        System.out.println(bitwiseComplement(n));
    }
    public static int bitwiseComplement1(int n) {
        if (n == 0) return 1;

        StringBuilder sb = new StringBuilder();
        while (n > 0) {
            int rem = n % 2;
            sb.append(rem);
            n = n / 2 ;
        }
        for (int i=0; i<sb.length(); i++) {
            if (sb.charAt(i)=='0') {
                sb.setCharAt(i, '1');
            } else {
                sb.setCharAt(i, '0');
            }
        }
        int ans = 0;
        for (int i=0; i<sb.length(); i++) {
            int num = sb.charAt(i) - '0';
            ans += num * Math.pow(2, i);
        }

        return ans;
    }
    public static int bitwiseComplement (int n) {
        
        return 1;
    }
}
