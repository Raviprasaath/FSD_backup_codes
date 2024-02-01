package Leetcode.LinkedList;

import java.net.Socket;

class LinkedList_234 {
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
    public boolean isPalindrome(Node head) {
        Node fast = head;
        Node slow = head;
        while (fast != null && fast.next != null) {
            fast = fast.next.next;
            slow = slow.next;
        }
        slow = reverse(slow);
        while (slow != null) {
            if (head.value != slow.value) {
                return false;
            }
            head = head.next;
            slow = slow.next;
        }
        return true;
    }
    public static Node reverse(Node head) {
        Node prev = null;
        Node curr = head;
        Node nextStore = null;
        while (curr != null) {
            nextStore = curr.next;
            curr.next = prev;
            prev = curr;
            curr = nextStore;
        }
        return prev;
    }
}
public class PalindromeLinkedList_234 {
    public static void main(String [] args) {
        LinkedList_234 link = new LinkedList_234();
        link.addLast(1);
        link.addLast(2);
        link.addLast(2);
        link.addLast(1);
        link.display();
        System.out.println();
        System.out.println(link.isPalindrome(link.head));
    }
}
