package ArrayList;

import java.util.ArrayList;

public class arraylistSorting {
    public static void main(String[] args) {
        int [] array = {20,1,50,9,6,5};
        ArrayList <Integer> list = new ArrayList<>();        
        for (int i = 0; i < array.length; i++) {
            list.add(array[i]);
        }

        list.sort((a,b) -> a-b); // comparator
        System.out.println(list);
        list.sort((a,b) -> b-a);
        System.out.println(list);
    }
}
