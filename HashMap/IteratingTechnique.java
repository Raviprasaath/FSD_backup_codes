import java.util.HashMap;

public class IteratingTechnique {
    public static void main(String [] args) {
        int [] array = {5,6,8,1,2,6,4};
        HashMap <String, Integer> map = new HashMap<>();
        map.put("apple", 8);
        map.put("car", 6);
        map.put("bank", 2);
        map.put("rob", 1);
        map.put("bike", 4);
        map.put("home", 5);
        map.put("jeep", 8);

        for (Integer i : array) {
            for (HashMap.Entry <String, Integer> entry : map.entrySet()) {
                if (entry.getValue().equals(i)) {
                    System.out.println(entry);
                    break;
                }
            }
        }

    }
}
