package BinaryTree;


class TreeNodeI {
    int val;
    TreeNodeI left;
    TreeNodeI right;

    TreeNodeI(int data) {
        val = data;
        left = null;
        right = null;
    }

}

public class MinimuminBST {
    public static void main(String[] args) {
        TreeNodeI root = new TreeNodeI(5);
        root.left = new TreeNodeI(4);
        root.right = new TreeNodeI(6);
        root.left.left = new TreeNodeI(3);
        root.right.right = new TreeNodeI(7);
        root.left.left.left = new TreeNodeI(1);
        System.out.println(minValue(root));
    }
    public static int minValue(TreeNodeI node) {
        TreeNodeI temp = node;
        while (temp.left != null) {
            temp = temp.left;
        }
        return (temp.val);
    }
}