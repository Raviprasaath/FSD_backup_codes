package BinaryTree;
class TreeNodeB {
    int val;
    TreeNodeB left;
    TreeNodeB right;
    TreeNodeB (){}
    TreeNodeB(int val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
}
public class Checkiftwobinarytreesaremirror {
    public static void main(String[] args) {
        TreeNodeB root = new TreeNodeB(50);
        root.left = new TreeNodeB(25);
        root.left.left = new TreeNodeB(12);
        root.left.right = new TreeNodeB(37);
        root.right = new TreeNodeB(87);
        root.right.left = new TreeNodeB(62);
        root.right.right = new TreeNodeB(90);
        root.right.right.right = new TreeNodeB(93);
        System.out.println(isMirror(root, root));
    }
    
    public static boolean isMirror(TreeNodeB root1, TreeNodeB root2) {
        if (root1 == null && root2 == null) {
            return true;
        }
        if (root1 == null || root2 == null) {
            return false;
        }
        return 
        root1.val == root2.val && 
        isMirror(root1.left, root2.right) && 
        isMirror (root1.right, root2.left);
    }

}