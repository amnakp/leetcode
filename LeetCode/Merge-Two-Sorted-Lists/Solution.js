1/**
2 * Definition for singly-linked list.
3 * function ListNode(val, next) {
4 *     this.val = (val===undefined ? 0 : val)
5 *     this.next = (next===undefined ? null : next)
6 * }
7 */
8/**
9 * @param {ListNode} list1
10 * @param {ListNode} list2
11 * @return {ListNode}
12 */
13var mergeTwoLists = function(list1, list2) {
14        let dummy = new ListNode(0);
15    let current = dummy;
16
17    while (list1 && list2) {
18        if (list1.val <= list2.val) {
19            current.next = list1;
20            list1 = list1.next;
21        } else {
22            current.next = list2;
23            list2 = list2.next;
24        }
25
26        current = current.next;
27    }
28
29    current.next = list1 || list2;
30
31    return dummy.next;
32    
33};