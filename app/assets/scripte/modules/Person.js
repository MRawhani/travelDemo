
/**
 * the class key is just a syntax in es6 
 * but acutally it uses the prototype inhertance
 */

class Person{
    constructor(name, color){
        this.name= name ;
        this.color= color;
    }
     
    greet(){ //es6
        console.log("Hi, My names are "+ this.name + " and My favorite color is "+ this.color);
    }
      // console.log("My name is "+ name + " and My favorite color is "+ coclor);
}

//exports.prr = Person;
// module.exports = Person;
export default Person; //es6