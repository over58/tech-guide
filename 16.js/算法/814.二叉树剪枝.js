/*
 * @lc app=leetcode.cn id=814 lang=javascript
 *
 * [814] 二叉树剪枝
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
var pruneTree = function (root) {
    root.left =root.left &&  pruneTree(root.left)
    root.right = root.right && pruneTree(root.right)
    if(root.val === 0 && !root.left && !root.right) {
        return null
    }else{
        return root
    }
}
// @lc code=end
