package Recursion;

import java.util.*;

public class TowerOfHanoi {
    public static void main (String [] args) {
        int n = 5;
        toh(n, 1, 3, 2);
    }
    public static void toh(int  n, int source_rod, int destination_rod, int helper_rod) {
        if (n == 0) {
            return;
        }

        toh(n-1, source_rod, helper_rod, destination_rod);
        System.out.println("disk is moving "+n+" source rod "+source_rod+" destination rod "+destination_rod);
        toh(n-1, helper_rod, destination_rod, source_rod);
    }
}