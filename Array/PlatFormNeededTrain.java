package Array;
import java.util.*;

public class PlatFormNeededTrain {
    public static void main(String [] args) {
        int [] arrival = {900, 940, 950, 1100, 1500, 1800};
        int [] departure = { 910, 1200, 1120, 1130, 1900, 2000 };
        Arrays.sort(arrival);
        Arrays.sort(departure);

        int n = arrival.length;
        int i = 1;
        int j = 0;
        
        int max = 1;
        int platForm = 1;

        while (i<n && j < n) {
            if (arrival[i] <= departure[j]) {
                platForm++;
                i++;
            } else {
                platForm--;
                j++;
            }

            max = Math.max(max, platForm);
        }
        System.out.println(max);
    }
}
/* 
900 940  950  1100 1500 1800
910 1120 1130 1200 1900 2000
 */


