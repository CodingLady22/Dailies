/*
Remove anchor from url
Complete the function/method so that it returns the url with anything after the anchor (#) removed.

Examples

"www.codewars.com#about" --> "www.codewars.com"
"www.codewars.com?page=1" -->"www.codewars.com?page=1"
assert.strictEqual(removeUrlAnchor('www.codewars.com/katas/'), 'www.codewars.com/katas/')
assert.strictEqual(removeUrlAnchor('www.codewars.com/katas/?page=1#about'), 'www.codewars.com/katas/?page=1')
*/

function removeUrlAnchor(url){

  return url.split('#')[0];

}