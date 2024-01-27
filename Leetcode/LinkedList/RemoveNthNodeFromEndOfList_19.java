package Leetcode.LinkedList;

class LinkedList_19 {
    Node head;
    public class Node {
        int val;
        Node next;
        Node(){}
        Node(int val) {
            this.val = val;
        }
        Node(int val, Node next) {
            this.val = val;
            this.next = next;
        }
    }
    public void display() {
        Node temp = head;
        while (temp != null) {
            System.out.print(temp.val + "->");
            temp = temp.next;
        }
        System.out.println("null");
    }
    public void addFirst(int num) {
        Node newNode = new Node(num);
        Node temp = head;
        if (temp == null) {
            head = newNode;
            newNode.next = null;
        } else {
            newNode.next = head;
            head = newNode;
        }
    }
    public void addLast(int num) {
        Node newNode = new Node(num);
        Node temp = head;
        
        if (temp == null) {
            head = newNode;
            newNode.next = null;
        } else {
            while (temp.next != null) {
                temp = temp.next;
            }
            temp.next = newNode;
            newNode.next = null;
        }
    }
    public Node removeNthFromEnd(Node head, int n) {
        Node newNode = new Node(0, head);
        Node fastPointer = newNode;
        Node slowPointer = newNode;
        while (n-- != 0) {
            fastPointer = fastPointer.next;
        }
        while (fastPointer != null && fastPointer.next != null) {
            fastPointer = fastPointer.next;
            slowPointer = slowPointer.next;
        }
        slowPointer.next = slowPointer.next.next;
        return newNode.next;
    }
    
}

public class RemoveNthNodeFromEndOfList_19 {
    public static void main(String [] args) {
        LinkedList_19 list = new LinkedList_19();
        list.addLast(1);
        list.addLast(2);
        list.addLast(3);
        list.addLast(4);
        list.addLast(5);
        list.display();
        System.out.println();
        list.head = list.removeNthFromEnd(list.head, 2);
        list.display();
    }
}
