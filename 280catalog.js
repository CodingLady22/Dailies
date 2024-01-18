/* 
Catalog

DESCRIPTION:
You are given a small extract of a catalog:

s = "<prod><name>drill</name><prx>99</prx><qty>5</qty></prod>

<prod><name>hammer</name><prx>10</prx><qty>50</qty></prod>

<prod><name>screwdriver</name><prx>5</prx><qty>51</qty></prod>

<prod><name>table saw</name><prx>1099.99</prx><qty>5</qty></prod>

<prod><name>saw</name><prx>9</prx><qty>10</qty></prod>

...
(prx stands for price, qty for quantity) and an article i.e "saw".

The function catalog(s, "saw") returns the line(s) corresponding to the article with $ before the prices:

"table saw > prx: $1099.99 qty: 5\nsaw > prx: $9 qty: 10\n..."
If the article is not in the catalog return "Nothing".

Notes
There is a blank line between two lines of the catalog.

The same article may appear more than once. If that happens return all the lines concerned by the article (in the same order as in the catalog; however see below a note for Prolog language).

The line separator of results may depend on the language \nor \r\n. In Pascal \n is replaced by LineEnding.

in Perl use "£" instead of "$" before the prices.

You can see examples in the "Sample tests".

Note for Prolog language
If the article is not in the catalog then R equals "".

R substrings (separated by "\n") must be in alphabetic order.

*/

function catalog(s, article) {

  // Split the catalog into lines
const lines = s.split("\n");

// Filter the lines that include the article
const foundArticles = lines.filter(line => line.includes(article));

// If no articles are found, return "Nothing"
if (foundArticles.length === 0) return "Nothing";

// Map the found articles to the desired format
const result = foundArticles.map(line => {
const name = line.match(/<name>(.*?)<\/name>/)[1];
const prx = line.match(/<prx>(.*?)<\/prx>/)[1];
const qty = line.match(/<qty>(.*?)<\/qty>/)[1];
return `${name} > prx: $${prx} qty: ${qty}`;
});

// Join the result array into a string with newline separators
return result.join("\r\n");


  }

  // table saw > prx: $1099.99 qty: 5\nsaw > prx: $9 qty: 10\n...
  
  console.log(catalog( `<prod><name>drill</name><prx>99</prx><qty>5</qty></prod>
  
  <prod><name>hammer</name><prx>10</prx><qty>50</qty></prod>
  
  <prod><name>screwdriver</name><prx>5</prx><qty>51</qty></prod>
  
  <prod><name>table saw</name><prx>1099.99</prx><qty>5</qty></prod>
  
  <prod><name>saw</name><prx>9</prx><qty>10</qty></prod>
  
  <prod><name>chair</name><prx>100</prx><qty>20</qty></prod>
  
  <prod><name>fan</name><prx>50</prx><qty>8</qty></prod>
  
  <prod><name>wire</name><prx>10.8</prx><qty>15</qty></prod>
  
  <prod><name>battery</name><prx>150</prx><qty>12</qty></prod>
  
  <prod><name>pallet</name><prx>10</prx><qty>50</qty></prod>
  
  <prod><name>wheel</name><prx>8.80</prx><qty>32</qty></prod>
  
  <prod><name>extractor</name><prx>105</prx><qty>17</qty></prod>
  
  <prod><name>bumper</name><prx>150</prx><qty>3</qty></prod>
  
  <prod><name>ladder</name><prx>112</prx><qty>12</qty></prod>
  
  <prod><name>hoist</name><prx>13.80</prx><qty>32</qty></prod>
  
  <prod><name>platform</name><prx>65</prx><qty>21</qty></prod>
  
  <prod><name>car wheel</name><prx>505</prx><qty>7</qty></prod>
  
  <prod><name>bicycle wheel</name><prx>150</prx><qty>11</qty></prod>
  
  <prod><name>big hammer</name><prx>18</prx><qty>12</qty></prod>
  
  <prod><name>saw for metal</name><prx>13.80</prx><qty>32</qty></prod>
  
  <prod><name>wood pallet</name><prx>65</prx><qty>21</qty></prod>
  
  <prod><name>circular fan</name><prx>80</prx><qty>8</qty></prod>
  
  <prod><name>exhaust fan</name><prx>62</prx><qty>8</qty></prod>
  
  <prod><name>window fan</name><prx>62</prx><qty>8</qty></prod>`, 'ladder'));