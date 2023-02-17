function merge (array1, array2) {
  let arrayMerged = [];
  let i1 = 0;
  let i2 = 0;

  while (i1 < array1.length && i2 < array2.length) {
      if (array1[i1] === array2[i2]) {
        arrayMerged.push(array1[i1], array2[i2]);
        i1++; 
        i2++;

      } else if (array1[i1] < array2[i2]) {
        arrayMerged.push(array1[i1]);
        i1++;

      } else {
        arrayMerged.push(array2[i2]);
        i2++;
      }
    }
  if (i1 < array1.length) {
    for (ind1 = i1; ind1 < array1.length; ind1++) {
      arrayMerged.push(array1[ind1]);
    }
  } else if (i2 < array2.length) {
      for (ind2 = i2; ind2 < array2.length; ind2++) {
        arrayMerged.push(array2[ind2]);
      }
    }
  return arrayMerged;
  }
  
  
  
  
console.log(merge([ 4, 5, 6 ], [ 1, 2, 3, 4 ]), "=?", [ 1, 2, 3, 4, 4, 5, 6 ]);
console.log(merge([ 4 ], [ 2, 5, 8 ]), "=?", [ 2, 4, 5, 8 ]);
console.log(merge([ 1, 2, 6 ], []), "=?", [ 1, 2, 6 ]);