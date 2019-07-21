//*************************ASSIGNMENT 1 ********************************* */
//Question 1: Push Front
function pushFront(arr, value) {
    for (var i=arr.length-1; i>=0; i--) {
        arr[i+1] = arr[i];
    }
    arr[0] = value
    return arr
}

arr1 = [1, 2, 3, 4];
console.log(pushFront(arr1, 7));

//Question 2: Pop Front
function popFront(arr) {
    length = arr.length;
    for (var i=0; i<length; i++) {
        value = arr.pop();
    }
    return value
}

arr2 = [7, 2, 3, 4];
console.log(popFront(arr2));

//Question 3: Insert At
function insertAt(arr, index, value) {
    for (var i=arr.length-1; i>=index; i--) {
        arr[i+1] = arr[i];
    }
    arr[index] = value;
    return arr;
}

arr3 = [3, 2, 4, 6, 6];
console.log(insertAt(arr3, 2, 13));

//Question 4: Remove At
function removeAt(arr, index) {
    for (var i=arr.length; i>index; i--) {
        value = arr.pop();
    }
    return value;
}

arr4 = [4, 5, 2, 3, 7];
console.log(removeAt(arr4, 3));

//Question 5: Swap Pairs
function swapPairs(arr) {
    for (var i=0; i<arr.length/2; i+=2) {
        placeholder = arr[i];
        arr[i] = arr[i+1];
        arr[i+1] = placeholder;
    }
    return arr;
}

arr5 = [1, 2, 3, 4, 5];
console.log(swapPairs(arr5));

//Question 6: Remove Duplicates
function removeDuplicates(arr) {
    newArray = [];
    for (var i=0; i<arr.length; i++) {
        if (newArray.includes(arr[i])) {
            continue;
        }
        else {
            newArray.push(arr[i]);
        }
    }
    return newArray;
}

arr6 = ["Adam", "Adam", "Blake", "Karen", "Karen", "Justin"];
console.log(removeDuplicates(arr6));

//*********************ASSIGNMENT 2 ************************* */

// Question 1: Min to Front
function minToFront(arr) {
    var min = arr[0], marker = 0;
    for (var i=0; i<arr.length; i++) { //finding min
        if (arr[i] < min) {
            min = arr[i];
            marker = i;
        }
    }
    for (var j=marker; j<arr.length-marker; j++) { //moving the min value to end of array to prepare for pop
      placeholder = arr[j];
      arr[j] = arr[j+1];
      arr[j+1] = placeholder;
    }
    for (var q=arr.length-1; q>=0; q--) { //shift array to right to allow for min to go in front
        arr[q+1] = arr[q];
    }
    arr[0] = min; //min goes to front
    arr.pop(); //pop out end value 
    return arr;
}


arr = [4, 1, 2, 3, 8, 5, 7];
console.log(minToFront(arr));

//*******************************ASSIGNMENT 3 ********************** */

//Question 1: Reverse 
function Reverse(arr) {
    var length = arr.length-1;
    for (var i=0; i<arr.length/2; i++) {
        placeholder = arr[i];
        arr[i] = arr[length];
        arr[length] = placeholder;
        length --;
    }
    return arr;
}

arr1 = [1, 2, 3, 4, 5, 6];
console.log(Reverse(arr1));

//Question 2: Rotate
function Rotate(arr, num) {
    for (var i=0; i<num; i++) {
        for (var j=arr.length-1; j>=0; j--) {
            placeholder = arr[arr.length-1];
            arr[j+1] = arr[j];
        }
        delete arr[arr.length-1];
        arr.length -= 1;
        arr[0] = placeholder;
    }
    return arr;
}

arr2 = [1, 2, 3, 4];
console.log(Rotate(arr2, 3));

//Question 3: Filter Range
function filterRange(arr, min, max) {
    for (var i=arr.length-1; i>max; i--) {
        delete arr[i];
        arr.length -= 1; 
    }
    for (var j=0; j<min; j++) {
        for (var q=0; q<arr.length; q++) {
            arr[q] = arr[q+1];
        }
        arr.length -= 1;
    }
    return arr;
}

arr3 = [1, 2, 3, 4, 5, 6];
console.log(filterRange(arr3, 0, 2));

//Question 4: Concat
function Concat(arr1, arr2) {
    newArray = [];
    for (var i=0; i<arr1.length; i++) {
        newArray[i] = arr1[i];
    }
    for (var j=arr1.length; j<(arr2.length+arr1.length); j++) {
        newArray[j] = arr2[j-arr1.length];
    }
    return newArray;
}

arr4a = ["Joseph", "Mortimer", "Penelope", "Rico"];
arr4b = [5, 87];
console.log(Concat(arr4a, arr4b));

//Question 5: Skyline Heights
function skylineHeights(arr) {
    var max = 0, index = 0, length = 0;
    for (var i=0; i<arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
            arr[index] = arr[i];
            index ++;
        }
    }
    length = arr.length;
    for (var j=index; j<length; j++) {
        delete arr[arr.length-1];
        arr.length -= 1;
    }
    return arr;
}

arr5 = [0, 1, 3, -2, 2, 7, 4];
console.log(skylineHeights(arr5));

//************************ ASSIGNMENT 4 ************************ */

//Question 1: Remove Negatives 
function removeNegatives(arr) {
    var index = 0, length = arr.length;
    for (var i=0; i<arr.length; i++) {
        if (arr[i] > 0) {
            arr[index] = arr[i];
            index ++;
        }
    }
    for (var j=index; j<length; j++) {
        delete arr[arr.length-1];
        arr.length -= 1;
    }
    return arr;
}

arr1 = [2, 4, -4, 4, -5, -6, 4];
console.log(removeNegatives(arr1));

//Question 2: Second to Last
function secondToLast(arr) {
    if (arr.length < 2) {
        return null
    }
    else {
        value = arr[arr.length-2];
    }
    return value;
}

arr2 = [3, 7, 2, 3, 6];
console.log(secondToLast(arr2));

//Question 3: Second Largest 
function secondLargest(arr) {
    var max = arr[0], difference = 0, smallest_difference, num = 0;
    if (arr.length < 2) {
        return null
    }
    else {
        for (var i=0; i<arr.length; i++) { //get max value
            if (arr[i] > max) {
                max = arr[i];
            }
        }
        for (var j=0; j<arr.length; j++) {
            difference = max - arr[j]
            if (difference !== 0) {
                if (difference < smallest_difference || smallest_difference === undefined) {
                    smallest_difference = difference;
                }
            }
        }
        num = max - smallest_difference;
        return num
    }
}

arr3 = [4, 7, 13, 6, 13, 12];
console.log(secondLargest(arr3));

//Question 4: Nth to Last
function nthToLast(arr, num) {
    if (arr.length < num) {
        return null
    }
    else {
        value = arr[arr.length-num];
    }
    return value
}

arr4 = [4, 6, 8, 4, 5, 1, 2];
console.log(nthToLast(arr4, 3));

//Question 5: Nth-Largest
function nthLargest(arr, num) {
    var max, counter;
    for (var i=0; i<num; i++) {
      max = undefined;
      counter = 0;
      while (max === undefined) {
        max = arr[0+counter];
        counter++;
      }
      for (var j=0; j<arr.length; j++) {
        if (arr[j] > max) {
          max = arr[j];
        }
      }
      for (var q=0; q<arr.length; q++) {
        if (arr[q] === max) {
          delete arr[q];
        }
      }
    }
    return max
  }
  
  arr5 = [23, 45, 3, 44, 12, 23, 95];
  console.log(nthLargest(arr5, 5));

  // ********************** ASSIGNMENT 5 ************************

  //Question 1: Shuffle
function shuffle(arr) {
    for (var i=0; i<arr.length; i++) {
        random_number = Math.floor(Math.random() * Math.floor(arr.length));
        another_random_number = Math.floor(Math.random() * Math.floor(arr.length));
        placeholder = arr[random_number];
        arr[random_number] = arr[another_random_number];
        arr[another_random_number] = placeholder;
    }
    return arr
}

arr1 = [1, 2, 3, 4, 5, 6, 7];
console.log(shuffle(arr1));

//Question 2: Remove Range
function removeRange(arr, start, end) {
    for (var i=start; i<end; i++) {
        delete arr[i];
        for (var j=i; j<arr.length; j++) {
          arr[j] = arr[j+1];
        }
        arr.length -=1;
    }
    return arr
}

arr2 = [1, 2, 3, 4, 5, 6, 7];
console.log(removeRange(arr2, 2, 4));

//Question 3: Intermediate Sums
function intermediateSums(arr) {
    var sum = 0, counter = 0, newarrlength;
    for (var i=0; i<arr.length; i++) {
        sum += arr[i];
        if ((i+1+counter) % 10 === 0) {
            for (var j=newarrlength-1; j>=i; j--) {
                arr[j+1] = arr[j];
            }
            arr[i+1] = sum;
            sum = 0;
            i++;
            counter--;
        }
        newarrlength = arr.length;
    }
    if ((arr.length + counter) % 10 !== 0) {
        arr[newarrlength] = sum;
    }
    return arr
}
  
arr3 = [1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2];
console.log(intermediateSums(arr3));

//Question 4: Double Trouble
function doubleTrouble(arr) {
    var ogarrlength = arr.length*2, i=0;
    while (i < ogarrlength) {
        for (var j=arr.length-1; j>=i; j--) {
            arr[j+1] = arr[j];
        }
        i+=2;
    }
    return arr
}

arr4 = ["Joe", 6, true, "no", 8];
console.log(doubleTrouble(arr4));

//Question 5: Zip It
function zipIt(arr1, arr2) {
    var newArray = [], longlength, j=0;
    if (arr1.length > arr2.length) {
        longlength = arr1.length;
    }
    else {
        longlength = arr2.length;
    }
    for(var i=0; i<longlength; i++) {
        if (arr1[i] !== undefined) {
            newArray[j] = arr1[i];
            j++;
        }
        if (arr2[i] !== undefined) {
            newArray[j] = arr2[i];
            j++;
        }
    }
    return newArray;
}

arr5a = [1, 1, 1, 1, 1, 1, 1, 1, 1];
arr5b = [2, 2, 2, 2, 2, 2, 2];
console.log(zipIt(arr5a, arr5b));