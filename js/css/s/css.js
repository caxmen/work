"use strict";

/*const pas = "qwer";
let ps = null;
do {
	ps = prompt("Enter your password");
}
while(ps != pas);	
alert("YES");*/
/*function qwe(x){
	return(x<0) ? -x : x;
}
function sum(a,b){
	return(a+b);
}
let www = sum(5 , 1);
console.log(www);
let qqq = qwe(-5);
console.log(qqq);*/

/*function qwe(n){
	for (let i = 2; i<n; i++ ){
		if(!isqwe(i)) continue;

		console.log(i);
	}
}

function isqwe(n){
	for(let i = 2 ; i<n;i++){
		if(n % i==0) return false;
	}
	return true;
}

qwe(0);*/
/* let age = prompt("how old are you ?", )
 let object = null;
 if(age<18){
 	object = function(){
 		console.log("you too younger")
 	};
 }
 else{
 	object = function(){
 		console.log("let's go go go ")
 	};
 }
 object();*/
/*function cookies (question, yes, no){
if (confirm(question))yes();
else no();
}
/*cookies(
	"we need you yes" ,
	function(){console.log("you use cookies")}
	function(){console.log("not use cookies")}
);**
function writeyes(){
	console.log("you use cookies");
}
function writeno(){
	console.log("you not use cookies");
}
cookies("we use cookies and you?",writeyes , writeno);*/

/*setTimeout(function(){
	console.log("anonimnai functia")
}, 1000);
*/
/*let strel = () =>console.log("stelochnai functia");/*if we use {} + return*/
/*strel();/*not return + console.log(strel())*/
/*let snow = (from,msg) =>{
	let text = from+ ":" +msg;
	return text; 
}
console.log(snow("dfxfcg", "hi " ));*/

/*let sm = "color";
let model = "ford"
let car ={
	[sm+model]:"purple"
};
console.log(car.colorford);*/
/*let car = mc("ford", "blue");
function mc (model, color){
	return{
		model:model,/*model,color + console.log(car(all**));
		color:color
	};
}
console.log(car.);*/
/*let code = {
	"+1" : "asfd",
	"+2" : "sfgvv"
};
for (let st in code){
	console.log(st);
}*/
/*




*/


/*let matrix= [
	[1,2,3],
	[1,2,3]
];
 matrix[1][1] = 5;
 matrix[1][2] = 6;
 matrix[1][0] = 4;
 for (let row of matrix){
 	let cols = "";
 	for (let val of row)
 		cols += val + "";

 	console.log(cols);
 }
++++++for */

/*let dig = [1,2,3,4,5,6,7,8,9,10];

dig.forEach( (item,index,array) =>{
	if (item %2 ! = 0) array[index] = 1;
});
colsole.log(dig);
(splice add slice delete +-)*/
/*let ar = ["q","cxdvec","12",
false, null,0,"asd"];

let res1 = ar.indexOf("asd",0);
let res2 = ar.lastIndexOf(null);
let res3 = ar.includes(0,3);

console.log(res1);
console.log(res2);
console.log(res3);
/*split stolb join stroka revers ahead back,map  reduce for chisla sum pr +- Array.isArray()call if massiv true not false*/
/*let str = 'Hello\nim Javasc\n ffff\t tabul,obr slash\\ and simvl \u00A9 copirat';
console.log(str);/*18 set and map sm i can use 17*/
/*function pow(x,n){
	if (n<= 0)return 1;
	else return x*pow(x,n-1);
}
console.log(pow(2,30))*/
/*function sumall(ar1,ar2, ...ar){
	return ar1+ar2+ar.reduce((preVal,value)=> preVal += value,0);
}
console.log(sumall(1,2));
console.log(sumall(11,123,123.3));
*/
/*let name = "Ilya"
getname("HI");
getname("hi hi hi");
function getname(say){
	console.log(say + name);
}*/
/*function createCounter(){
	let count = 0;
	return function(){
		return count++;
	};
}
let counter = createCounter();
console.log(counter());
console.log(counter());
console.log(counter());*/
/*let ar = [function() {}];
console.log(ar[0].name);*/

/*let math = {
	name:"math",
	sum(...args){
		return this.name+args.reduce((val,preval) => preval += val,0);
	}
};
let sum = math.sum;
console.log(sum.apply(math,[1,2,3,4,5]));
/*call without massive;bind (math,1,2,3)he add to our sum*/	
/*let getname = function Name(name){/*function declorech
	if (name) return name;
	else return Name("none");
};
console.log(getname("vera"));*/
/*let get = getname;
getname = null;
console.log(get());/*with Name everywhere use bc when y call let another name you have a pr*/
/*function msg(){
	let load = setTimeout(function(){
		console.log("wait loading is in progress");
	},399);
	setTimeout(function(){
		clearTimeout(load);
		console.log("all good");
	},500);
}
msg();
*//*function msg(){
	let load = setTimeout(function(){
		console.log("wait loading is in progress");
	},399);
	setTimeout(function(){
		clearTimeout(load);
		console.log("all good");
	},11500);
}
msg();
function createtime(seconds){
	let sec = seconds;
	return function(){
		sec++;
		console.log("pass seconds" + sec);
	}
}
let clock = createtime(0);
let idClock= setInterval(clock,1000);
setTimeout(function(){
	clearInterval(idClock)
},11500);*/