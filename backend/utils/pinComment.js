const PinComment = (arr, fromIndex, toIndex) => {
  var element = arr[fromIndex];
  arr.splice(fromIndex, 1);
  arr.splice(toIndex, 0, element);

  return arr;
}

module.exports = PinComment;
