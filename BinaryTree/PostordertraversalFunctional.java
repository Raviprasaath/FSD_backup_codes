package BinaryTree;


class TreeNodeJ {
    int val;
    TreeNodeJ left;
    TreeNodeJ right;
    TreeNodeJ (){}
    TreeNodeJ(int val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
}
public class PostordertraversalFunctional {
    public static void main(String[] args) {
        TreeNodeJ root = new TreeNodeJ(12);
        root.left = new TreeNodeJ(10);
        root.right = new TreeNodeJ(15);
        root.left.left = new TreeNodeJ(8);
        root.left.right = new TreeNodeJ(9);
        root.left.left.left = new TreeNodeJ(6);
        root.left.left.right = new TreeNodeJ(5);
        root.left.right.left = new TreeNodeJ(7);
        root.left.right.right = new TreeNodeJ(4);
        root.right.left = new TreeNodeJ(16);
        root.right.right = new TreeNodeJ(18);

        postorderTraversal(root);
    }
    public static void postorderTraversal(TreeNodeJ node) {
        if(node != null) {
            postorderTraversal(node.left);
            postorderTraversal(node.right);
            System.out.print(node.val+" ");
        }
    }    
}