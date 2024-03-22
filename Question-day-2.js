// Question no 57
function makecopies(given_string, n){
    let res = given_string.repeat(6);
    console.log(res);
}
makecopies("hello",5);

// Question no 58
let str="mynameis";
if(str.length>=3){
    let str_cutting =str.slice(str.length-3,str.length);
    console.log(str_cutting.repeat(4));
}
else{
    console.log("your string must have 3 characters");
}

// Question no 62
let my_str ="characters"
if(my_str.length>=3){
    let my_new_str =my_str.slice(0,length-3);
    let last_3_char= my_str.slice(length-3)
    console.log(last_3_char.concat(my_new_str));
}

// Question no 70
let num= [9,5,3,4,1,6];
let k=3
function charshift(arr, n){
    for(let i=0;i<n; i++){
        arr.unshift(arr.pop());
        console.log(`steps ${i+1}: `,arr);
    }
}
console.log(charshift(num,k));

// Question no 71
let Arra=[1,2,3,5,6,78,0,1];
if(Arra.length>=1){
    if(Arra.shift()== 1 && Arra.pop()== 1){
        // return true;
        console.log("true")
    }
    else{
        // return false;
        console.log("false")
    }
}


// Question no 72
let new_a=[1,2,1]
if(new_a[0] == new_a[new_a.length-1]){
    console.log("first and last element of array are same");
}

// Question no 73
// take array of Q 72
console.log(new_a.reverse());

// Question no 74

let arr1=[20,30,40,80,10,15];
let last =arr1[arr1.length-1];
    if(arr1[0]> last){
        for(let i=0; i<arr1.length; i++){
            arr1[i]=arr1[0];
        }
        console.log(arr1);
    }
    else{
        for(let i=0; i<arr.length; i++){
            arr1[i]=last;
        }
        console.log(arr1);
    }

// Question no 75
let arra1=[22,25,30];
let arra2=[24,28,32];
let mid_ele =[];
mid_ele.push(arra1[1],arra2[1]);
console.log(mid_ele);

// Question no 76
// take array of Q 75

let end =arra1[arra1.length-1];
let aa=[];
aa.push(arra1[0],end)
console.log(aa);

// Question no 77 & 78
let small_arr =[1,4];
if(small_arr.length==2){
    if(small_arr[0] == 1 || small_arr[1]== 3){
        console.log("true")
    }
    else{
        console.log("array not contain 1 or 3")
    }
}

// Question 83
let greaterlength= ["aaa","anddk","Abdfhkc"];
let longstring= greaterlength[0];
for(let i=1;i<greaterlength.length;i++){
    if(greaterlength[i].length >longstring.length){
        longstring =greaterlength[i];
    }
}
console.log(longstring);

// <-----------------Error Handling Questions-------------------->
// Question 1
function checknumber(n){
    if(!Number.isInteger(n)){
        throw Error("Number is invaid");
    }
    console.log("Number is valid")
}
try {
    checknumber(5.5)
} catch (error) {
    console.log("Error agya ha bhai")
}

// Question 2
let array=[11,22,33,44]
try {
    array.toFixed(3);
    // array.sort();
} catch (error) {
    if(error instanceof TypeError){
        console.log("Tofixed() is not method of array")
    }
    else 
        throw error;
}

// Question 3

function getTwoNumber(n1,n2){
    try {
        if(n2 == 0){
            throw Error("second number is zero")
        }
    } catch (error) {
        alert("2nd number is zero");
    }
}

getTwoNumber(3,1);

// Question 5
function getarray(array){
    try {
        if(array.length == 0){
            throw Error("Error is Empty please fill data in array");
        }
    } catch (error) {
        console.log("Fill data in array because array is empty");
    }
}
let a=[]
getarray(a);


// Question 7
let xy=[2,3,4,9,0,1];
function wrongarrayindex(arr, index) {
    try {
      const element = arr[index];
      console.log("you access element is :", element);
    } catch (error) {
      if (error instanceof RangeError) {
        console.log("Error: Invalid index.");
      } else {
        throw error
      }
    }
  }

  wrongarrayindex(xy,4);

  // Question 9
  
console.log("Task 9")
  function urierror(str){
    try {
        const decodestr = decodeURI(str)
    console.log(`decodeUri string`,decodestr)
    } catch (error) {
        if(error instanceof URIError){
            console.log("Error", error.message);
        }
        else
            throw error
    }
  }
urierror("my%%%%website//// name")

  // Question 10
  console.log("task 10")
let xyz=[4,33,55,66,22];
        function finallyfunc(arr, index) {
            try {
            const element = arr[index];
            console.log("you access element is :", element);
            } catch (error) {
            if (error instanceof RangeError) {
                console.log("Error: Invalid index.");
            } else {
                throw error
            }
            }
            finally{
                console.log(xyz);
            }
        }
  finallyfunc(xyz,8);


  //Question no 12

  function get_ref_error(){
    try {
        console.log(hellomynameeisSallahudin);
    } catch (error) {
        if(error instanceof ReferenceError){
            console.log("program has Reference Error")
        }
        else
            throw error
    }
  }
  get_ref_error();

  // Question no 13

  function get_syntax_error(new_string){
    try {
        let parsed_Text = JSON.parse(new_string)
        console.log("parsed text",parsed_Text);
    } catch (error) {
        if(error instanceof SyntaxError){
            console.log("program has Syntax Error")
        }
        else
            throw error
    }
  }
  get_syntax_error();
  