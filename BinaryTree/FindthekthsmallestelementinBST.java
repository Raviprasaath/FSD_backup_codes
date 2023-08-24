package BinaryTree;

import java.util.Stack;

class TreeNodeC {
    int val;
    TreeNodeC left;
    TreeNodeC right;
    TreeNodeC (){}
    TreeNodeC(int val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
}
public class FindthekthsmallestelementinBST {
    public static void main(String[] args) {
        TreeNodeC root = new TreeNodeC(50);
        root.left = new TreeNodeC(25);
        root.left.left = new TreeNodeC(12);
        root.left.right = new TreeNodeC(37);
        root.right = new TreeNodeC(75);
        root.right.left = new TreeNodeC(62);
        root.right.right = new TreeNodeC(87);
        root.right.left.right = new TreeNodeC(70);
        kthSmallestInBST(root, 3);
    }
    
    public static void kthSmallestInBST(TreeNodeC root, int k) {
        Stack <TreeNodeC> stack = new Stack<>();
            TreeNodeC current = root;
            int count = 0, ans = 0;
            while (current != null || !stack.empty()) {
                while (current != null) {
                    stack.push(current);
                    current = current.left;
                }
                current = stack.pop();
                count++;
                if (count == k) {
                    ans = current.val;
                    break;
                }
                current = current.right;
            }
            System.out.print(ans);
    }
}