package Array;

public class SumOfMinimumAndMaximumElementsOfSubarrays {
    public static void main(String[] args) {
        int [] array = {1,2,3,4,5};
        int n = array.length;
        int m = 3;
                
        int p1 = 0;
        int p2 = m-1; 
        long sum = 0;

        while (p2 < n) {
            sum += maxMin (array, p1, p2);
            p1++;
            p2++;
        }
        System.out.print(sum);
    }
    public static int maxMin(int [] array, int p1, int p2) {
        int max = Integer.MIN_VALUE;
        int min = Integer.MAX_VALUE;
        for (int i=p1; i<=p2; i++) {
            max = Math.max(max, array[i]);
            min = Math.min(min, array[i]);
        }
        return (max+min);
    }
}
