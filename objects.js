// const user={

// };

// user.userName="John";
// user.surName="Smith";
// user.userName="Pete";

let salaries ={
    John:100,
    Ann: 160,
    Pete:130
};

let result=0;
// for (var i in salaries){
//     result+=salaries[i];
// }

result=Object.keys(salaries).reduce((total,values)=> total + salaries[values],0)
console.log(result);

