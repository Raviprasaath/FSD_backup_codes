package Leetcode.Arrays;

public class SearchInsertPosition_35 {
    public static void main (String [] args) {
        int [] array = {1, 3, 5, 6};
        System.out.print(searchInsertPosition(array, 7));
    }
    public static int searchInsertPosition (int [] array, int target) {
        int low = 0;
        int high = array.length-1;
        int mid = 0;
        while(low <= high){
            mid = low + (high-low) / 2;
            if (array[mid] == target) {
                return mid;
            } else if (array[mid] > target){
                high=mid-1;
            } else {
                low=mid+1;
            }
        }
        return low;
    }
}