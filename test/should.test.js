var chai = require('chai'),
  should = chai.should(),
  expect = chai.expect(),
  practice = require('../practice.js');


  describe("Callback functions", function(){

it("should console.log every number up to ten then call function", function(){

    practice.printZeroTo(10, function(){
      console.log("done");
    });
});

it("adds a and b then invokes Callback function", function(){

    practice.asyncAdd(2, 3, function(answer){
      console.log("the answer is " + answer);
    });
});

it("it should return array of names filtered by filter function condition", function(){
  
  var people = [
    { 
      name: "derek",
      age: 20
    },
    {
      name: "alex",
      age: 21
    },
    {
      name: "Peter",
      age: 22
    },
    {
      name: "shannon",
      age: 23
    },
    {
      name: "justin",
      age: 24
    },
  ];


    var odd_people = practice.filter(people, function(person){
        return person.age % 2 != 0;
    });

    odd_people.should.include("alex"); 
    odd_people.should.include("shannon"); 

});  

});