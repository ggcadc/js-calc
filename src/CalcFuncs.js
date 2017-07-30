//test problem array
const problem = [3, '/', 5]
//take a 'problem' and calculate an answer
function doMath(problem){
  const a = problem[0];
  const b = problem[1];
  const c = problem[2];

  if(b === 'x'){ return a * c;}
  if(b === '+'){ return a + c;}
  if(b === '-'){ return a - c;}
  if(b === '/'){ return a / c;}

}

console.log(doMath(problem));
