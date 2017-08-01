
//take a 'problem' array and calculate an answer
export function doMath(e, problem){
  e.preventDefault();
  const a = problem[0];
  const b = problem[1];
  const c = problem[2];

  if(b === 'x'){ return a * c;}
  if(b === '+'){ return a + c;}
  if(b === '-'){ return a - c;}
  if(b === '/'){ return a / c;}

}
