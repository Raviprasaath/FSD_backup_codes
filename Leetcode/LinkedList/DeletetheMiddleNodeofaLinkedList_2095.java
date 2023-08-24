package Leetcode.LinkedList;

class LList {
    Node head;

    public class Node {
        int val;
        Node next;

        Node() {
        }

        Node(int val) {
            this.val = val;
            this.next = null;
        }
    }

    public void display() {
        Node temp = head;
        while (temp != null) {
            System.out.print(temp.val + " -> ");
            temp = temp.next;
        }
        System.out.print("null");
    }

    public void add(int num) {
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

    public Node deleteMiddle(Node head) {
        Node first = head;
        Node second = head;
        int count = 0;

        while (first != null) {
            count++;
            first = first.next;
        }
        if (count <= 1) {
            return null;
        }
        int mid = (count / 2) - 1;
        while (mid-- > 0) {
            second = second.next;
        }
        second.next = second.next.next;
        return head;
    }

}

public class DeletetheMiddleNodeofaLinkedList_2095 {

    public static void main(String[] args) {
        LList list = new LList();
        list.add(1);
        list.add(2);
        list.add(3);
        list.add(4);
        list.add(5);
        list.display();
        System.out.println();
        list.head = list.deleteMiddle(list.head);
        list.display();
    }
}
