package BinaryTree;
class TreeNodeK {
    int val;
    TreeNodeK left;
    TreeNodeK right;
    TreeNodeK (){}
    TreeNodeK(int val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
}
public class PrintBSTinsortedorder {
    public static void main(String[] args) {
        TreeNodeK root = new TreeNodeK(50);
        root.left = new TreeNodeK(25);
        root.right = new TreeNodeK(87);
        root.left.left = new TreeNodeK(12);
        root.left.right = new TreeNodeK(37);
        root.right.left = new TreeNodeK(62);
        root.right.right = new TreeNodeK(90);
        root.right.right.right = new TreeNodeK(93);
        printBSTInSortedOrder(root);
    }
    public static void printBSTInSortedOrder(TreeNodeK node) {
        if (node == null) {
            return;
        }
        printBSTInSortedOrder (node.left);
        System.out.print(node.val+" ");
        printBSTInSortedOrder(node.right);
    }
}