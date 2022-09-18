/*
Well of Ideas - Easy Version

For every good kata idea there seem to be quite a few bad ones!

In this kata you need to check the provided array (x) for good ideas 'good' and bad ideas 'bad'. If there are one or two good ideas, return 'Publish!', if there are more than 2 return 'I smell a series!'. If there are no good ideas, as is often the case, return 'Fail!'.
*/

function well(x){
  
  let checked = 0
  
  for(let i = 0; i < x.length; i++) {
    if (x[i] === 'good') {
       checked++ 
    } 
  }
  // The conditional is done outside the loop
    if (checked  === 0) {
      return 'Fail!'
    } else if (checked <= 2) { 
      return 'Publish!'
    } else {
      return 'I smell a series!'
    }

}