package Leetcode.LinkedList;
class LinkedList_21 {
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
    public Node mergeTwoLists(Node list1, Node list2) {
        Node newNode = new Node(0);
        Node ans = newNode;
        while (list1 != null && list2 != null) {
            if (list1.value < list2.value) {
                newNode.next = list1;
                list1 = list1.next;
            } else {
                newNode.next = list2;
                list2 = list2.next;
            }
            newNode = newNode.next;
        }
        if (list1 != null) {
            newNode.next = list1;
        }
        if (list2 != null) {
            newNode.next = list2;
        }

        return ans.next;
    }
}

public class MergeTwoSortedLists_21 {
    public static void main(String[] args) {
        LinkedList_21 link1 = new LinkedList_21();
        link1.addLast(1);
        link1.addLast(2);
        link1.addLast(4);
        link1.display();
        System.out.println();
        
        LinkedList_21 link2 = new LinkedList_21();
        link2.addLast(1);
        link2.addLast(3);
        link2.addLast(4);
        link2.display();
        System.out.println();
        
        LinkedList_21 link3 = new LinkedList_21();
        link3.head = link1.mergeTwoLists(link1.head, link2.head);
        link3.display();
        System.out.println();
    }
}
