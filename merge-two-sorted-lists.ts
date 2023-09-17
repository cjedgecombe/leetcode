function mergeTwoLists(list1: ListNode | null, list2: ListNode | null): ListNode | null {
  // create dummy node to avoid empty edge case
  let result = new ListNode();
  // assign tail variable to dummy node
  let tail = result;

  // as log as both we haven't reached the end of either list
  while (list1 !== null && list2 !== null){
      // if list 1 node is smaller than list 2 node
      if (list1.val < list2.val){
          // add list 1 node to tail's next node
          tail.next = list1;
          // progress the list 1 node pointer
          list1 = list1.next;
      // otherwise, do the same with current list 2 node
      } else {
          tail.next = list2;
          list2 = list2.next;
      }
      // move current tail pointer forward one node
      tail = tail.next;
  }

  // if either list still has nodes by this point, add that remainder of nodes to the end of the result
  if (list1 === null) {
      tail.next = list2;
  } else if (list2 === null) {
      tail.next = list1;
  }

  // return the new list, starting one node after the dummy node
  return result.next;
};