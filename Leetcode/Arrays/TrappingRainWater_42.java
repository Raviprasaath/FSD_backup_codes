package Leetcode.Arrays;

public class TrappingRainWater_42{
    public static void main(String[] args) {
        int array[] = {0,1,0,2,1,0,1,3,2,1,2,1};
        
        System.out.println(trap(array));
    }
    public static int trap(int[] height) {
        int [] left = new int [height.length];
        int [] right = new int [height.length];
        int max = 0;
        int ans = 0;

        max = height[0];
        for (int i=0; i<height.length; i++) {
            left[i] = Math.max(height[i], max);
            max = left[i];
        }
        System.out.println("left"+" " );
        for (int i = 0; i < right.length; i++) {
            System.out.print(left[i]+" ");
        }
        max = height[height.length-1];
        for (int i=height.length-1; i>=0; i--) {
            right[i] = Math.max(height[i], max);
            max = right[i];
        }
        System.out.println("right"+" ");
        for (int i = 0; i < right.length; i++) {
            System.out.print(right[i]+" ");
        }
        for (int i=0; i<height.length; i++) {
            ans = ans + (Math.min(left[i], right[i])-height[i]);
        }
        return ans;

    }
    public static int trap1(int[] height) {
        int n = height.length-1;
        int left = 0;
        int right = n;
        int leftMax = 0;
        int rightMax = 0;
        int water = 0;
        while (left <= right) {
            if (height[left] <= height[right]) {
                if (height[left] >= leftMax) {
                    leftMax = height[left];
                } else {
                    water += leftMax - height[left];
                }
                left++;
            } else {
                if (height[right] >= rightMax) {
                    rightMax = height[right];
                } else {
                    water += rightMax - height[right];
                }
                right--;
            }
        }
        return water;
    }

}