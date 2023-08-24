package Array;

public class secondThirdMax {
    public static void main(String[] args) {
        int [] arr = {8,8,4,4,2,3,1};
        int first = -1; 
        int second = -1; 
        int third = -1;
        for (int i = 0; i < arr.length; i++) {
            if (arr[i] > first) {
                third = second;
                second = first;
                first = arr[i];
            } else if (arr[i] > second && arr[i] < first) {
                second = arr[i];
            } else if (arr[i] > third && arr[i] < second) {
                third = arr[i];
            }        
        }
        
        System.out.println(first);
        System.out.println(second);
        System.out.println(third);
    }
}









// if (arr[i] > first) {
//     third = second;
//     second = first;
//     first = arr[i];
// } else if (arr[i] > second && arr[i] < first ) {
//     third = second;
//     second = arr[i];
// } else if (arr[i] > third && arr[i] < second) {
//     third = arr[i];
// }