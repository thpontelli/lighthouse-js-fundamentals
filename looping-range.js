function range (start, end, step) {
  var series = [];
    if( start === null || end === null || step === null || start > end || step < 0 ){
      series = [];
    } else {
      for(var i = start; i <= end; i = i + step){
        series.push(i);
      }
    }
    return series;
  }
  console.log(range(0, 10, 2));
  console.log(range(10, 30, 5));
  console.log(range(-5, 2, 3));


// The function should return an empty array [] if given incorrect parameters, such as:

// start, end, or step being undefined
// start being greater than end
// step being 0, or negative