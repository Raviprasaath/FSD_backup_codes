package Leetcode.Strings;

public class CheckifWordEqualsSummationofTwoWords {
    public static void main(String[] args) {
        String first = "acb";
        String second = "cba";
        String third = "cdb";
        System.out.println(isSumEqual(first, second, third));
    }

    public static boolean isSumEqual(String firstWord, String secondWord, String targetWord) {
        int num1 = letterToNum(firstWord);        
        int num2 = letterToNum(secondWord);
        int num3 = letterToNum(targetWord);
        return (num1+num2==num3);

    }

    public static int letterToNum (String str) {
        int val = 0;
        for (int i=0; i<str.length(); i++) {
            int sum = str.charAt(i)-'a';
            val = (val*10)+sum;
        }
        return val;
    }
}
