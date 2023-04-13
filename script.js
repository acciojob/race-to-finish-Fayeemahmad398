window.promises = [];

let promise1=new Promise((resolve,reject)=>{
	setTimeout(()=>{
		return resolve("promise1 has been resolved");
	},2000)
})
let promise2=new Promise((resolve,reject)=>{
	setTimeout(()=>{
	return resolve(promise2 has been resolved");
	},1000)
})

let promise3=new Promise((resolve,reject)=>{
	setTimeout(()=>{
		return resolved("promise3 has been resolved");
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
	})
})

let res=Promise.any([promise1,promise2,promise3,promise4,promise5]);

document.getElementById("output").innerText=res;





// Do not change the code above this
// add your promises to the array `promises`
