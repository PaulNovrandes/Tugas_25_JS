var array1 = [2, 39, 76, 50, 9, 7, 41, 2, 24, 1, 16];

function panggilFilter(){

  console.log("Sebelumnya : ",array1);
  array1.sort();
  console.log("Ascending : ",array1);

  array2 = array1.reverse();
  console.log("Descending : ",array2);

}

var filter1 = array1.filter(array1 => {
  return array1 > 10
});

var filter2 = array1.filter(function(array1){
  return array1 < 30;
});


panggilFilter();
console.log("filter > 10 : ", filter1);
console.log("filter < 30 : ", filter2);
