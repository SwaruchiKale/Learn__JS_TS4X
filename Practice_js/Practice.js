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





var x;
 console.log(x);



 var audi = null;
  console.log(audi);


// let a = 100;

// console.log(a++ + ++a +a++ + ++a);

// console.log(a);


// let a = 37;

// console.log(--a + a--);

// console.log(a);

let a = 5;
let b = a-- - --a;
console.log(b, a);

let i = 1;

let r = i++ > 1 ? i++ : ++i;
console.log(r, i);
