module.exports = function toReadable (number) {
  let n = number.toString().split('');

  let num = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen', 'twenty'];

  let num2 = ['zero', 'ten', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety']
console.log(n.slice(1).join(''));
  if(number <= 20) {
    return num[number];
  } else if( number < 100) {
    if(n[n.length-1] == 0) {
      return num2[n[0]];
    }
    return num2[n[0]] + " " + num[n[1]];
  } else if (number < 1000) {
    if(n[1] == 0 && n[2]==0) {
      return num[n[0]] + ' ' + 'hundred';
    } else if (n[1] == 0) {
      return num[n[0]] + ' ' + 'hundred' + " " + num[n[2]];
    } else if (+n.slice(1).join('') <= 20 ) {
      return num[n[0]] + ' ' + 'hundred' + " " + num[n.slice(1).join('')]; 
    } else if (n[2] == 0) {
      return num[n[0]] + ' ' + 'hundred' + " " + num2[n[1]];
    }
      return num[n[0]] + ' ' + 'hundred' + " " + num2[n[1]] + " " + num[n[2]];
    }
}
