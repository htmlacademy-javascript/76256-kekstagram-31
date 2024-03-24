const checkLength = (someString, maxLength) => someString.length <= maxLength;
checkLength('проверяемая строка', 20);

const checkPalindrome = (someString) => {
  const normalizeString = someString.replaceAll(' ', '').toLowerCase();
  let reverseString = '';

  for (let i = normalizeString.length - 1; i >= 0; i--) {
    reverseString += normalizeString[i];
  }

  return normalizeString === reverseString;
};
checkPalindrome('Лёша на полке клопа нашёл ');

const getNumber = (someString) => {
  let numberSeries = '';
  someString = someString.toString();

  for (let i = 0; i <= someString.length - 1; i++) {
    const convertSymbol = parseInt(someString[i], 10);

    if (Number.isNaN(convertSymbol)) {
      numberSeries += '';
    } else {
      numberSeries += convertSymbol;
    }
  }

  numberSeries = parseInt(numberSeries, 10);

  return numberSeries;
};
getNumber('2023 год');
