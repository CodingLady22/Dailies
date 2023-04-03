/* 
Merge 2 lists
You are given the heads of two sorted linked lists list1 and list2.

Merge the two lists in a one sorted list. The list should be made by splicing together the nodes of the first two lists.

Return the head of the merged linked list.

 

Example 1:


Input: list1 = [1,2,4], list2 = [1,3,4]
Output: [1,1,2,3,4,4]
Example 2:

Input: list1 = [], list2 = []
Output: []
Example 3:

Input: list1 = [], list2 = [0]
Output: [0]
*/

const mergeTwoLists = (list1, list2) => {
    const dummy = new ListNode(-Infinity)
    prev = dummy

    while (list1 && list2 ) {
        if(list1.val <= list2.val) {
        prev.next = list1
        prev = list1
        list1 = list1.next
        } else {
            prev.next = list2
            prev = list2
            list2 = list2.next
        }
        
    }
    if(!list1) prev.next = list2
    if(!list2) prev.next = list1

    return dummy.next
};