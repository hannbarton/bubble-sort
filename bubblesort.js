function bubbleSortNum(array) {
    let lookArr = [];
    for (let i = 0; i < array.length - 1; i++) {
        if (compare(array[i], array[i + 1]) === true) {
            swap(array[i], array[i + 1])
        }
        else {

        }
    }
  return sort(array);
}

function swap(a, b) {
    if (a < b) {
        return [a,b]
    }
    else {
        return [b, a]
    }
}

function compare(a, b) {
    if (a < b) {
        return false
    } else {
        return true;
    }
}

//if compare is true; then swap
//
