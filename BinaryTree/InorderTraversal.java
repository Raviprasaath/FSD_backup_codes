package BinaryTree;


class TreeNodeE {
    int val;
    TreeNodeE left;
    TreeNodeE right;

    TreeNodeE(int data) {
        val = data;
        left = null;
        right = null;
    }

}
public class InorderTraversal {
    public static void main(String[] args) {
        TreeNodeE root = new TreeNodeE(50);
        root.left = new TreeNodeE(25);
        root.right = new TreeNodeE(75);
        root.left.left = new TreeNodeE(12);
        root.left.right = new TreeNodeE(37);
        root.left.right.left = new TreeNodeE(30);
        root.right.left = new TreeNodeE(62);
        root.right.right = new TreeNodeE(87);
        root.right.left.right = new TreeNodeE(70);
        traversal(root);
    }
    public static void traversal(TreeNodeE root) {
        if (root == null) {
            return;
        }
        traversal(root.left);
        System.out.print(root.val+" ");
        traversal(root.right);
    }

}