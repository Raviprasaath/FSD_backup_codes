package Strings;

public class RemoveTrailingZerosFromaString_2710 {
    public static void main(String[] args) {
        String num = "51230100";
        System.out.print((removeTrailingZeros(num)));   
    }
    public static String removeTrailingZeros(String num) {
        int i=0;
        for (i=num.length()-1; i>=0; i--) {
            if (num.charAt(i) != '0') {
                break;
            }
        }
        return num.substring(0, i+1);
    }

}
