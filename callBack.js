//CallbackFUNCTION : function which can be passed as a argument or can pass inside another function is called callback function..

//There are 2 types of callBack functions in javascript: 1.synchronous callback 
//2.Asynchronous callback function.. Note: Javascript is synchronous in nature.

/* Now down below you will explore the examples of how we can declare synchronous callBackFunction */

function add (num1,num2){
  console.log(num1+num2);
};
add(10,10);

//

let a = 20 ; let b = 10;
function sub(para1,para2) {
console.log(para1 - para2 );
}
sub(a,b)


//

function hi (){
  console.log('hi dear');

};


function sum(variable1,variable2,calbak){
console.log(variable1+variable2)
calbak();
};

const value1 = 10;
const value2 = 20;
sum(value2,value1,hi);

//

function yourFunc (){
console.log('Hello my function');
}

function myFunc(){
console.log('hello your function')
}

function multiply(val1,val2,cb){
console.log(val1*val2);
cb();
} 

const firstVal = 12;
const secondVal = 2;

multiply(firstVal,secondVal,yourFunc);
multiply(20,30,myFunc);
multiply(10,10,function(){
  console.log('bye..bye..')
});

//

function sum1 (a,b,cb){
  cb()
console.log(a+b)
}

sum1 (12,12,function call(){
 console.log('hi')
})


//

let c =(a,b)=>{
  console.log(a+b)  // output: 13+14 = 27
  }
  
  function x(a,b,cb){
  cb(13,14)         // this cb(13,14)  will pass to c function
  }
  x(12,12,c);
  

  //

  function xy(x,y){
    console.log(x+y)   //22
    }
    function sum (a,b,cb){
      cb(10,12)
    console.log(a+b)   //2
    }
    sum(1,1,xy)

    //

    function x(cb){
      cb(10,20)
      
      }
      x(function(a,b){
        console.log(a+b)  //30
      })

      //

      const ba = function(a,b){
        return a+b
      }
      
      function x(cb){
      return cb(20,30)
      }
     console.log(x(ba))   //50

     //

     function geeky (abc){
      console.log('I am a geek function '+ abc )   // I am a geek function Mr.suman
      }
      
      function show(callback){
        var abc = 'Mr.Suman'
      callback(abc)
      }
      
      show(geeky);

      //

      function geeky (abc){
        console.log('I am a geek function '+ abc )   // I am a geek function 123
        }
        
        function show(callback){
        
        callback(123)
        }
        
        show(geeky);

        //

        function geeky22(a){
          console.log('i am a geeky function '+ a)
          }
          
          function show12(cb,a){
          cb(a)
          }
          
          show12(geeky,'thapa');

          //

          function show1 (cb){
            cb('suman')
            }
            show1(function geeky2(a){
              console.log('i am a geeky function '+ a)
            })
            
            //

            function show2 (cb){
              let a = 'Mr.Thapa'
            cb(a)
            }
            show2(function geeky3(a){
              console.log('i am a geeky function '+ a)
            })

/* Now lets see the difference between 1.synchronous callback function and 2.asynchronous callback function*/

function hello(){
  console.log('hello synchronous callback')
}
 function hi(callback){
   callback()
 }
hi(hello);

console.log('synchronous end');

//Asynchronous : setTimeout(function(){},1000)

setTimeout(function time(){
  console.log('hi asynchronous function')
},3000);
      

//

//function callMe
function callMe(name,calbak){
  console.log('i am Mr.' + name)
calbak()
}


//callbackfunction..
function hey(){
console.log('i am hey callback function')
}

//pasiing hey() function to another function as an argument..

callMe('thapa',hey)  


// Here..we are passing callback function in main calculate function using different functions..

//this is calculate main function
const calculate = (a,b,operations) => {
  return operations(a,b)
  }


  
  // method 1: passing ANONYMOUS FUNCTION directly as a argument(value) in calculate function
  const result = calculate(100,10,function(num1,num2){
    return num1+num2
  });
  
  console.log(result);  // output: 110
  
  
  //method 2: Declaring subtraction ARROW callback FUNCTION separately and passing later in calculate function 
  const subtraction = (a,b) => a-b
  
  //or if we are using culry braces in arrow func. use return statement..
  //const subtraction = (a,b) =>{return a-b}
  
  console.log(calculate(20,10,subtraction))  // 10
  
  
  //method 3: passing function decalaration/function stateement as a callbackfunc.
  
  function multply (a,b){
  console.log(a*b)
  }
  
  calculate(4,4,multply)


//

const s = (x,y,cb) =>{
  return cb(x,y)
  }
  
  const abcd = function(w,z){
  return(w/z)
  }
  
  console.log( s(12,3,function(x,y){   //output:15
          return (x+y)
  }))
  
   console.log(s(20,20,abcd))  // output:1

   //

   function plus (a,b,cb){
    let result = a+b;
    cb(result);
    }
    
    plus(100,100,function(val){
       console.log(val)              //outout:200
    })