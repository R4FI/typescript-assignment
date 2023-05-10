1.What is TypeScript, and how is it different from JavaScript?
ans:Typescript is a superset of javascript abd is build on top of that.
*Allow static strict typing(have to define type).
*Extra feature-enum,tuples,interface etc
*Support modern feature-arrow function,let,const.(supported by all types of browser)

-------------End answer1----------------


2.Can you explain the difference between "interface" and "type" in TypeScript?

ans:Interfaces are typically used for defining object type data.On the other hand types often use for define aliases(primitive type).
Example:Type:
type User={
    name:String,
    age:number
}

Interface:
inteface Iuser {
     name:String,
     age:number
}
-------------End answer2----------------


3.Can you give an example of how to use generics in TypeScript?

ans:Here is an example of generics type
function arrayReverse<T>(...arr: T[]): T[] {
    return arr.reverse();
  }
  
  const value = ["hellow","world","foo","bar"];
  const reversedStrings = arrayReverse(...value);
  
  console.log(reversedStrings); (solution3)
-------------End answer3----------------

4.What is the difference between an "unknown" and "any" type in TypeScript?
ans: unknow:
we can't assign Unknown to any other type (without an explicit assertion).In unknown we can know the type in runtime or when we call the funtion.

any:
When a value is assigned the any type, it means that the value can be of any type.In this case the type of the value is not checked at compile-time or run time.


-------------End answer4----------------

5.Can you give an example of how to use enums in TypeScript?
ans:
Example: enum ResponseType{
    success,fail,unauthenticate
}
interface ApiResponse<T>{
    status:number,
    type:ResponseType,
}
const res1 : ApiResponse<string> ={
    status:200,
    type:ResponseType.(all enum can be used)
}
console.log(response1);