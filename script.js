window.Promise=[];
let promise1=new Promise((resolve,reject)=>{
	setTimeout(()=>{
		return resolve("promise1 has been resolved");
	},2000)
})
let promise2=new Promise((resolve,reject)=>{
	setTimeout(()=>{
	return resolve("promise2 has been resolved");
	},1000)
})

let promise3=new Promise((resolve,reject)=>{
	setTimeout(()=>{
		return resolve("promise3 has been resolved");
	},3000)
})

let promise4=new Promise((resolve,reject)=>{
	setTimeout(()=>{
		return resolve("promise4 has been resolved");
	},4000)
})
let promise5=new Promise((resolve,reject)=>{
	setTimeout(()=>{
		return resolve("promise5 has been resolved");
	},5000)
})

let res=Promise.any([promise1,promise2,promise3,promise4,promise5]);

document.getElementById("output").innerText=res;


// console.log(res);