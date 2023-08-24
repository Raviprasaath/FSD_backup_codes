package Recursion;

public class intro {
    public static void main (String[] args) {
        int n = 5;
        int [] arr = new int[n];
        helper(arr, n, n);
         for (int i = 0; i < arr.length; i++) {
             System.out.print(arr[i] + " ");
         }
     }
 
     public static void helper(int [] arr, int n, int m) {
         if (n == 0) {
             return;
         }
         
         arr[m-n] = n;
         helper(arr, n-1, m);
     }
 
 
 
     // public static void helper(int [] arr, int n) {
         
     //     if (n == 0) {
     //         return;
     //     }
         
     //     arr[n-1] = n;
     //     helper(arr, n-1);
     // }
}
