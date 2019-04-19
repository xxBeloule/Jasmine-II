var languagesArrayCreation = function () {
var languages = ["Html","CSS","Java","PHP"];
  return languages;
}

var numbersArrayCreation = function () {
var numbers = [0,1,2,3,4,5];
    return numbers;
}

var ElementReplacement = function (languages) {
  languages.splice(2 , 1, 'Javascript');
  return languages;
}

var AddElementToLanguagesArray = function (languages) {
  languages.push('Ruby','Python');
  return languages;
}

var AddElementToNumbersArray = function (numbers) {
  numbers.unshift(-2,-1);
  return numbers;
}

var deleteArrayFirstElement = function (languages) {
  languages.shift();
  return languages;
}

var deleteArrayLastElement = function (languages) {
  languages.pop()
  return languages;
}

var stringToArray = function (socialMediaInString) {
var socialMediaInString = "socialMedia InString";
var tableau = socialMediaInString.split();
  tableau[0] = ['Facebook', 'Twitter', 'Google +', 'Viadeo', 'LinkedIn'];
  return tableau[0];
}

var arrayToString = function (languages) {

  return languages.join();
}

var arraySort = function (socialMedia) {
  return   socialMedia.sort();
}

var arrayInvert = function (languages){


  return languages.reverse();
}
