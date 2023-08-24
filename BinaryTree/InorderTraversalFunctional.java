package BinaryTree;
class TreeNodeF {
    int val;
    TreeNodeF left;
    TreeNodeF right;
    TreeNodeF (){}
    TreeNodeF(int val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
}
public class InorderTraversalFunctional {
    public static void main(String[] args) {
        TreeNodeF root = new TreeNodeF(50);
        root.left = new TreeNodeF(25);
        root.left.left = new TreeNodeF(12);
        root.left.right = new TreeNodeF(37);
        root.right = new TreeNodeF(75);
        root.right.left = new TreeNodeF(62);
        root.right.right = new TreeNodeF(87);
        root.right.left.right = new TreeNodeF(70);
        inorderTraversal(root);
    }
    public static void inorderTraversal(TreeNodeF node) {
        if (node == null) {
            return;
        }
        
        inorderTraversal(node.left);
        System.out.print(node.val+" ");
        inorderTraversal(node.right);
    }
}