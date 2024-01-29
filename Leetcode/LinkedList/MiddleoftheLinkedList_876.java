package Leetcode.LinkedList;

class LinkedList_876 {
    Node head;
    public class Node{
        int value;
        Node next;

        Node () {}
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
        while (temp != null) {
            System.out.print(temp.value + " -> ");
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
            while (temp.next != null) {
                temp = temp.next;
            }
            temp.next = newNode;
            newNode.next = null;
        }
    }
    public Node middleNode(Node head) {
        Node fast = head;
        Node slow = head;
        while (fast != null && fast.next != null) {
            fast = fast.next.next;
            slow = slow.next;
        }
        return slow;
    }
}

public class MiddleoftheLinkedList_876 {
    public static void main(String [] args) {
        LinkedList_876 link = new LinkedList_876();
        link.addLast(1);
        link.addLast(2);
        link.addLast(3);
        link.addLast(4);
        link.addLast(5);
        link.display();
        System.out.println();
        link.head = link.middleNode(link.head);
        link.display();
        System.out.println();

    }
}
