/* 
Extract the domain name from a URL

Write a function that when given a URL as a string, parses out just the domain name and returns it as a string. For example:

* url = "http://github.com/carbonfive/raygun" -> domain name = "github"
* url = "http://www.zombie-bites.com"         -> domain name = "zombie-bites"
* url = "https://www.cnet.com"                -> domain name = cnet"
*/

function domainName(url){
  
   let arr = url.replace('http://', '');
  let arr1 = arr.replace('https://', '');
  let arr2 = arr1.replace('www.', '');
  return arr2.split('.')[0]
  
}