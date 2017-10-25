var pigLatin = function(string) {
  var words = string.split(" ");
  var newStrings = words.map(function(word) {
    if ((word.charAt(0)==="a") || (word.charAt(0)==="e") || (word.charAt(0)==="i") || (word.charAt(0)==="o") || (word.charAt(0)==="u")) {
      return word = word.concat("way");
    } else {
      return word;
    };

  });
  alert(newStrings);

};

$(document).ready(function() {
  $("#userInput").submit(function(event) {
    event.preventDefault();
    var userString = $("#userString").val();
    var result = pigLatin(userString);
  });
});
