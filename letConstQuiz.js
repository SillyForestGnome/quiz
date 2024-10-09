//1. 
var PI = 3.14;
PI = 42;

//2. 
const PI = 3.14;
PI = 42;
//SyntaxError: Identifier 'PI' has already been declared

//3. What is the difference between var and let?
//*var* is function scoped  - the value of variables declared using *var* can be reassigned regardless of whether they are in a code block or not. Whereas, *let* is block scoped, meaning the value of the variables only exist within a single code block. *var* can be redeclared and *let* cannot. You can also access a hoisted variable using *var*. 

//4. What is the difference between var and const?
// *const* cannot be redeclared or reassigned. *var* can do both. *const* is also block scoped whereas *var* is function scoped. You can also access a hoisted variable with *var*. 

//5. What is the difference between let and const?
//*const* cannot be redeclared or reassigned. *let* can be reassigned, but not redeclared. Both are block scoped and both can be mutated if they are a reference data type. 

//6. What is hoisting?
//This is how the Javascript compiler works. If a variable is declared using the *var* keyword, the declarations will take place prior to the code being initialized. In order to visualize this better, you can list the variables at the top of the code without having them be assigned to values, and then assign the values later on in the code. *let* and *const* do not behave this way. 

//Function declarations are also hoisted and can be invoked "before" they are defined in the codebase. 