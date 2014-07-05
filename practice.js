var practice = { };


practice.printZeroTo = function(count, cb){
  for(var i = 0; i < count; i++) {
    console.log(i)
  }
  cb();
};

practice.asyncAdd = function(a, b, cb){
    cb(a + b);
    return a + b;
}


practice.filter = function(ar_obj, filterFunction){
    var myArray = [];
    for(var i = 0; i < ar_obj.length; i++) {
      if(filterFunction(ar_obj[i])){
        myArray.push(ar_obj[i].name);
      }
    } 
    return myArray;
};


module.exports = practice;