var capitalLetters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

var lowercaseLetters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

var numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

var symbols = ['!', '@', '#', '$', '%', '&', '*', '+', '-', '=', '?', '~'];



var button = document.getElementById("passwordButton");
var paragraph = document.getElementById("myParagraph");

function getRandomCharacters(arr, count) {
  var result = [];
  for (var i = 0; i < count; i++) {
    var randomIndex = Math.floor(Math.random() * arr.length);
    result.push(arr[randomIndex]);
  }
  return result;
}

// Convert the string into an array of character



button.addEventListener("click", function() {
  
  var a = getRandomCharacters(capitalLetters, 5);
  var b = getRandomCharacters(lowercaseLetters, 5);
  var c = getRandomCharacters(numbers, 5);
  var d = getRandomCharacters(symbols, 5);
  var e = a + b + c + d
  var f = e.replace(/,/g, '');
  
  function shuffleString(string) {
  var array = string.split(''); // Convert string to an array of characters
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array.join(''); // Convert the shuffled array back to a string
}
  
  var shuffledString = shuffleString(f);


  paragraph.textContent = shuffledString;
});

document.getElementById("copyButton").addEventListener("click", function() {
  const textToCopy = document.getElementById("textToCopy").innerText;
  navigator.clipboard.writeText(textToCopy).then(function() {
    alert("Text copied to clipboard!");
  }, function(error) {
    console.error("Error copying text: ", error);
  });
});

