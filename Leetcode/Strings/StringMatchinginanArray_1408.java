package Leetcode.Strings;

import java.util.ArrayList;
import java.util.List;

public class StringMatchinginanArray_1408 {
    public static void main(String[] args) {
        String [] words = {"mass","as","hero","superhero"};
        System.out.println(stringMatching(words));
    }
    public static List<String> stringMatching(String[] words) {
        
        List <String> list = new ArrayList<>();
        String str = String.join(" ", words);
        
        for (int i=0; i<words.length; i++) {
            if (str.indexOf(words[i]) != str.lastIndexOf(words[i])) {
                list.add(words[i]);
            }    
        }
        return list;
    }
}
