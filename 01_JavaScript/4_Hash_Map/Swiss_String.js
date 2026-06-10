let Input1 =  "swiss";
let Input2 =  "wsiss";
let mapping1 = new Map();
let mapping2 = new Map();

let result = true;
if(Input1.length != Input2.length) {
    result = false;
    console.log("Result ::", false);
}

if(result){
    
for(let i=0;i<Input1.length;i++){
    if(mapping1.has(Input1[i])){
        mapping1.set(Input1[i], mapping1.get(Input1[i]) + 1);
    } else {
        mapping1.set(Input1[i], 1);
    }
}
console.log("Mapping 1 ::", mapping1);

for(let i=0;i<Input2.length;i++){
    if(mapping2.has(Input2[i])){
        mapping2.set(Input2[i], mapping2.get(Input2[i]) + 1);
    } else {
        mapping2.set(Input2[i], 1);
    }
}
console.log("Mapping 2 ::", mapping2);

for(let [key, value] of mapping1){
    console.log(key, value)
    console.log(mapping2.get(key))
    
    if(value != mapping2.get(key)) {
        result = false;
        break;
    }
}

console.log("Result ::",result);
}

