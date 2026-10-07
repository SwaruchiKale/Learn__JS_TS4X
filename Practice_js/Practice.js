let Name= "Ruchi"
console.log(typeof Name);

let Age = "Swaruchi"
console.log(typeof Age);

let Ai= 12
console.log(typeof  Ai);


let firstName ="Prm"
let fullname = `Hi${firstName}D`;
console.log(fullname)


let statuscode = 800;
let category = 
statuscode < 300? "sucess":
 statuscode < 400? "redirect":
 statuscode < 500? "clientError" :
  "serverError";
console.log(`status ${statuscode}:${category}`);