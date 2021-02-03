module.exports = function reverse (n) {
  var result;
  var counter = 0;
  var arr_str = [];
  if(n>0){
    result = n.toString().split("").reverse().join("");
  }else {
    result = n.toString().split("");
    for(var i=1; i<result.length; i++){
      arr_str[counter]=result[i];
      counter++;
    }
    result = arr_str.reverse().join("");
    
  }  
  return parseInt(result);
}
