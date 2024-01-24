package Leetcode.Array2d;

public class SearchA2DMatrix_74 {
    public static void main(String [] args) {
        int [][] matrix = {{1,3,5,7},{10,11,16,20},{23,30,34,60}};
        // int [][] matrix = {{1},{3}};

        int target = 3;
        System.out.print(searchMatrix(matrix, target));
    }
    public static boolean searchMatrix(int[][] matrix, int target) {
        for (int i=0; i<matrix.length; i++) {
            int [] temp = matrix[i];
            
            boolean ans = binary(temp, target);
            if (ans) {
                return true;
            }
        }
        return false;
    }
    public static boolean binary(int [] array, int target) {
        int left = 0;
        int right = array.length-1;
        while (left <= right) {
            int mid = left + (right-left) / 2;
            if (array[mid] == target) {
                return true;
            } else if (array[mid] <= target) {
                left = mid+1;
            } else {
                right = mid-1;
            }
        }
        return false;
    }
}
