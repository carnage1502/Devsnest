//1.
console.log("1. Write a JavaScript function to check whether an 'input' is an array or not.");

function is_array(n){
    return (Array.isArray(n));
}
console.log(is_array('w3resource'));
console.log(is_array([1,2,4,0]));


//2.
console.log("2. Write a JavaScript function to clone an array.");

function array_Clone(n){
    return n.slice(0);
}
console.log(array_Clone([1,2,4,0]));
console.log(array_Clone([1,2,[4,0]]));


//3.
console.log("3. Write a JavaScript function to get the first element of an array.Passing a parameter 'n' will return the first 'n' elements of the array.");

function first(a,n){
    if(!n){
        return a.shift();
    } 
    else if(n>=0){
        return a.slice(0,n);
    }
    else{
        return [];
    }
}
console.log(first([7,9,0,-2]));
console.log(first([],3));
console.log(first([7,9,0,-2],3));
console.log(first([7,9,0,-2],6));
console.log(first([7,9,0,-2],-3));


// 4 
console.log("4. Write a simple JavaScript program to join all elements of the following array into a string.");

let myColor=['Red','Green','White','Black'];
console.log(myColor.join(','));
console.log(myColor.join('+'));


//5
console.log("5. Write a JavaScript program to find the most frequent item of an array");
var arr1 = [3, "a", "a", "a", 2, 3, "a", 3, "a", 2, 4, 9, 3];
var b=0,a;
for (let i = 0; i < arr1.length; i++) {
    c=0;
    for(let j=i;j<arr1.length;j++){
        if(arr1[i]===arr1[j]){
            c++;
        }
        if(c>b){
            b=c;
            a=arr1[i];
        }
    }
}
console.log(a, "(",b, "times )");