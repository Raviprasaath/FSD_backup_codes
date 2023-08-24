package Leetcode.Strings;

public class ReversePrefixofWord_2000 {
    public static void main(String[] args) {
        String str = "abcdefd";
        char ch = 'd';
        System.out.println(reversePrefix(str, ch));
    }
    // 100 beats
    public static String reversePrefix1(String word, char ch) {
        int i = word.indexOf(ch) + 1;
        return new StringBuilder(word.substring(0, i)).reverse().append(word.substring(i)).toString();
    }

    // low beats
    public static String reversePrefix(String word, char ch) {
        if (!word.contains(""+ch)) {
            return word;
        }
        StringBuilder sb = new StringBuilder();
        int count = 0;
        for (int i=0; i<word.length(); i++) {
            sb.append(word.charAt(i));
            count++;
            if (word.charAt(i) == ch) {
                break;
            }
        }
        sb.reverse();
        for (int i=count; i<word.length(); i++) {
            sb.append(word.charAt(i));
        }
        return sb.toString();
    }
}
