package Leetcode.LinkedList;

class LinkedList_328 {
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
    public void addLast (int num) {
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
    public Node oddEvenList (Node head) {
        if (head == null) return head;
        Node odd = head;
        Node even = head.next;
        Node evenHead = even;
        while (even != null && even.next != null) {
            odd.next = even.next;
            odd = odd.next;
            even.next = odd.next;
            even = even.next;
        }
        odd.next = evenHead;
        return head;
    }
}
public class OddEvenLinkedList_328 {
    public static void main(String [] args) {
        LinkedList_328 link = new LinkedList_328();
        link.addLast(2);
        link.addLast(1);
        link.addLast(3);
        link.addLast(5);
        link.addLast(6);
        link.addLast(4);
        link.addLast(7);
        link.display();
        System.out.println();
        link.oddEvenList(link.head);
        link.display();
    }
}
