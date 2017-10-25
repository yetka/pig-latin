var pigLatin = function(string) {
  var words = string.split(" ");
  // var newStrings = words.map(function(word) {
  //   if ((word.charAt(0)==="a") || (word.charAt(0)==="e") || (word.charAt(0)==="i") || (word.charAt(0)==="o") || (word.charAt(0)==="u")) {
  //     var word = word.concat("way");
  //     alert(word);
  //     return word;
  //   } else {
  //     return word;
  //   };
  // });


  // var secondStrings = words.map(function(word) {
  //   for (index=1; index < word.length; index++) {
  //     if ((word.charAt(index)==="a") || (word.charAt(index)==="e") || (word.charAt(index)==="i") || (word.charAt(index)==="o") || (word.charAt(index)==="u")) {
  //
  //       var firstConsonants = word.slice(0, index);
  //       var lastConsonants = word.slice(index, word.length);
  //       var newWord = (lastConsonants + firstConsonants + "ay");
  //
  //       return newWord;
  //     }
  //   }
  // });

  var thirdStrings = words.map(function(word) {
    for (index=1; index < word.length; index++) {
      if ((word.charAt(index)==="a") || (word.charAt(index)==="e") || (word.charAt(index)==="i") || (word.charAt(index)==="o") || (word.charAt(index)==="u")) {

        if (word.includes("qu")) {
          var firstConsonants = word.slice(0, index + 1);
          if (firstConsonants.includes("qu")) {
            var firstConsonants = word.slice(0, index + 1);
            var lastConsonants = word.slice(index + 1, word.length);
            var newWord = (lastConsonants + firstConsonants + "ay");
            return newWord;
          } else {
            var firstConsonants = word.slice(0, index);
            var lastConsonants = word.slice(index, word.length);
            var newWord = (lastConsonants + firstConsonants + "ay");
            return newWord;
          }

        }
      }
    };
  })
}

$(document).ready(function() {
  $("#userInput").submit(function(event) {
    event.preventDefault();
    var userString = $("#userString").val();
    var result = pigLatin(userString);
    //alert(userString);
  });
});
