package Leetcode.LinkedList;

class LinkedList_142 {
    Node head;

    public class Node {
        int value;
        Node next;

        Node() {
        }

        Node(int value) {
            this.value = value;
        }

        Node(int value, Node next) {
            this.value = value;
            this.next = next;
        }
    }

    public void display() {
        Node temp = head;
        while (temp != null) {
            System.out.print(temp.value + "->");
            temp = temp.next;
        }
        System.out.print("null");
    }

    public void addLast(int num) {
        Node newNode = new Node(num);
        if (head == null) {
            head = newNode;
            return;
        }

        Node temp = head;
        while (temp.next != null) {
            temp = temp.next;
        }

        temp.next = newNode;
    }

    public void connectLastNodeToPosition(int pos) {
        if (pos < 0) {
            System.out.println("Invalid position");
            return;
        }
    
        Node temp = head;
        Node posNode = null;
        int count = 0;
    
        while (temp != null) {
            if (count == pos) {
                posNode = temp;
                break;
            }
            temp = temp.next;
            count++;
        }
    
        if (posNode == null) {
            System.out.println("Invalid position");
            return;
        }
    
        Node lastNode = head;
        while (lastNode.next != null) {
            lastNode = lastNode.next;
        }
        lastNode.next = posNode;
    
        lastNode.next = null;
    }

    public Node detectCycle(Node head) {
        Node fast = head;
        Node slow = head;

        while (fast != null && fast.next != null) {
            fast = fast.next.next;
            slow = slow.next;
            if (fast == slow) {
                slow = head;
                while (fast != slow) {
                    fast = fast.next;
                    slow = slow.next;
                }
                return slow;
            }
        }

        return null;
    }
    
}

public class LinkedListCycleII_142 {
    public static void main(String[] args) {
        LinkedList_142 link = new LinkedList_142();
        link.addLast(3);
        link.addLast(2);
        link.addLast(0);
        link.addLast(-4);

        // Connect the last node to position 1
        link.connectLastNodeToPosition(1);

        link.display();
        System.out.println();
        System.out.println(link.detectCycle(link.head));
    }
}
