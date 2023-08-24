package BinaryTree;
class TreeNodeM {
    int val;
    TreeNodeM left;
    TreeNodeM right;
    TreeNodeM (){}
    TreeNodeM(int val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
}
public class SubtreeofAnotherTree {
    public static void main(String[] args) {
        TreeNodeM root1 = new TreeNodeM(1);
        root1.left = new TreeNodeM(2);
        root1.right = new TreeNodeM(3);
        root1.right.left = new TreeNodeM(4);
        
        TreeNodeM root2 = new TreeNodeM(3);
        root2.left = new TreeNodeM(4);

        System.out.println(isSubtree(root1, root2));
    }
    
    public static boolean isSubtree(TreeNodeM root, TreeNodeM subRoot) {
        if(root != null && subRoot != null){
            return same(root, subRoot) || (isSubtree(root.left, subRoot) || isSubtree(root.right, subRoot));
        } 
        else if (root != null || subRoot != null) {
            return false;
        } else {        
            return true;
        } 
    }
    public static boolean same(TreeNodeM root, TreeNodeM subRoot) {
        if(root != null && subRoot != null) {
            return root.val == subRoot.val && same(root.left, subRoot.left) && same(root.right, subRoot.right);
        } else if (root != null || subRoot != null) {
            return false;
        } else {
            return true;
        }         
    }
}