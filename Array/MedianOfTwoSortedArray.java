package Array;

public class MedianOfTwoSortedArray {

    public static void main(String[] args) {
      int[] arr1 = {1,8,6,5,4,7};
      int[] arr2 = {5,8,6,9,7,8};
      int n = arr1.length;
      int m = arr2.length;
  
      double ans = sortedarray(arr1, arr2, n, m);
      System.out.println(ans);
    }
  
    public static double sortedarray(int[] arr1, int[] arr2, int n, int m) {
  
      n = arr1.length;
      m = arr2.length;
      int array[] = new int[m + n];
      int i = 0, j = 0, k = 0;
  
      while (i < n && j < m) {
        if (arr1[i] < arr2[j]) {
          array[k] = arr1[i];
          i++;
        } else {
          array[k] = arr2[j];
          j++;
        }
        k++;
      }
      while (i < n) {
        array[k] = arr1[i];
        i++;
        k++;
      }
      while (j < m) {
        array[k] = arr2[j];
        j++;
        k++;
      }      
  
      if ((n + m) % 2 != 0) {
        return array[(m + n) / 2];
      } else {
        int x = (m + n) / 2; //4
        double p = array[x]; //array[2]
        double q = array[x - 1]; //c[1]
        return (p + q) / 2;
      }
    }  
  }
