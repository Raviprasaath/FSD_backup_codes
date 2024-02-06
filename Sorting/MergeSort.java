public class MergeSort {
    public static void main(String [] args) {
        int [] array = {9,5,2,5,4,3,8,7,2,9,8};
        mergeSort(array, 0, array.length-1);
        for (int i=0; i<array.length; i++) {
            System.out.print(array[i]+" ");
        }
    }
    public static void mergeSort(int [] array, int left, int right) {
        if (left >= right) {
            return;
        }
        int mid = left + (right-left)/2;
        mergeSort(array, left, mid);
        mergeSort(array, mid+1, right);
        mergeArray(array, left, mid, right);
    }
    public static void mergeArray(int [] array, int left, int mid, int right) {
        int p1 = left, p2 = mid +1, i = 0;
        int [] ans = new int[right - left + 1];
        while (p1 <= mid && p2 <= right) {
            if (array[p1] < array[p2]) {
                ans[i] = array[p1];
                i++;
                p1++;
            } else {
                ans[i] = array[p2];
                i++;
                p2++;
            }
        }
        while (p1 <= mid) {
            ans[i] = array[p1];
            i++;
            p1++;
        }
        while (p2 <= right) {
            ans[i] = array[p2];
            i++;
            p2++;
        }
        for (int j=left; j<=right; j++) {
            array[j] = ans[j-left];
        }
        System.out.println();
    }
}
