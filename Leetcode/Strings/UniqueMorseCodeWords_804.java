package Leetcode.Strings;

import java.util.HashSet;

public class UniqueMorseCodeWords_804 {
    public static void main(String[] args) {
        String [] words = {"gin","zen","gig","msg"};
        System.out.println(uniqueMorseRepresentations(words));
    }
    public static int uniqueMorseRepresentations(String[] words) {
        String [] str = {".-","-...","-.-.","-..",".","..-.","--.","....","..",".---","-.-",".-..","--","-.","---",".--.","--.-",".-.","...","-","..-","...-",".--","-..-","-.--","--.."};
        HashSet <String> hset = new HashSet<>();
        for (int i=0; i<words.length; i++) {
            StringBuilder sb = new StringBuilder();
            for (int j=0; j<words[i].length(); j++) {
                int ch = words[i].charAt(j) - 'a';
                sb.append(str[ch]);
            }
            hset.add(sb.toString());
        }
        return hset.size();
    }
}
