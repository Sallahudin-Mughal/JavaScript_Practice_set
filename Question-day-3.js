// Function section
// Question no 1

function reverse_number(num) {
  num = num.toString().split("").reverse().join("");
  console.log(num);
}
reverse_number(567894321);

// Question no 2
function check_Palan(str) {
  for (let i = 0; i < str.length / 2; i++) {
    if (str[i] != str[str.length - 1 - i]) {
      console.log("this is not palandrom string");
    } else {
      console.log("this is palandrom string");
    }
  }
}
let strig = "string";
check_Palan(strig);

// Question no 8
function check_prime(n, i) {
  n = parseInt(n);

  // Base cases
  if (n <= 2) return n == 2 ? true : false;
  if (n % i == 0) return false;
  if (i * i > n) return true;

  // Check for next divisor
  return isPrime(n, i + 1);
}
console.log(check_prime(6, 10));

// Question no 11
function find_Array_num(arr) {
  let greater, lower;
  if (arr.length > 2) {
    let sorted_arr = arr.sort();
    for (let i = 0; i < arr.length; i++) {
      if (sorted_arr[i]) {
      }
    }
  }
}
find_Array_num([1, 5, 4, 3, 7, 8, 9, 5]);

// Question no 22
function findchar(str, char) {
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    if (str[i] == char) {
      count++;
    }
  }
  console.log(count);
}

// Question no 22 Bubble sort

let a = [4, 7, 2, 34, 11, 6];

let temp;
console.log(a);
for (let i = 0; i < a.length; i++) {
  if (a[i] > a[i + 1]) {
    temp = a[i];
    a[i] = a[i + 1];
    a[i + 1] = temp;
  }
}
console.log(a);
for (let i = 0; i < a.length - 1; i++) {
  if (a[i] > a[i + 1]) {
    temp = a[i];
    a[i] = a[i + 1];
    a[i + 1] = temp;
  }
}
console.log(a);
for (let i = 0; i < a.length - 2; i++) {
  if (a[i] > a[i + 1]) {
    temp = a[i];
    a[i] = a[i + 1];
    a[i + 1] = temp;
  }
}
console.log(a);
for (let i = 0; i < a.length - 3; i++) {
  if (a[i] > a[i + 1]) {
    temp = a[i];
    a[i] = a[i + 1];
    a[i + 1] = temp;
  }
}
console.log(a);

// Condition and loops section -------------------->

// Quesiton no 2
let x=2,y=-5, z=-7
let product = x*y*z;
    if(product>0){
        console.log("Sign is +")
    }
    else{
        console.log("Sign is -")
    }
// Quesiton no 3
let n1 = 0,
  n2 = -6,
  n3 = 4;
// the alert is working only when uncomment alert statement.
if (n1 > n2 && n1 > n3) {
  if (n2 > n3) {
    console.log(`${n1} , ${n2}, ${n3}`);
    // alert(`${n1} , ${n2}, ${n3}`);
  } else {
    console.log(`${n1} , ${n3}, ${n2}`);
    // alert(`${n1} , ${n3}, ${n2}`);
  }
} else if (n2 > n1 && n2 > n3) {
  if (n1 > n3) {
    console.log(`${n2} , ${n1}, ${n3}`);
    // alert(`${n2} , ${n1}, ${n3}`);
  } else {
    console.log(`${n2} , ${n3}, ${n1}`);
    // alert(`${n2} , ${n3}, ${n1}`);
  }
} else if (n3 > n1 && n3 > n2) {
  if (n1 > n2) {
    console.log(`${n3} , ${n1}, ${n2}`);
    // alert(`${n3} , ${n1}, ${n2}`);
  } else {
    console.log(`${n3} , ${n2}, ${n1}`);
    // alert(`${n3} , ${n2}, ${n1}`);
  }
}
// Quesiton no 5
for (let i = 0; i <= 15; i++) {
  if (i % 2 == 1) {
    document.write(`${i} is odd <br>`);
  } else if (i % 2 == 0) {
    document.write(`${i} is even <br>`);
  }
}
// Quesiton no 6
let Students = [
  ["David", 80],
  ["Vinoth", 77],
  ["Ishitha", 95],
  ["David", 88],
  ["Thomas", 68],
];
let avg = 0;
for (let i = 0; i < Students.length; i++) {
  avg += Students[i][1];
}
avg = avg / Students.length;
// console.log(avg);

if (avg < 60) {
  console.log("Grade F");
} else if (avg < 70) {
  console.log("Grade D");
} else if (avg < 80) {
  console.log("Grade C");
} else if (avg < 90) {
  console.log("Grade B");
} else {
  console.log("Grade A");
}

// Quesiton no 7

for (let i = 1; i <= 100; i++) {
  if (i % 3 == 0) {
    console.log(`${i} FIZZ`);
  } else if (i % 5 == 0) {
    console.log(`${i} BUZZ`);
  } else if (i % 3 == 0 && i % 5 == 0) {
    console.log(`${i} FIZZBUZZ`);
  } else {
    console.log(i);
  }
}

// Question no 9
console.log("------------------------------")
function arm_Strong(num){
        let temp =num;
        let nodigits= num.toString().length
        var summ=0;
        if(nodigits===3){
            while(temp>0){
                let digit= temp%10;
                temp= Math.floor(temp/10);
                summ+= digit**nodigits;
            }
            if(summ == num){
                console.log(`${num} is arm strong`);
            }
            else{
                console.log(`${num} is not arm strong`);
            }
        }
        else{
            console.log("please enter 3 digit number")
        }
}
arm_Strong(371);

// Quesiton no 10
for (let i = 1; i <= 5; i++) {
  for (let j = 1; j <= i; j++) {
    document.write("*");
  }
  document.write("<br>");
}

// Question no 11
let num1=20,num2=50;
let min;
if(num2>num1){
    min=num1;
}
else{
    min= num2;
}
let GCD;
for(let i=0; i<=min; i++){
    if(num1%i== 0 && num2%i==0){
        GCD=i;
    }
}
console.log(`GCD of ${num1} and ${num2} is ${GCD}`);

// Question no 12
console.log("Question 12")
let sum=0;
for(let i= 3; i<1000; i++){
    if(i%3==0 && i%5==0){
        sum = sum +i;
    }
}
console.log(sum);

// Event Handler section -------------------->

//Question no 2 &3
const button =document.getElementById("dropdown-btn");
const dropdown_items= document.getElementById("dropdown-items")
button.addEventListener('click',()=>{
    dropdown_items.style.display = dropdown_items.style.display === 'none'? 'block':'none'; 
})  

button.addEventListener('mouseenter',()=>{
    button.style.background = button.style.background === 'purple'? 'red':'purple'; 
})

