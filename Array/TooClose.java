package Array;
import java.util.ArrayList;
import java.util.Arrays;

public class TooClose {
    public static void main(String[] args) {
        int [] array = {4,7,10,6,5};
        int k = 9;
        int inc = 0;
        int dec = 0;
        int max = Integer.MIN_VALUE, min = Integer.MAX_VALUE;
        ArrayList <Integer> list = new ArrayList<>();
        for (int i=0; i<array.length; i++) {
            list.add(array[i]);
            max = Math.max(max, array[i]);
            min = Math.min(min, array[i]);
        }
        
        for (int i=0; i<array.length; i++) {
            inc = k + i;
            dec = k - i;
            if (!list.contains(k)) {
                System.out.print(k);
                break;
            } else if ( !list.contains(inc) && inc <= max) {
                System.out.print(inc);
                break;
            } else if (!list.contains(dec) && dec >= min) {
                System.out.print(dec);
                break;
            }
        }
    }
    // public static int close(int[]array, int k) {
    //     ArrayList <Integer> list = new ArrayList<>();
    //     Arrays.sort(array);
    //     int n = array.length;
        
    //     int ans = 0;
    //     for (int i=0; i<n; i++) {
    //         list.add(array[i]);
    //     }

    //     int listMin = array[0];
    //     int listMax = array[n-1];
    //     // System.out.println(listMax);
    //     // System.out.println(listMin);
        
    //     int j = 1;
    //     for (int i=0; i<n; i++) {
    //         int temp1 = k+j; //increase
    //         int temp2 = k-j; //decrease
    //         if (!list.contains(k)) {
    //             ans = k;
    //             break;
    //         } else if (!list.contains(temp2) && (listMin <= k)) {
    //             ans = temp2;
    //             break;
    //         } else if (!list.contains(temp1) && (listMax >= k)) {
    //             ans = temp1;
    //             break;
    //         } else {
    //             j++;
    //         }
    //     }
    //     return ans;
    // }
}
