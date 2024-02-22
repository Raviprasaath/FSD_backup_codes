package Testing;
import java.util.*;

public class roughwork9 {
    public static void main (String [] args) {
        Scanner sc = new Scanner (System.in);
        int n = sc.nextInt();
        int [] array = new int[n];
        for (int i=0; i<n; i++) {
            array[i] = sc.nextInt();
        }
        int k = sc.nextInt();
        int l = sc.nextInt();
        int r = sc.nextInt();
        Arrays.sort(array);

        for (int i=l; i<=r; i++) {
            k--;
            if (k == 0) {
                System.out.print(array[i]);
                break;
            }
        }
    }
}
