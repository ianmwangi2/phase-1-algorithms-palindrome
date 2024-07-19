function isPalindrome(word) {
  // Write your algorithm here
  const reversedWord = word.split('').reverse().join('');
  return word === reversedWord;
}

/* 
  Add your pseudocode here
  1. Take string input `word`.
  2. Reverse the string.
  3. Compare the reversed string with the original string.
  4. If they are the same, they return true.
  5. If they are different, they return false.
*/

/*
  Add written explanation of your solution here
  The function `isPalindrome created, runs the string both foward and backward. 
  It does this by reversing the input string and comparing it with the original string.
  If both strings are the same, it then returns a boolean 'true', otherwise returns 'false'.
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
  
  console.log("Expecting: true");
  console.log("=>", isPalindrome("madam"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("hello"));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", isPalindrome("a"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("ab"));
}

module.exports = isPalindrome;
