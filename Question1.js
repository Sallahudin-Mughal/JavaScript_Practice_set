// const currentTime =() =>{

//     let date = new Date(),
//      hours= date.getHours(),
//      minutes = date.getMinutes(),
//      seconds = date.getSeconds();
     
     
//     //  let day;
//      day= hours<12 ?"AM": "PM";
//      hours = hours>12 ? hours-12 :hours;
//      hours = hours==0 ? (hours=12): hours;


//      hours = hours<10 ? `0${hours}` :hours;
//      minutes = minutes<10 ? `0${minutes}` :minutes;
//      seconds = seconds<10 ? `0${seconds}` :seconds;
// };

// currentTime();
// setInterval(currentTime(), 1000)


// let cel = 20;
// let fer = 30;

// function ferToCel(cel){
//     cel = 5/9*(fer -32);
// }
// function celToFer(fer){
//     fer = (9/5 *cel )+32;
// }

// Question no 4
let side1 = 5;
let side2 = 6;
let side3 = 7;

let s= (side1+ side2 + side3)/2;
let areaOfTriangle= Math.sqrt(s*(s-side1)*(s-side2)*(s-side3))
let final = "Area of triangle is:  " +areaOfTriangle;
document.getElementById("Q4").innerHTML = final;

// Question no 6
function findLeapYear(year){
    if(year % 4 == 0){
        return true;
    }
    else{
        return false;
    }
}
let leapYear = findLeapYear(1999);
document.getElementById("Q6").innerHTML=leapYear;

// Question no 7
function checkSunday(){
    let checkDay = '';
    for(let year=2014; year<2050; year++){
        const date = new Date(year, 0,1) // 0 is Jaunary 1 for 1 day of month.
        if(date.getDay()===0){
            checkDay = checkDay + `<br>1st day of January ${year} is sunday`;
        }
    }
    return checkDay;
}
document.getElementById("Q7").innerHTML= checkSunday();

// Question no 10

function multiplyBy(){
    let num1 = document.getElementsByClassName("input1").value;
    let num2 = document.getElementsByClassName("input2").value;
    // let result =num1 * num2;
    document.getElementById("result").innerHTML = num1 * num2;
}
function divideBy(){
    let num1 = document.getElementsByClassName("input1").value;
    let num2 = document.getElementsByClassName("input2").value;
    let result =num1 / num2;
    document.getElementById("result").innerHTML = result;
}



// Question no 12
var url = window.location.href;
document.getElementById("Q12").innerHTML = url;

// Question no 13

var var_name = "User defined";
let new_var = "hello";
this.var_name = new_var;
console.log(this.var_name);
// document.getElementsByClassName("Q13").innerHTML=this.var_name;

// Question no 14
let filename = "script.jsx"
 let fileextension =filename.split(".").pop();
 document.getElementById("Q14").innerHTML = fileextension;

 // Question no 15

let num = 15;
let ab_diff;
    if(num > 13){
         ab_diff = `The Number is ${num} and its Absolute Double is ${2*(num-13)}`;
    }
    document.getElementById("Q15").innerHTML = ab_diff


 // Question no 16
let var1= 3;
let var2= 5;
let sum = var1 + var2;
if(var1 == var2){
    f_result = sum * 3;
    document.getElementById("Q16").innerHTML = f_result;
}
else{
    document.getElementById("Q16").innerHTML = sum;
}


 // Question no 17

 let number=55;
 let diff = number-19;
 if(number>19){
    // let re= diff*3;
    document.getElementById("Q17").innerHTML = diff*3;
}
else{
     document.getElementById("Q17").innerHTML = diff;
 }
 

  // Question no 18
const checknumbers =(n1,n2) =>{

    if(n1==50 || n2==50 || n1+n2 == 50){
      return true;
    }
    else{
      return false;
    }
}
console.log(checknumbers(20,20))


 // Question no 21
let myStr = "my name is Sallahudin";
let new_str ="PY"
    // if(myStr.startsWith("PY"))
    if(myStr[0]=="P" && myStr[1]=="Y")
    {
        console.log(myStr)
    }
    else{
        // console.log(`PY ${myStr}`);
        console.log(new_str.concat(myStr));
    }

 // Question no 24
 
 let my_str = "Ali is good guy";

 console.log(`${my_str[0]} ${my_str} ${my_str[0]}`)


  // Question no 35

function checkchar(str1, char){
    if(char == str1[1] && char == str1[3]){
        console.log('character is at 2nd and 4th position of string')
    }
    else{
        console.log('character is at not on 2nd position of string')
    }
}

checkchar('Salahudin',"a");

 // Question no 37
 let strr= "heLlo WORLD"

 if(strr.length>=3){
    let new_strr= strr.slice(0,3);
    console.log(new_strr.toLocaleLowerCase());
 }
 else{
    console.log(strr.toUpperCase());
 }


  // Question no 41
function threenumbers(a,b,c){
       if(a == b && b == c){
        return 20;
        }
       else if(a == b || b == c || c == a){
        return 40;
        }
        else
            return 30;
   }

   console.log(threenumbers(10,10,10));


    // Question no 46

let x=11,y=20;
if(x>0 && y>0){
    if(x%7 ==0 || x % 11== 0 || y%7 ==0 || y% 11==0){
        // return true;
        console.log("true");
    }
    else
    console.log("false");
        // return false;
}

// Question no 47
    let n=60;

    if(n=>40 && n<=10000){
        console.log("n between in given range")
    }
    else{
        console.log("n not in range")
    }


 // Question no 48
let hel = "hello world"
//first convert string to array then reverse the array and again convert array to string
console.log(hel.split('').reverse().join(''));

// //Question 47
// let lang = "Javascript";
// let key = "RingnacksQ";

// console.log(lang.replace(lang.charAt(i), key.charAt(i)));
// for(let i=0; i<= lang.length;i++){
// }


 
 // Question no 50
// let long_str = "hello i am sallahudin";

function uppercaseletter(long_str){
    let res =long_str.split(" ");
for(let i=0;i<res.length; i++){
    res[i]=res[i][0].toUpperCase()+ res[i].substring(1);
}
    return res.join(" ");
}
console.log(uppercaseletter("hello i am salli"));


// Question no 51
let xy = 30;
 let hours = xy/60;
 let mintues = xy%60;
 console.log(`hours ${hours} and mintues ${mintues}`);

 // Question no 52

 function sortstring(new_string){
    let break_string= new_string.split("");
    let arr= break_string.sort().join("");
    return arr;
 }

 console.log(sortstring("msallahudin ali boy"));
 
 // Question no 53
 function checkab(str){
    return (/a...b/).test(str);
 }

 console.log(checkab("aooobk is a auubb abbbb aowsb"));


 // Question no 54

 function findvowels(mystring){
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    let count = 0;
    
    for (let char of mystring) {
        if (vowels.includes(char)) {
            count++;
        }
    }
    
    return count;
}

console.log(findvowels("hello my name is salli and my best friend is Hafiz ulfat"));

 // Question no 56

 function convertToString(n1,n2){
    if(n1>0 && n2>0){
        let res = Math.round(n1/n2).toString();
        let ress = res.split("");
        return res;
    }
 }

 console.log(convertToString(10,5));
