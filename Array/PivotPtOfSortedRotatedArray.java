package Array;

public class PivotPtOfSortedRotatedArray {
    public static void main(String[] args) {
        int [] array={7,8,9,1,2,3,4,5};
        int target = 8;
        int ans = searchinrotatesortedarr(array, target);
        System.out.println(ans);
    }    
    public static int searchinrotatesortedarr(int[] nums, int target) {
        int n = nums.length;
        int low = 0;
        int high = n - 1;

        while (low <= high) {
            int mid = low + (high - low) / 2;

            if (target == nums[mid]) {
                return mid;
            }
            if (nums[low] <= nums[mid]) { 
                if (target >= nums[low] && target < nums[mid]) {
                    high = mid - 1;
                } else {
                    low = mid + 1;
                }
            } else {
                if (target > nums[mid] && target <= nums[high]) {
                    low = mid + 1;
                } else {
                    high = mid - 1;
                }
            }
        }

        return -1;
    }
}

/*
 * https://www.pepcoding.com/resources/online-java-foundation/time-and-space-complexity/pivot_of_sorted_and_rotated_array/topic
 */


//  int ans = binarySearch(array, low, array.length-1, 4);
//  System.out.println(ans);
