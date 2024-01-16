/* 
Task Description

You're re-designing a blog, and the blog's posts have the Weekday Month Day, time format for showing the date and time when a post was made, e.g., Friday May 2, 7pm.

You're running out of screen real estate, and on some pages you want to display a shorter format, Weekday Month Day that omits the time.

Write a function that takes the website date/time in its original string format and returns the shortened format.

Input
Input will always be a string, e.g., "Friday May 2, 7pm". 

Output
Output will be the shortened string, e.g., "Friday May 2".
*/

function shortenToDate(longDate) {
    // your code here
    
    return longDate.split(',')[0]
    
    /* 
    OR
    
    let newDate = longDate.split(' ').slice(0, 3).join(' ').substring(0, )
    
    return newDate.substring(0, newDate.length - 1)
    */
    
}
console.log(shortenToDate("Friday May 2, 7pm"));