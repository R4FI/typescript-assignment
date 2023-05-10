// usimg rest parameter
function arrayReverse<T>(...arr: T[]): T[] {
    return arr.reverse();
  }
  
  const value = ["hellow","world","foo","bar"];
  const reversedStrings = arrayReverse(...value);
  
  console.log(reversedStrings); 
  // Output [ 'bar', 'foo', 'world', 'hellow' ]

 

  // solution2
//   const aarayReverse = <T>(...arr:T[])=>{
//     return arr.reverse();
    
// }
// const value =  ["hellow","world","foo","bar"];
// const reversedArray = aarayReverse(...value)
// console.log(reversedArray);

// //output [ 'bar', 'foo', 'world', 'hellow' ]