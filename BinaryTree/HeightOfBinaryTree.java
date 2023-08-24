package BinaryTree;
class TreeNodeD {
    int val;
    TreeNodeD left;
    TreeNodeD right;
    TreeNodeD (){}
    TreeNodeD(int val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
}

public class HeightOfBinaryTree {
    public static void main(String[] args) {
        TreeNodeD root = new TreeNodeD(1);
        root.left = new TreeNodeD(10);
        root.right = new TreeNodeD(39);
        root.left.left = new TreeNodeD(5);
        System.out.println(getHeight(root));
    }
    public static int getHeight(TreeNodeD node) {
        if (node == null) {
            return 0;
        }

        int ans = Math.max(getHeight(node.left), getHeight(node.right));
        return ans+1;
    }
}
