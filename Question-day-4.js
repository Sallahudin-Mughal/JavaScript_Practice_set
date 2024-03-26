

//Question no 6
function maxval(num){
    return Math.max.apply(null, num)
}
console.log(maxval([2,5,78,11,98]));


// Question no 12
function natural_number(n){
    if(typeof n === 'number'){
        return 'number'
    }
    else
        return 'Not a number';
}
console.log(natural_number(9.8));

//Question no 15
function Findinteger(n){
    if(typeof n !== 'number')
        return false

    return !isNaN(n) && 
    parseInt(Number(n)) == n && 
    !isNaN(parseInt(n, 10));
}

console.log(Findinteger(39.4));

// Question no 17
function sumOfArrayElement(arr){
    let sum=0;
    for(let i=0;i<arr.length; i++){
        sum+=Number(arr[i]);
    }
    console.log(sum)
}

sumOfArrayElement([2,4,6,9,10,23])

// Question no 18
function proOfArrayElement(arr){
    let Pro=1;
    for(let i=0;i<arr.length; i++){
        Pro*=Number(arr[i]);
    }
    console.log(Pro)
}

proOfArrayElement([2,4,6,9,10,23])


// Question no 19
function pytha_theorm(a,b){
    console.log(Math.sqrt(a*a + b*b));
}
pytha_theorm(4,6);

// Question no 28
function round_up5(b){
    return Math.ceil(b/5)*5;
}
console.log(round_up5(47));

// String section

// Question no 1
function is_string(str){
    if(typeof str === 'string')
        return true
    return false
}

console.log(is_string(78))


// object section

// Question no 2
let student = {
    name: 'Sallahudin',
    studentclass: 'graduated',
    contact: 9234014556,

}

console.log(student)
console.log(student.contact)
console.log(student.name)

// Question no 4

let library=[
    {
    author: 'Billgates',
    title: 'The road Ahead',
    readingstatus: true
    },
    {
        author: 'Steve Jobs',
        title: 'Walter Isaacson',
        readingStatus: true
    },
    {
        author: 'Suzanne Collins',
        title:  'Mockingjay: The Final Book of The Hunger Games', 
        readingStatus: false
    }
]
for(let i=0 ;i<library.length; i++){
    console.log(`${library[i].title}  by ${library[i].author} reading status ${library[i].readingStatus}`)
}