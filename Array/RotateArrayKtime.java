package Array;

import java.util.ArrayList;

public class RotateArrayKtime {
    public static void main(String[] args) {
        int array[]={1,2,3,4,5,6,7,8};
        int n = array.length;
        int kTimes=3;
        rotation(array, kTimes);
        // rotatearraylist(array, n, kTimes);
    }

    public static void rotatearraylist(int[] arr,int n,int k ){
        ArrayList<Integer>list=new ArrayList<>(n);
        for(int i=0; i<n; i++){
            list.add(arr[i]);
        }
        for(int i=0; i<k; i++){  //7 1 2 3 5 6 
            list.add(0,arr[n-1-i]);
            list.remove(n);
        }
        System.out.print(list);
    }
    public static void rotation(int [] array, int k) {
        int [] ans = new int[array.length];
        int j = 0;
        for (int i=array.length - k; i<array.length; i++) {
            ans[j] = array[i];
            j++;
        }
        int len = k;
        for (int i=0; i<array.length-k; i++) {
            ans[len] = array[i];
            len++;
        }
        for (int i=0; i<array.length; i++) {
            System.out.print(ans[i]+" ");
        }
    }
}