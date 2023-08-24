package BinaryTree;
class TreeNodeL {
    int val;
    TreeNodeL left;
    TreeNodeL right;
    TreeNodeL (){}
    TreeNodeL(int val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
}
public class SearchingakeyinaBinarySearchTree {
    public static void main(String[] args) {
        TreeNodeL root = new TreeNodeL(4);
        root.left = new TreeNodeL(2);
        root.right = new TreeNodeL(7);
        root.left.left = new TreeNodeL(1);
        root.left.right = new TreeNodeL(3);
        System.out.println(searchInBST(root, 2));
    }

    public static int searchInBST(TreeNodeL root,int key) {
        if (root == null) {
            return -1;
        }
        if (root.val == key) {
            return 1;
        }
        if (root.val < key) {
            return searchInBST (root.right, key);
        } else {
            return searchInBST (root.left, key);
        }

    }
}