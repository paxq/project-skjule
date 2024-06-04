class Alt_Library {
  constructor() {
    this.full = {
      'a' : 'å',
      'b' : '∫',
      'c' : 'ç',
      'd' : '∂',
      'e' : '´',
      'f' : 'ƒ',
      'g' : '©',
      'h' : '˙',
      'i' : 'ˆ',
      'j' : '∆',
      'k' : '˚',
      'l' : '¬',
      'm' : 'µ',
      'n' : '˜',
      'o' : 'ø',
      'p' : 'π',
      'q' : 'œ',
      'r' : '®',
      's' : 'ß',
      't' : '†',
      'u' : '¨',
      'v' : '√',
      'w' : '∑',
      'x' : '≈',
      'y' : '¥',
      'z' : 'Ω',
      'A' : 'Å',
      'B' : 'ı',
      'C' : 'Ç',
      'D' : 'Î',
      'E' : '´',
      'F' : 'Ï',
      'G' : '˝',
      'H' : 'Ó',
      'I' : 'ˆ',
      'J' : 'Ô',
      'K' : '',
      'L' : 'Ò',
      'M' : 'Â',
      'N' : '˜',
      'O' : 'Ø',
      'P' : '∏',
      'Q' : 'Œ',
      'R' : '‰',
      'S' : 'Í',
      'T' : 'ˇ',
      'U' : '¨',
      'V' : '◊',
      'W' : '„',
      'X' : '˛',
      'Y' : 'Á',
      'Z' : '¸',
      '0' : 'º',
      '1' : '¡',
      '2' : '™',
      '3' : '£',
      '4' : '¢',
      '5' : '∞',
      '6' : '§',
      '7' : '¶',
      '8' : '•',
      '9' : 'ª',
      '.' : '≥',
      ',' : '≤',
      '?' : '¿',
      '!' : '⁄',
      ':' : 'Ú',
      ';' : '…',
      '/' : '÷'
    };
  }

  get_reverse() {
    let result = {};
    for (var i = 0, keys = Object.keys(this.full); i < keys.length; i++) { 
      result[this.full[keys[i]]] = keys[i];
    }
    return result;
  }

  encode(string) {
    let result = [];
    for (const letter of string) {
      if (letter == string[string.length]) {
        break
      }
      const current_char = this.full[letter]
      if (!current_char) {
        result.push(letter);
      } else {
        result.push(current_char);
      }
    }
    console.log(`Result: ${result.toString().replace(/,/g,'')} encoded.`);
    return result.toString().replace(/,/g,'');
  }

  decode(string) {
    let result = [];
    for (const letter of string) {
      if (letter == string[string.length]) {
        break
      }
      const current_char = this.get_reverse()[letter]
      if (!current_char) {
        result.push(letter);
      } else {
        result.push(current_char);
      }
    }
    console.log(`Result: ${result.toString().replace(/,/g,'')} decoded.`);
    return result.toString().replace(/,/g,'');
  }
}

const alt = new Alt_Library();

alt.decode(alt.encode("This"))