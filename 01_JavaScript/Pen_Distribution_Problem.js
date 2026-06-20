/*students are going to give the exams . some of them forgot to bring the pen for writing , but some students have extra pens .

You have given an array of integers where negative integer represents the extra pens the student has .

positive integers shows the need of pens that student has .

assume they are seating horizontally on different benches , the work for giving the pen to adjacent bench is 1 unit .

find minimum number of work required to fulfil the needs of all students




Note : It is guaranteed that sum of all the elements of the array will be 0.




Example 1:

Input:

N = 5,

Arr[] = {5, -4, 1, -3, 1}

Output: 9

Explanation: 1th student can give 4 pens to 0th student,

total work needed 4*(1-0) = 4, new arr[] = 1,0,1,-3,1 now 3rd student can give pens to 0th, 2th and 4th.

so total work needed = 1*(3-0)+1*(3-2)+1*(4-3) = 5 So total work will be 4+5 = 9




Example 2: 

Input:

N = 6,

Arr[]={-1000, -1000, -1000, 1000, 1000, 1000}

Output: 9000

Explanation: 0th student give 1000 pens to 3rd student, total work needed 1000*(3-0) = 3000.

1st student give 1000 pens to 4th student, total work needed 3000 + 1000*(3-0) = 6000.

2nd student give 1000 pens to 5th student, total work needed 6000 + 1000*(3-0) = 9000.

So total work will be 9000 unit.




Constraints:

1 ≤ N ≤ 10^4

-10^6 ≤ Arr[i] ≤ 10^6

*/



/**
 * @param {number[]} arr
 * @return {number}
*/
var pens_need = function (arr) {
    let posIndex = 0;
    let negIndex = 0;
    let work = 0;
    while (posIndex < arr.length && posIndex < arr.length) {
        console.log("========================== Array ::", arr);
     

        console.log("Positive Index ::", posIndex, "Negative Index ::", negIndex);
        if (arr[posIndex] <= 0) {
            posIndex++;
            console.log("Updated Pos");
            continue;
        }
        if (arr[negIndex] >= 0) {
            negIndex++;
            console.log("Updated Neg")
            continue;
        }
        // console.log("Now Process   ===>", arr[posIndex], arr[negIndex]);
        let min = Math.min(Math.abs(arr[posIndex]), Math.abs(arr[negIndex]));
        // console.log("Min ::", min);
        let updated = arr[posIndex] - min;
        arr[posIndex] = updated;
        // console.log("Difference ::", updated);
        // console.log("Updated posIndex Value :", arr[posIndex]);
        arr[negIndex] = arr[negIndex] + min;
        // console.log("Updated negIndex Value :", arr[negIndex]);
        let multiply = Math.abs(posIndex - negIndex);
        // console.log("Multiple ::", multiply);
        work = work + (multiply * min);
        // console.log("Work ::", work);
    }
    return work;

};
// console.log(pens_need([1000, 1000, -1000, -1000])); // 4000
// console.log(pens_need([-1, -1, -1, 3, 0]));     // 6
// console.log(pens_need([-1, 4, -1, -9, 7, -1, 1]));     // 14
console.log(pens_need([-1, 4, -2, 1, -2]));     // 7