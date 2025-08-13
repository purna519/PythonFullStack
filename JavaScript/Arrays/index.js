// literal style:
let arr=[1,'james',23,'hyd']
console.log(arr);
let obj=new Array(1,2,3,4,5,6,7)
console.log(obj);

for(let i=0;i<arr.length;i++){
    console.log(arr[i]);
}

for(x in arr){
    console.log(x);
    
}
for(x of arr){
    console.log(x);
    
}

// methods:
let arr1=[36,48,53,24,70,80,6,11,111,26,38]
console.log(arr1.at(0));
arr1.push(10);
console.log(arr1);
arr1.pop();
console.log(arr1);
arr1.unshift(10);
console.log(arr1);
arr1.shift();
console.log(arr1);
let arr2=arr1.slice(0,5)
console.log(arr2);
arr1.splice(2,1,1)
console.log(arr1);
let arr3=arr1.toSpliced(2,1,53);
console.log(arr3);
console.log(arr.toString());

let arr4=[1,2,3]
let arr5=[4,5,6]
console.log(arr4+arr5);
console.log(arr4.join(arr5));
console.log(arr4.concat(arr5));
arr1.sort((a,b)=>(a-b))
console.log(arr1);
console.log(arr1.includes(1));
console.log(arr2);
arr2.push(48)
console.log(arr2);
console.log(arr2.indexOf(48));
console.log(arr2.lastIndexOf(48));