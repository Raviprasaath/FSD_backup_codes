package Leetcode.LinkedList;

class LinkedList_2807 {
    Node head;
    public class Node {
        int val;
        Node next;

        Node (){};
        Node (int val) {
            this.val = val;
        }
        Node (int val, Node next) {
            this.val = val;
            this.next = null;
        }
    }
    public void display() {
        Node temp = head;
        while (temp != null) {
            System.out.print(temp.val + "->");
            temp = temp.next;
        }
        System.out.print("null");
    }
    public Node addLast(int num) {
        Node newNode = new Node(num);
        Node temp = head;
        if (head == null) {
            newNode.next = null;
            head = newNode;
        } else {
            while (temp.next != null) {
                temp = temp.next;
            }
            newNode.next = null;
            temp.next = newNode;
        }
        return head;
    }
    public Node insertGreatestCommonDivisors(Node head) {
        if (head == null || head.next == null) {
            return head;
        }
        Node temp = head;
        while (temp != null && temp.next != null) {
            int a = temp.val;
            int b = temp.next.val;
            int num = gcdNumber(a, b);
            Node newNode = new Node(num);
            newNode.next = temp.next;
            temp.next = newNode;
            temp = temp.next.next;
        }
        return head;
    }
    public int gcdNumber(int a, int b) {
        if (b==0) {
            return a;
        }
        return gcdNumber(b, a % b);
    }

}
public class InsertGreatestCommonDivisorsInLinkedList_2807 {
    public static void main(String [] args) {
        LinkedList_2807 link = new LinkedList_2807();

        link.addLast(18);
        link.addLast(6);
        link.addLast(10);
        link.addLast(3);
        link.display();
        System.out.println();
        link.head = link.insertGreatestCommonDivisors(link.head);
        link.display();
    }
}
