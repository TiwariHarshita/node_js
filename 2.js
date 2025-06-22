//modules
//commonJS , everyfile is a module (by default)
//modules-- encapsulated code (only share minimum)
const names = require('./3_name')// to take something from the system 
const func =require('./4_func');
const data = require('./5_alternate');
require('./6_mindgrenade'); //
console.log(data);



// func(john);
// func(peter);

// func(names.john);
// func(names.peter);