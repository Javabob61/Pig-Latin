
function translatePigLatin(str) {
  
  var firstPart = [];
  var lastPart = [];
  var pigWord = [];
  
  for (var i = 0; i < str.length; i++) {
    
    if (str[i] === 'a' || str[i] === 'e' || str[i] === 'i' || str[i] === 'o' || str[i] === 'u') {
      
      if (i === 0) {
              pigWord = str + "way";
              //console.log(pigWord); 
              break;          
      }
      
      lastPart = (str.substr(i));
      firstPart = (str.substr(0, i));
      pigWord = lastPart + firstPart + "ay"; 

      //console.log(pigWord);
      break;     
    }  
  }
  
  return pigWord;
}

translatePigLatin("consonant");