package Leetcode.Strings;

public class ExcelSheetColumnTitle_168 {
    public static void main(String[] args) {
        int a = 701;
        System.out.println(convertToTitle(a));
    }
    public static String convertToTitle(int columnNumber) {
        StringBuilder sb = new StringBuilder();
        while (columnNumber > 0) {
            sb.append((char) (((columnNumber-1)%26) + 'A'));
            columnNumber = (columnNumber-1) / 26;
        }
        return sb.reverse().toString();
    }
}
