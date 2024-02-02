package Leetcode.Strings;

public class AddStrings_415 {
    public static void main(String [] args) {
        String num1 = "1";
        String num2 = "9";
        System.out.println(addString(num1, num2));
    }
    public static String addString (String num1, String num2) {
        int n = num1.length()-1;
        int m = num2.length()-1;
        int carry = 0;
        StringBuilder sb = new StringBuilder();
        while (n >= 0 || m >= 0) {
            if (n >= 0) {
                carry += num1.charAt(n)-'0';
                n--;
            }
            if (m >= 0) {
                carry += num2.charAt(m)-'0';
                m--;
            }
            sb.append(carry % 10);
            carry /= 10;
        }
        if (carry != 0) {
            sb.append(carry);
        }
        return sb.reverse().toString();
    }
}