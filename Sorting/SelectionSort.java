public class SelectionSort {
    public static void main(String[] args) {
        int [] array = {6,7,1,5,3,9,2,3};
        selectionSort(array);
        for (int i=0; i<array.length; i++) {
            System.out.print(array[i]+" ");
        }
    }
    public static void selectionSort(int [] array) {
        int n = array.length;
        for (int i=0; i<n; i++) {
            for (int j=i+1; j<n; j++) {
                if (array[j] < array[i]) {
                    int temp = array[i];
                    array[i] = array[j];
                    array[j] = temp;
                }
            }
        }
    }
}
