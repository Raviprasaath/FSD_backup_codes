package Leetcode.Arrays;

import java.util.ArrayList;
import java.util.HashSet;

public class IntersectionofTwoArrays_349 {
    public static void main(String[] args) {
        int [] nums1 = {4,9,5};
        int [] nums2 = {9,4,9,8,4};
        int [] ans = intersection(nums1, nums2);
        System.out.print("[");
        for (int i = 0; i < ans.length; i++) {
            System.out.print(ans[i]+" ");
        }
        System.out.print("]");
    }
    // 95 beats
    public static int[] intersection(int[] nums1, int[] nums2) {
        HashSet <Integer> hset = new HashSet<>();
        HashSet <Integer> result = new HashSet<>();
        for(int num: nums1){
            hset.add(num);
        }
        for(int num: nums2){
            if(hset.contains(num)){
                result.add(num);
            }
        }
        int[] res = new int[result.size()];
        int i = 0;
        for(int num : result){
            res[i++] = num;
        }
        return res;
    }


    // low beats
    public static int[] intersection1(int[] nums1, int[] nums2) {
        HashSet <Integer> hset = new HashSet<>();
        ArrayList <Integer> list = new ArrayList<>();
        
        for (int i=0; i<nums1.length; i++) {
            hset.add(nums1[i]);
        }
        
        for (int i=0; i<nums2.length; i++) {
            if (hset.contains(nums2[i]) && !list.contains(nums2[i]) ) {
                list.add(nums2[i]);
                hset.remove(nums2[i]);
            } 
        }
        
        int [] ans = new int[list.size()];
        for (int i=0; i<list.size(); i++) {
            ans[i] = list.get(i);
        }
        
        return ans;
    }
}
