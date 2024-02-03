package Leetcode.BinaryTree;

import javax.swing.tree.TreeNode;

class Tree104 {
    Tree104 left;
    Tree104 right;
    int value;

    Tree104 () {}

    Tree104 (int value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

public class MaximumDepthOfBinaryTree_104 {
    public static void main(String [] args) {
        Tree104 root = new Tree104(3);
        root.left = new Tree104(9);
        root.right = new Tree104(20);
        root.right.left = new Tree104(15);
        root.right.right = new Tree104(15);
        System.out.println(maxDepth(root));
    }
    public static int maxDepth(Tree104 root) {
        if (root == null) {
            return 0;
        }
        return 1 + Math.max(maxDepth(root.left), maxDepth(root.right));
    }
}
