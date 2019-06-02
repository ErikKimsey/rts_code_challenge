/**
 * 
 * 
 * Erik Kimsey
 * erikkimsey.com
 * RTS Labs code exercises
 * 
 * 
 */

/**
 * 
 * #1
 */
function aboveBelow(arr, input) {
	let arrCopy = arr.slice(),
		index,
		above,
		below;
	arrCopy.push(input);
	arrCopy = arrCopy.sort((a, b) => {
		return a > b;
	});

	index = arrCopy.indexOf(input);
	below = index;
	above = arrCopy.length - index - 1;

	return `Above: ${above}, Below: ${below}`;
}
// console.log(aboveBelow([ 1, 5, 2, 1, 10 ], 6));

/**
 * 
 * #2
 */
function rotateChars(str, input) {
	if (input > str.length) return 'input argument cannot longer than string length';
	return str.slice(str.length - input) + str.slice(0, str.length - input);
}
// console.log(rotateChars('MyString', 2));

/**
 * 
 * #3
 * One aspect of my favorite framework/language/platform that I'd like to change?
 * 
 */

