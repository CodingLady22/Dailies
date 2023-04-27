/* 
C.Wars
Normally we have firstname, middle and the last name but there may be more than one word in a name like a South Indian one.

Similar to those kinda names we need to initialize the names.

See the pattern below:

initials('code wars') => returns C.Wars 
initials('Barack Hussain obama') => returns B.H.Obama 
Complete the function initials.

Names are separated by exactly one space in the input, without leading or trailing spaces. Names will always be lowercase, except optionally their first letter.
*/

function initials(n){

    let splitted = n.split(' ')

    return splitted.map(el => {
        if(splitted.indexOf(el) !== (splitted.length - 1))
        return el[0].toUpperCase() + '.' + el[0].slice(1)
        if(splitted.indexOf(el) == (splitted.length - 1)) {
            return el[0].toUpperCase() + el.slice(1)
        }
    }).join('')

}

console.log(initials('Barack Hussain obama'));