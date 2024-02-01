package Leetcode.LinkedList;

class LinkedList_206 {
    Node head;
    public class Node {
        int value;
        Node next;

        Node () {}
        Node (int value) {
            this.value = value;
        }
        Node (int value, Node next) {
            this.value = value;
            this.next = null;
        }
    }
    public void display () {
        Node temp = head;
        while (temp != null) {
            System.out.print(temp.value + "->");
            temp = temp.next;
        }
        System.out.print("null");
    }
    public void addFirst (int num) {
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
    public void addLast (int num) {
        Node newNode = new Node(num);
        Node temp = head;
        if (temp == null) {
            newNode.next = null;
            head = newNode;
        } else {
            while(temp.next != null) {
                temp = temp.next;
            }
            temp.next = newNode;
            newNode.next = null;
        }
    }
    public Node reverseList(Node head) {
        Node prev = null;
        Node current = head;
        Node nextStore = null;
        while (current != null) {
            nextStore = current.next;
            current.next = prev;
            prev = current;
            current = nextStore;
        }
        return prev;
    }
}

public class ReverseLinkedList_206 {
    public static void main(String [] args) {
        LinkedList_206 link = new LinkedList_206();
        link.addLast(1);
        link.addLast(2);
        link.addLast(3);
        link.display();
        System.out.println();
        link.head = link.reverseList(link.head);
        link.display();
        System.out.println();
    }
}
