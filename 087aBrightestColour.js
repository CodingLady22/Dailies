/* 
Which color is the brightest?

One of the common ways of representing color is the RGB color model, in which the Red, Green, and Blue primary colors of light are added together in various ways to reproduce a broad array of colors.

One of the ways to determine brightness of a color is to find the value V of the alternative HSV (Hue, Saturation, Value) color model. Value is defined as the largest component of a color:

V = max(R,G,B)
You are given a list of colors in 6-digit hexidecimal notation #RRGGBB. Return the brightest of these colors!

For example,

brightest(["#001000", "#000000"]) == "#001000"
brightest(["#ABCDEF", "#123456"]) == "#ABCDEF"
If there are multiple brightest colors, return the first one:

brightest(["#00FF00", "#FFFF00", "#01130F"]) == "#00FF00"
Note that both input and output should use upper case for characters A, B, C, D, E, F.
*/

function brightest(colors){
  
  let sortedColors = colors;
    sortedColors.sort((a, b)=>{
    let rValue = parseInt(a.slice(1, 3), 16);
    let gValue = parseInt(a.slice(3, 5), 16);
    let bValue = parseInt(a.slice(5), 16);
    let brightness = Math.max(rValue, gValue, bValue);
    
    let rValue2 = parseInt(b.slice(1, 3), 16);
    let gValue2 = parseInt(b.slice(3, 5), 16);
    let bValue2 = parseInt(b.slice(5), 16);
    let brightness2 = Math.max(rValue2, gValue2, bValue2);
    return brightness2 - brightness;
  });
  return sortedColors[0];
  
}
console.log(brightest('#ABCDEF'));