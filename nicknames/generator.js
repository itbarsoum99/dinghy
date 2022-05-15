var nickname = document.getElementById("nickname");
const consonants = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "ß", "ç"];
const vowels = ["a", "e", "i", "o", "u", "y", "æ", "ē", "û", "ī", "ø"];

var num = Math.floor(Math.random() * 4) + 4;
var name = "g";


for (let i = 0; i < num; i++) {
  if (i % 3 == 0) {
    name += vowels[Math.floor(Math.random() * vowels.length)];
  } else {
    name += consonants[Math.floor(Math.random() * consonants.length)];
  }
}

nickname.innerHTML = name;

