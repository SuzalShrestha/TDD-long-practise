let returnsThree=()=>3;
let reciprocal=n=>{
  if(n<1 || n>1000000){
    throw new TypeError("Number is less than 1 or greater than 1000000");
  }
  if(n===0){
    return 0;
  }
  return 1/n;
};

module.exports = {
  returnsThree,
  reciprocal
};