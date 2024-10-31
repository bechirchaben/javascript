const x=20; // global scope
function changeX () { 
    const x=30; // block scope
return console.log(x);
}
changeX();
console.log(x);


let name="bechir";
let fullname=`chabene ${name}`; // template letirals
console.log(fullname);


str="hello world";
console.log(str.includes("world"));
console.log(str.includes("world",8));
console.log(str.startsWith("hello"));
console.log(str.startsWith("no"));
console.log(str.endsWith("ld"));
console.log(str.endsWith("gomycode"));
console.log("hello world ".repeat(4));
console.log("123".padStart(4,"0"));
console.log("123".padEnd(4,"0"));


//numbers in ES6
console.log(Number.isNaN("NaN"));//isNaN = is not a number 
console.log(Number.isInteger(30));
console.log(Number.isInteger(30.5));
console.log(Number.isFinite(30));
console.log(Number.isFinite(NaN));
console.log(Number.isFinite(Infinity));
console.log(Number.parseInt("30"));
console.log(Number.parseFloat("30.5"));


//tables in ES6
const tableau=[12 , 23 ,45 , 31];
const trouvez=tableau.find(num=>num<10);
console.log(trouvez);
const trouvindex=tableau.findIndex(num=>num>12);
console.log(trouvindex);

const array1 = [1, 2, 3];
array1.forEach((element) => console.log(element*3));

const str1="bonjour231";
const array=Array.from(str1);
console.log(array);

const arr=new Array(3).fill(0);
console.log(arr);

const arr1=[1 , 2 , 3].fill(4 , 0 , 2);
console.log(arr1);

const elit7eb=Array.of(1,4);
console.log(elit7eb);

const kimaje=["A","B","C"];
const Iterator=kimaje.keys();
console.log(Iterator.next().value);
console.log(Iterator.next().value);
console.log(Iterator.next().value);


//destructing tables
const tab=[21 , 22 , 23];
const [first,second,third]=tab;
console.log(first);
console.log(second);
console.log(third);
const colors=["red","green"];
const [,secondcolor="blue"]=colors;
console.log(secondcolor);


//destructring objects 
let person={firstname:"bechir",age:24};
let {firstname:prenom,age:years}=person;
console.log(prenom);
console.log(years);

const tablo1=[1,2,3];
const tablo2=["a","b","c"];
const tablo3=[...tablo1 , ...tablo2];
console.log(tablo3);




//ternary operator
const age1=16;
const check=age1>=18 ? "adult":"mineur";
console.log(check);

const score=100;
const note=score>=80 && score<90 ? "A":
score>=90 ? "B":
score>=70 ? "C":"F";
console.log(note);



//function in js
function ajout(a,b){
    return a+b;
}
console.log(ajout(1,4));
//function in ES6
const ajout1=(a,b)=>a+b;
console.log(ajout1(3,5));


