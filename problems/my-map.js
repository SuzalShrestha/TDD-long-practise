function myMap(inputArray, callback) {
  // Your code here
  let newArr=[];
  for(let item of inputArray){
    newArr.push(callback(item));
  }
  return newArr;
}

module.exports = myMap;