function split(wholeArray) {
    let halfIndex = Math.ceil(wholeArray.length / 2);
    let firstHalf = wholeArray.slice(0, halfIndex);
    let secondHalf = wholeArray.slice(halfIndex)

    return [firstHalf, secondHalf];
}
//

function merge(leftArr, rightArr) {
    let sorted = [];
    let left = 0;
    let right = 0;

    while (left < leftArr.length && right < rightArr.length) {
        if (leftArr[left] < rightArr[right]) {
            sorted.push(leftArr[left++])
        }
        else {
            sorted.push(rightArr[right++])
        }
    }
    for (; left < leftArr.length; left++) {
        sorted.push(leftArr[left])
    }
    for (; right < rightArr.length; right++) {
        sorted.push(rightArr[right])
    }

    return sorted;
}

function mergeSort(array) {
    let splited = split(array);

    if (splited.length === 1) {
        return array;
    }
    if (splited.length === 2) {
        return merge(array[0], array[1]);
    }
    else {

    }
}
