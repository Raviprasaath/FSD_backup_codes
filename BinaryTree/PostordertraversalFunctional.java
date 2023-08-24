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
        TreeNodeJ root = new TreeNodeJ(50);
        root.left = new TreeNodeJ(25);
        root.right = new TreeNodeJ(75);
        root.left.left = new TreeNodeJ(12);
        root.left.right = new TreeNodeJ(37);
        root.left.right.left = new TreeNodeJ(30);
        root.right.left = new TreeNodeJ(62);
        root.right.right = new TreeNodeJ(87);
        root.right.left.right = new TreeNodeJ(70);
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