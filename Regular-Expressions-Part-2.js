let re;

// Literal Characters
re = /hello/;
re = /hello/i;

// Metacharacter Symbols
re = /^h/;  //Starts with ^
re = /world$/i; // Ends with $
re = /^hello$/i; // Must begin and end with
re = /h.llo/i; // Matches any one character
re = /h*llo/i; // Matches any character with 0 or more times
re = /gra?e?y/i; // Optional character
re = /gra?e?y\?/i; // Escape Character

// Brackets [] - Character Sets
re = /gr[ae]y/i;  // Must be an a or e
re = /[GF]ray/; // Must be G or F
re = /[^GF]ray/; // Match anything except G or F.
re = /[A-Z]ray/;// Match any uppercase character
re = /[a-z]ray/; // Match any lowercase character
re = /[A-Za-z]ray/; // Match any letter
re = /[0-9][0-9]ray/; // Match any digit 

// Braces {} - Quantifiers
re = /Hel{2}o/i; // Must occur exactly {m} amount of times 
re = /Hel{2,4}o/i; // Must occur exactly {m} amount of times
re = /Hel{2,}o/i; // Must occur atleast {m} times

// Partheses() - Grouping;
re = /^([0-9]x){3}$/i;


// Shorthand Character Classes
re = /\w/; // Word Character - alphanumeric or _ Q  
re = /\w+/; // += one or more
re = /\W/; // Non word character
re = /\d/; // Match any digit
re = /\d+/;// Match any digit 0 or more times
re = /\D/; // Match any Non-Digit
re = /\s/; // Match whitespace character
re = /\S/; // Match non-whitespace character
re = /Hell\b/i; // Word Boundary

// Assertions
re = /x(?=y)/; // Match x only if followed by y
re = /x(!=y)/; // Match x only if NOT followed by y

// String to match
// const str = 'Hello World';
const str = 'azxycvf';

// Log Results
const result = re.exec(str);
console.log(result);

const reTest = (re, str) => {
    if(re.test(str)) {
        console.log(`${str} matches ${re.source}`);
    } else {
        console.log(`${str} DOES NOT MATCH ${re.source}`);
    }
}

reTest(re,str);