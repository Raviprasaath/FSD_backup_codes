
import java.util.*;

public class roughwork3 {

    public static void main(String[] args) {
        String myString = "Hello, World!";

        int address = System.identityHashCode(myString);
        System.out.println("Memory Address: " + address);

        myString = "Hello";
        address = System.identityHashCode(myString);

        System.out.println("Memory Address: " + address);

        StringBuilder sb = new StringBuilder(myString);
        sb.reverse();
        address = System.identityHashCode(sb);
        System.out.println(address);
        System.out.println("stringbuilder " + sb);

        sb.append("asdsad");
        address = System.identityHashCode(sb);
        System.out.println(address);
        System.out.println("stringbuilder " + sb);

        int[] array = { 1, 21, 1, 12, 2 };
        System.out.println(array);
        array[2] = 20;
        System.out.println(array);
    }
}
