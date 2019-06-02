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
		index;
	arrCopy.push(input);
	arrCopy = arrCopy.sort((a, b) => {
		return a > b;
	});

	index = arrCopy.indexOf(input);

	return `Above: ${arrCopy.length - index - 1}, Below: ${index}`;
}
console.log(aboveBelow([ 1, 5, 2, 1, 10 ], 6));

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
 * I can't say Javascript is my favorite language.  However, given it's the language I use the most, even in personal projects, I'll pick on Javascript.  
 * Javascript's evolution has been great.  There's so much it can accomplish, these days.  Javascript APIs, in particular, I've been excited to use have been those pertaining to mobile device hardware (e.g., gyroscope, accelerometer, etc).  Another exciting aspect of Javascript APIs has been their use in creating Progressive Web Apps.  
 * HOWEVER!  Without the use of a JS-to-native bridge such as NativeScript or ReactNative, Javascript cannot take advangtage of background processing.  JS has Service Workers, which allow for events like push notifications while the browser is closed.  But,...
 * TL;DR:
 * I would like for JavaScript, via PWA, to be able to run background processes to listen to device events while the browser is closed. 
 */
