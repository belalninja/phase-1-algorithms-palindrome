function isPalindrome(word) {
  // Write your algorithm here
  const array = [...word];
  const compare = [...word];
  let reversedWord = [];
  function reverse(array) {
    for (let i = array.length - 1; i >= 0; i--) {
      reversedWord.push(array.pop());
    }
  }
  reverse(array);
  // console.log(compare);
  // console.log(reversedWord);
  return reversedWord.toString() === compare.toString();
}
// console.log(isPalindrome("racecar"));
/* 
  Add your pseudocode here
*/

/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
