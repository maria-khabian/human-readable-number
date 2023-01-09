module.exports = function toReadable (number) {

    const numberArr = Array.from(number.toString(), Number)
  
    const num = {
        0: 'zero',
        1: 'one',
        2: 'two',
        3: 'three',
        4: 'four',
        5: 'five',
        6: 'six',
        7: 'seven',
        8: 'eight',
        9: 'nine'
      }
      
      const num_11_to_19 = {  
        10: 'ten',
        11: 'eleven',
        12: 'twelve',
        13: 'thirteen',
        14: 'fourteen',
        15: 'fifteen',
        16: 'sixteen',
        17: 'seventeen',
        18: 'eighteen',
        19: 'nineteen',
      }
      
      const num_20_to_90 = {
        20:'twenty',
        30: 'thirty',
        40: 'forty',
        50: 'fifty',
        60: 'sixty',
        70: 'seventy',
        80: 'eighty',
        90: 'ninety',
      }
      
      const num_100 = {
        100: 'hundred'
      }
      
      let units, tenths, hundredths
      
      if(numberArr.length === 1) {
        units = num[numberArr[0]];
        return units;
      }
      
      if(numberArr.length === 2) {
        tenths = numberArr[0] === 1 ? num_11_to_19[Number(''+numberArr[0] + ''+numberArr[1])] : num_20_to_90[numberArr[0]*10];
        units = numberArr[1] === 0 ? '' : numberArr[0] === 1 ? '' : ' ' + num[numberArr[1]];
        return tenths + units
      }
      
      if(numberArr.length === 3) {
        hundredths = num[numberArr[0]] + ' ' + num_100[100];
        tenths = numberArr[1] === 0 ? '' : ' ' + (numberArr[1] === 1 ? num_11_to_19[Number(''+numberArr[1] + ''+numberArr[2])] : num_20_to_90[numberArr[1]*10]);
        units = numberArr[2] === 0 ? '' : numberArr[1] === 1 ? '': ' ' + num[numberArr[2]]; 
        return hundredths + tenths + units;
      }
}

