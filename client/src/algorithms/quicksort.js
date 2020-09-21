// Find a "pivot" element in the array to compare all other
// elements against and then shift elements before or after
// pivot depending on their values
function QuickSort(arr, resultArr, left = 0, right = arr.length - 1) {
  let len = arr.length,
      index

  if(len > 1) {

    index = partition(arr, resultArr, left, right)

    if(left < index - 1) {
      QuickSort(arr, resultArr ,left, index - 1)
    } 

    if(index < right) {
      QuickSort(arr, resultArr,index, right)
    }

  }

  return arr

}

const swapRef = function(array, index1, index2) {
  let temp = array[index1];
  array[index1] = array[index2];
  array[index2] = temp;
}

function partition(arr, resultArr, left, right) {
  let middle = Math.floor((right + left) / 2),
      pivot = arr[middle],
      i = left,                 // Start pointer at the first item in the array
      j = right                 // Start pointer at the last item in the array

  while(i <= j) {

    // Move left pointer to the right until the value at the
    // left is greater than the pivot value
    while(arr[i] < pivot) {
      i++
    }

    // Move right pointer to the left until the value at the
    // right is less than the pivot value
    while(arr[j] > pivot) {
      j--
    }

    // If the left pointer is less than or equal to the 
    // right pointer, then swap values
    if(i <= j) {
      resultArr.push([i, j, middle]);
      swapRef(arr, i , j)  // ES6 destructuring swap
      i++
      j--
    }
  }

  return i
}


export default QuickSort;
// const arr = []
// const test = QuickSort([5,1,2,76,6,3], arr);

// console.log(arr);
