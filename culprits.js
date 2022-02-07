// 1) Find the culprit
 
// <!DOCTYPE html>
// <html>
// <body>
//  <script>
//  alert( “I’m JavaScript!’);
//  </script>
//  Whats the error in this ?
// </body>
// </html>

//Answer: The error is we need to use the same quotes like either single or double.
// Non-null assertions can only be used in TypeScript files.
//  alert("I am JavaScript!");

//*) Find the culprit and invoke the alert
// Error: alert(“I’m invoked!”);

//Non-null assertions can only be used in TypeScript files.
//Ans: alert("Im invoked!");


// *)  Explain the below how it works

// alert("I'm JavaScript!");
// alert('Hello') // this line is not having semicolon
// alert(`Wor
//  ld`)
// alert(3 +
// 1
// + 2); // this is multiple line code and its working
// Answer:
// In the Javascript, even we didn't put the semicolon in the alert or console is working fine.
//The reason semicolons are sometimes optional in JavaScript is because of automatic semicolon insertion, or ASI. 
//ASI doesn't mean that actual semicolons are inserted into your code,
// it's more of a set of rules used by JavaScript that will determine whether or not a semicolon will be interpreted in certain spots.

//*) Fix the below to alert Guvi geek
 
// let admin=9, fname=10.5; 
// fname = "Guvi";
// lname = "geek"
// admin = fname+lname;
// alert( admin ); // "Guvi geek"
   
// answer:
// let admin=9, fname=10.5; 
// fname = "Guvi";
// lname = "geek"
// admin = fname+ " " +lname;
// alert(admin); // "Guvi geek"

//*)  Fix the below to alert hello Guvi geek

// let fname=10.5; 
// fname = "Guvi";
// lname = "geek"
// let name = fname+lname;
// alert( 'hello ${name}' );

//answer:
// let fname=10.5; 
// fname = "Guvi";
// lname = "geek"
// alert( `hello ${fname} ${lname}`);


//*) Fix the below to alert sum of two numbers

// let a = prompt("First number?");
// let b = prompt("Second number?");
// alert(a + b);

//answer:
// let a = prompt("First number?");
// let b = prompt("Second number?");
// alert(parseInt(a) + parseInt(b));

//*) If you run the below scritpt you will get “Code is Blasted”
//Explain Why the Code is blasted and how to diffuse it and get “Diffused”.

// var a = "2" > "12";
// //Don't touch below this
// if (a) {
//   console.log("Code is Blasted")
// }
// else
// {
//   console.log("Diffused") 
//}

//answer: If we used to compare the number withinn string that takes the value as true.
//So, that output as "Code is Blasted". Suppose, we want "Diffused" as output we need to compare the numbers only without using string.

// var a = 2 > 12;
// //Don't touch below this
// if (a) {
//   console.log("Code is Blasted")
// }
// else
// {
//   console.log("Diffused") 
// }

//*) How to get the success in console.
// let a = prompt("Enter a number?");
// //Don't modify any code below this
// if (a) {
//  console.log( 'OMG it works for any number inc 0' );
// }
// else
// {
//  console.log( "Success" );}

//answer: 
// let a = false;
// //Don't modify any code below this
// if (a) {
//  console.log( 'OMG it works for any number inc 0' );
// }
// else
// {
//  console.log( "Success" );
//}

//*) How to get the correct score in console.
// let value = prompt('How many runs you scored in this ball');
// if (value === 4) {
//       console.log("You hit a Four");
// } else if (value === 6) {
//       console.log("You hit a Six");
// } else {
//       console.log("I couldn't figure out");}

//answer:
// let value = prompt('How many runs you scored in this ball');
// if (value == 4) {
//       console.log("You hit a Four");
// } else if (value == 6) {
//       console.log("You hit a Six");
// } else {
//       console.log("I couldn't figure out");
// }

//*) Fix the code to welcome the Employee

// let login = 'Employee';
// let message = (login == 'Employee') ? :
//   (login == 'Director') ? 'Greetings' :
//   (login == '') ? 'No login' :
//   '';
// console.log(message);

//answer:
// let login = 'Employee';
// let message = (login == 'Employee') ? 'Greetings' :'No login';
// console.log(message);

//*) Fix the code to welcome the boss
// You cant change the value of the msg
// let message;
// if (null || 2 || undefined )
// {
//  let message = "welcome boss";
// }
// else
// {
//  let message = "Go away";
// }
//   console.log(message);


//answer:
// let message;
// if (null || 2 || undefined )
// {
//   message = "welcome boss";
// }
// else
// {
//   message = "Go away";
// }
//   console.log(message);


//*) Fix the code to welcome the boss

// let message;
// let lock = 2;
// //Dont change any code below this 
// if (null || lock || undefined )
// {
//   message = "Go away";
// }
// else
// {
//  message = "welcome";
// }
//   console.log(message);

 //answer:
// let message;
// let lock = false;
// //Dont change any code below this 
// if (null || lock || undefined )
// {
//   message = "Go away";
// }
// else
// {
//  message = "welcome";
// }
//   console.log(message);

//*) Fix the code to welcome the boss
// let message;
// let lock = 2;
// //Dont change any code below this
// if (lock && " " || undefined )
// {
//   message = "Go away";
// }
// else
// {
//  message = "welcome";
// }
// console.log(message);

//answer:
// let message;
// let lock = null;
// //Dont change any code below this
// if (lock && " " || undefined )
// {
//   message = "Go away";
// }
// else
// {
//  message = "welcome";
// }
// console.log(message);


//*) Change the code to print 3 2 1

//You can change only 2 characters
// let i = 3;
// while (i) {
//   console.log( --i );
// }

// answer:
//You can change only 2 characters
// let i = 3;
// while (i) {
// console.log( i-- );
//      }

//*)Change the code to print 1 to 10 in 4 lines
// let num = 1
// console.log(num)
// num += 1
// console.log(num)
// num += 1
// console.log(num)
// num += 1
// console.log(num)
// num += 1
// console.log(num)
// num += 1
// console.log(num)
// num += 1
// console.log(num)
// num += 1
// console.log(num)
// num += 1
// console.log(num)
// num += 1
// console.log(num)

//answer
// for(let i=1;i<=10;i++){
//     console.log(i);
// }

//*) Change the code to print even numbers
//You are allowed to modify only one character 
// for (let num = 2; num <= 20; num += 1) {
//     console.log(num)
//   }

//answer:
//You are allowed to modify only one character 
// for (let num = 2; num <= 20; num += 2) {
//     console.log(num)
//   }

//*) Change the code to print all the gifts

// let gifts = ["teddy bear", "drone", "doll"];
// for (let i = 0; i < 3; i++) {
//   console.log('Wrapped ${'gifts[i]'} and added a bow!');
//}

//answer:
// let gifts = ["teddy bear", "drone", "doll"];
// for (let i = 0; i < 3; i++) {
//   console.log(` ${gifts[i]}`);
// }


//*) Fix the code to disarm the bomb.
// let countdown = 100;
// while (countdown > 0) {
//   countdown--;
//   if(countdown == 0)
//   {
//    console.log("bomb triggered");
//   }
// }

//answer:
// let countdown = 100;
// while (countdown > 0) {
//   if(countdown == 0 || countdown==100)
//   {
//    console.log("bomb triggered");
//   }
//   else{
//       console.log("disarm the bomb")
//   }
//   countdown--;
// }


//*) Whats the msg printed and why?
var lemein = "0";
var lemeout = 0;
var msg = "";
if (lemein) {
 msg += "hi";
 }
if (lemeout) {
 msg += 'Hello';
}
console.log(msg);
//answer:
//It prints the output as "hi" because the value of lemeout is 0 that means false. 
//so, the lemein value "0" has worked and prints the "hi".
