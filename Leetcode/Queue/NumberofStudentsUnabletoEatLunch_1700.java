package Leetcode.Queue;

import java.util.LinkedList;
import java.util.Queue;

public class NumberofStudentsUnabletoEatLunch_1700 {
    public static void main(String[] args) {
        int [] students = {1,1,0,0};
        int [] sandwiches = {0,1,0,1};
        System.out.println(countStudents(students, sandwiches));
    }
    public static int countStudents(int[] students, int[] sandwiches) {
        Queue <Integer> qu1 = new LinkedList<>();
        Queue <Integer> qu2 = new LinkedList<>();

        for (int i=0; i<students.length; i++) {
            qu1.add(students[i]);
        }

        for (int i=0; i<sandwiches.length; i++) {
            qu2.add(sandwiches[i]);
        }

        int count = 0;

        while (!qu1.isEmpty()) {
            if (qu1.peek() == qu2.peek()) {
                qu1.poll();
                qu2.poll();
                count = 0;
            } else {
                if (count == qu1.size()) {
                    break;
                } else {
                    int temp = qu1.poll();
                    qu1.add(temp);
                    count++;
                }
            }
        }
        return qu1.size();
    }
}
