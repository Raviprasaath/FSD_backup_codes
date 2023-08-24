package BinaryTree;
class TreeNodeG {
    int val;
    TreeNodeG left;
    TreeNodeG right;
    TreeNodeG (){}
    TreeNodeG(int val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
}
public class LeafSum {
    public static void main(String[] args) {
        TreeNodeG root = new TreeNodeG(3);
        root.left = new TreeNodeG(5);
        root.right = new TreeNodeG(7);
        root.left.left = new TreeNodeG(4);
        System.out.println(leafSum(root));
    }
    public static int leafSum(TreeNodeG root){
        if (root == null) {
            return 0;
        }

        if (root.left == null && root.right == null) {
            return root.val;
        }
        return leafSum (root.left) + leafSum (root.right);
    }
}