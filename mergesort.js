function split(wholeArray) {
    let halfIndex = Math.ceil(wholeArray.length / 2);
    let firstHalf = wholeArray.slice(0, halfIndex);
    let secondHalf = wholeArray.slice(halfIndex)

    return [firstHalf, secondHalf];
}
//

function merge(arr1, arr2) {
    let sorted = [];
    let left = 0;
    let right = 0;

    while (left < arr1.length && right < arr2.length) {
        if (arr1[left] < arr2[right]) {
            sorted.push(arr1[left++])
        }
        else {
            sorted.push(arr2[right++])
        }
    }
    return sorted;
}

function mergeSort(array) {
    let halfArray = [];
    if (array.length === 1) return array;
    if (array.length === 2) {
        return sort(array[0], array[1]);
    }
    else {
        //code
    }
}
