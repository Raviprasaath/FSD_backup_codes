import java.util.*;

public class SortingEasyLatest {
    public static void main(String [] args) {
        
        // Keys Sorting

        HashMap <String, Integer> map = new HashMap<>();
        map.put("apple", 10);
        map.put("orange", 2);
        map.put("banana", 12);
        map.put("cycle", 8);
        map.put("bike", 5);

        ArrayList <String> list = new ArrayList<>(map.keySet());

        Collections.sort(list);

        for (String s : list) {
            System.out.println(s +"-"+ map.get(s));
        }

        System.out.println("------------------------------------------");

        // Value sorting
        HashMap <String, Integer> map2 = new HashMap<>();
        map2.put("apple", 10);
        map2.put("orange", 100);
        map2.put("banana", 112);
        map2.put("cycle", 11);
        map2.put("bike", 10);

        ArrayList <Integer> values = new ArrayList<>(map2.values());

        Collections.sort(values);
        
        for (Integer value : values) {
            for (HashMap.Entry <String, Integer> entry : map2.entrySet()) {
                if (entry.getValue().equals(value)) {
                    System.out.println(entry);
                    break;
                }
            }
        }

        System.out.println("------------------------------------------");
        
    }
}

