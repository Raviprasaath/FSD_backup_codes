package Leetcode.LinkedList;
class LinkedList_141 {
    Node head;
    public class Node {
        int value;
        Node next;
        Node () {};
        Node (int value) {
            this.value = value;
        }
        Node (int value, Node next) {
            this.next = null;
        }
    }
    public void display () {
        Node temp = head;
        while (temp != null) {
            System.out.print(temp.value+"->");
            temp = temp.next;
        }
        System.out.print("null");
    }
    public void addLast(int num) {
        Node newNode = new Node(num);
        Node temp = head;
        if (temp == null) {
            newNode.next = null;
            head = newNode;
        } else {
            while (temp.next != null) {
                temp = temp.next;
            }
            temp.next = newNode;
            newNode.next = null;
        }
    }
    public void addFirst (int num) {
        Node newNode = new Node(num);
        Node temp = head;
        if (temp == null) {
            newNode.next = null;
            head  =newNode;
        } else {
            newNode.next = head;
            head = newNode;
        }
    }
    public boolean hasCycle(Node head) {
        Node fast = head;
        Node slow = head;
        while (fast != null && fast.next != null) {
            fast = fast.next.next;
            slow = slow.next;
            if (fast == slow) {
                return true;
            }
        }
        return false;
    }
}
public class LinkedListCycle_141 {
    public static void main(String[] args) {
        
    }
}
