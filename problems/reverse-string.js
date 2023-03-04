let reverseString=(string)=> {
  // Your code here
  if(typeof string!=="string"){
    throw new TypeError("Please Enter a string.");
  }
  let reversed=[];
  for(let char of string){
    reversed.unshift(char);
  }
  return reversed.join('');
};
module.exports =reverseString;