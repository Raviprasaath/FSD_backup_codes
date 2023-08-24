package BinaryTree;
class TreeNodeN {
    int val;
    TreeNodeN left;
    TreeNodeN right;
    TreeNodeN (){}
    TreeNodeN(int val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
}
public class TwoTreesAreIdentical {
    public static void main(String[] args) {
        TreeNodeN root1 = new TreeNodeN(1);
        root1.left = new TreeNodeN(2);
        root1.right = new TreeNodeN(3);
        
        TreeNodeN root2 = new TreeNodeN(1);
        root2.left = new TreeNodeN(2);
        root2.right = new TreeNodeN(3);
        System.out.println(isIdentical(root1, root2));
    }
    
    public static boolean isIdentical(TreeNodeN root1, TreeNodeN root2) {
        if(root1 == null && root2 == null) {
            return true;
        } 
        if(root1 == null || root2 == null) {
            return false;
        } 
        return 
        root1.val == root2.val && 
        isIdentical(root1.left, root2.left) && 
        isIdentical(root1.right, root2.right);        
    }
}