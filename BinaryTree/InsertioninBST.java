package BinaryTree;

public class InsertioninBST {
    public static void main(String[] args) {
        TreeNodeA root = new TreeNodeA(2);
        root.left = new TreeNodeA(1);
        root.right = new TreeNodeA(3);
        // root.left.left = new TreeNodeA(4);
        System.out.println(insertInBST(root,4 ));
        // TreeNodeA.head = TreeNodeA.kAltReverse(TreeNodeA.head, 3);
        
    }
    public static TreeNodeA insertInBST(TreeNodeA root,int key) {
        if (root == null) {
            root = new TreeNodeA(key);
            return root;
        } else {
            if (root.val < key) {
                root.right = insertInBST(root.right, key);
            } else if (root.val > key) {
                root.left = insertInBST(root.left, key);
            }
        }
        return root;
    }
}


// incomplete
// don't know how to print output