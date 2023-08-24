package BinaryTree;
class TreeNodeH {
    int val;
    TreeNodeH left;
    TreeNodeH right;
    TreeNodeH (){}
    TreeNodeH(int val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
}
public class MaxpathfromRoottoLeaf {
    public static void main(String[] args) {
        TreeNodeH root = new TreeNodeH(2);
        root.left = new TreeNodeH(4);
        root.right = new TreeNodeH(11);
        root.left.left = new TreeNodeH(3);

        System.out.println(rootToLeaf(root));
    }
    public static long rootToLeaf(TreeNodeH root){
        if (root == null) {
            return 0;
        }
        return maxPath(root, 0);
    }
    public static long maxPath(TreeNodeH node, long currentSum) {
        if(node == null) {
            return 0;
        }
        
        currentSum = currentSum + node.val;

        if(node.left == null && node.right == null) {
            return currentSum;
        }
        long leftSum = maxPath(node.left, currentSum);
        long rightSum = maxPath(node.right, currentSum);
        return Math.max(leftSum, rightSum);
    }
}