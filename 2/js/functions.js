const checkLength = (someString, maxLength) => someString.length <= maxLength;
checkLength('проверяемая строка', 20);

const checkPalindrome = (someString) => {
  const normalizeString = someString.replaceAll(' ', '').toLowerCase();
  let reverseString = '';

  for (let symbolIndex = normalizeString.length - 1; symbolIndex >= 0; symbolIndex--) {
    reverseString += normalizeString[symbolIndex];
  }

  return normalizeString === reverseString;
};
checkPalindrome('Лёша на полке клопа нашёл ');

const getNumber = (someString) => {
  let numberSeries = '';
  someString = someString.toString();

  for (let symbolIndex = 0; symbolIndex <= someString.length - 1; symbolIndex++) {
    if (Number.isNaN(parseInt(someString[symbolIndex], 10))) {
      numberSeries += '';
    } else {
      numberSeries += parseInt(someString[symbolIndex], 10);
    }
  }

  numberSeries = parseInt(numberSeries, 10);

  return numberSeries;
};
getNumber('2023 год');
