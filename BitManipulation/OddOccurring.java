package BitManipulation;

public class OddOccurring {
    public static void main(String[] args) {
        int [] array= {1,1,4,4,16};
        int n = array.length;
        int sum = 0;
        for (int i=0; i<n; i++) {
            sum ^= array[i];
        }
        System.out.print(sum);
    }
}