let mergeTwoLists = function (list1: number[], list2: number[]) {
  let newArr = [];
  if (list1.length > list2.length) {
    for (let i = 0; i < list1.length; i++) {
      newArr.push(list1[i]);
      newArr.push(list2[i]);
    }
  } else if (list1.length < list2.length) {
    for (let i = 0; i < list2.length; i++) {
      newArr.push(list2[i]);
      newArr.push(list1[i]);
    }
  }
  for (let i = 0; i < list2.length; i++) {
    newArr.push(list2[i]);
    newArr.push(list1[i]);
    return newArr;
  }
};


console.log(mergeTwoLists([1, 2, 4], [1, 3, 4]))