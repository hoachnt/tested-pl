
function arrayDiff(a = [], b = []) {
    let test = [...a];
    b.forEach(bi => {
       test = test.filter(ti => ti != bi)
    })
    
    return test;
    
     // return a.filter(e => !b.includes(e));
}


// console.log(arrayDiff([1, 2, 3], [1]))
// console.log(arrayDiff([1, 2, 3, 5, 6, 7, 7, 7], [3, 2, 7]))


function arrayDiff2(a = [], b = []) {
	for(let i = 0; i < a.length; i++) {
      let chisloa;
      chisloa = a[i]
      for(let j = i; j < b.length; j++) {
         let chislob;

         chislob = b[j];

         if(chisloa == chislob) {
            a.shift()
            return a
         } else {
            return b
         }
      }
   }
}

console.log(arrayDiff2([1, 4, 8], [1, 4]))