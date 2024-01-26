package Leetcode.LinkedList;

class LinkedList_82 {
    Node head;
    public class Node {
        int value;
        Node next;
        Node () {};
        Node (int value) {
            this.value = value;
        }
        Node (int value, Node next) {
            this.value = value;
            this.next = next;
        }
    }
    public void display() {
        Node temp = head;
        while(temp != null) {
            System.out.print(temp.value+ "->");
            temp = temp.next;
        }
        System.out.print("null");
    }
    public void addFirst(int num) {
        Node newNode = new Node(num);
        Node temp = head;
        if (temp == null) {
            newNode.next = null;
            head = newNode;
        } else {
            newNode.next = head;
            head = newNode;
        }
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
    public Node deleteDuplicates(Node head) {
        Node newNode = new Node(0, head);
        Node prev = newNode;
        while (head != null) {
            if (head.next != null && head.value == head.next.value) {
                while (head.next != null && head.value == head.next.value) {
                    head = head.next;
                }
                prev.next = head.next;
            } else {
                prev = prev.next;
            }
            head = head.next;
        }
        return newNode.next;
    }
}

public class RemoveDuplicatesFromSortedListII_82 {
    public static void main(String [] args) {
        LinkedList_82 list = new LinkedList_82();
        list.addLast(1);
        list.addLast(1);
        list.addLast(1);
        list.addLast(2);
        list.display();
        list.head = list.deleteDuplicates(list.head);
        System.out.println();
        list.display();
    }
}
