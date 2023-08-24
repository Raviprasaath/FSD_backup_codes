package Testing;

public class roughwork3 {

    public static void main(String[] args) {
        int [] array = {0,1,2,3,0,1,2,3};
                
        int max = 0;
        for (int i=0; i<array.length; i++) {
            max = Math.max(array[i], max);
        }
        int [] array2 = new int[max+1]; // 0 0 0 0 0 0
        
        for (int i=0; i<array.length; i++) {
            array2[array[i]]++; // 0 1 0 0 0 1 0 1 1 1
        }
        for (int i=0; i<array2.length; i++) {
            if (array2[i] != 0) {
                System.out.print(array2[i]+" freq find");
                System.out.print(i+" sorting");
            }
        }
    }
}
