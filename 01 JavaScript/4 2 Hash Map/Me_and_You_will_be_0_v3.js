var twin = function(arr) {
    let sum = 0;

    let map = new Map();
    map.set(0, -1);
    
    for(let i = 0; i < arr.length; i++) {
        sum += arr[i];
        console.log("Running Sum ::", sum);

        if(map.has(sum)) {
            console.log( map.get(sum), i)
            return true;
        }

        map.set(sum, i);
    }

    return false;
}



let input = [0, 10, -10, 9, 9, 9];
// let input = [10, -10, 9, 9, 9];
// let input = [5, 5, 5, 5, 5];

console.log(twin(input));
