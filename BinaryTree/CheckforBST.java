package BinaryTree;
class TreeNodeA {
    int val;
    TreeNodeA left;
    TreeNodeA right;
    TreeNodeA (){}
    TreeNodeA(int val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
}
public class CheckforBST {
    public static void main(String[] args) {
        TreeNodeA root = new TreeNodeA(2);
        root.left = new TreeNodeA(1);
        root.right = new TreeNodeA(3);
       
        System.out.println(isBST(root));
    }
    public static boolean isValidBST(TreeNodeA root, Integer minValue, Integer maxValue) {
        if (root == null) {
            return true;
        }
        if ((minValue != null && root.val <= minValue) || (maxValue != null && root.val >= maxValue)) {
            return false;
        }
        return isValidBST(root.left, minValue, root.val) && isValidBST(root.right, root.val, maxValue); 
    }

    public static boolean isBST(TreeNodeA root) { 
        return isValidBST(root, null, null);
    }
}