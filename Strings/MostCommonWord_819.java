package Strings;

import java.util.ArrayList;
import java.util.HashMap;

public class MostCommonWord_819 {
    public static void main(String[] args) {
        
        String paragraph = "Bob hit a ball, the hit BALL flew far after it was hit."; 
        String [] banned = {"hit"};
        System.out.println(mostCommonWord(paragraph,banned));
    }
    public static String mostCommonWord(String paragraph, String[] banned) {
        HashMap <String, Integer> map = new HashMap<>();
        String[] words = paragraph.replaceAll("\\W+", " ").toLowerCase().split("\\s+");
        for(int i=0; i<words.length; i++){
            map.put(words[i],map.getOrDefault(words[i],0)+1);
        }

        ArrayList <String> list = new ArrayList<>();
        for(int i=0; i<banned.length; i++){
            list.add(banned[i]);
        }

        int max=Integer.MIN_VALUE;

        for (HashMap.Entry <String,Integer> entry : map.entrySet()){
            if (!list.contains(entry.getKey())){
                max=Math.max(max,entry.getValue());
            }
        }

        for (HashMap.Entry <String,Integer> entry : map.entrySet()) {
            if (entry.getValue() == max && (!list.contains(entry.getKey()))) {
                return entry.getKey();
            }
        }
        return paragraph;
    }
    
}
