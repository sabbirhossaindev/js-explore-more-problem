/*
   Removes elements from an array 
   and, if necessary, inserts new elements in their place, 
   returning the deleted elements.
   will change the original array
*/

const friends = [32, 45, 32, 22, 44, 62, 29, 69, 87];
const partial = friends.splice(2, 5, 99, 666, 777); // slice kaj kra start to koytera tumi soraba;[ 32, 22, 44 ];
console.log(partial);
console.log(friends);