const SET_DESCRIPTIONS = [
  'Вот я в душе',
  'Вот я из душа',
  'Вот я собираюсь вкусненько покушать',
  'Сметана в борще',
  'А салат вообще - огонь',
  'Подписывайся, детка, на мой Кекстаграм!'
];
const SET_COMMENTS = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'
];
const SET_COMMENTATOR_NAMES = [
  'Аарон',
  'Август',
  'Авдей',
  'Аверьян',
  'Агафон',
  'Агей',
  'Адам',
  'Адриан',
  'Аким',
  'Аксён',
  'Александр',
  'Алексей'
];

const getRandomInteger = (a, b) => {
  const lower = Math.ceil(Math.min(a, b));
  const upper = Math.floor(Math.max(a, b));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
};

const createIdCommentator = (min, max) => {
  const previousValues = [];

  return () => {
    let currentValue = getRandomInteger(min, max);
    if (previousValues.length >= (max - min + 1)) {
      return null;
    }
    while (previousValues.includes(currentValue)) {
      currentValue = getRandomInteger(min, max);
    }
    previousValues.push(currentValue);
    return currentValue;
  };
};

const getRandomArrayElement = (elements) => elements[getRandomInteger(0, elements.length - 1)];
const getIdComment = createIdCommentator(1, 200);

const createComments = () => ({
  id: getIdComment(),
  avatar: `img/avatar-${getRandomInteger(1, 6)}.svg`,
  message: getRandomArrayElement(SET_COMMENTS),
  name: getRandomArrayElement(SET_COMMENTATOR_NAMES)
});

const createPhotoDescriptions = () => {
  let id = 1;

  return () => {
    const photoDescripion = {
      id: id,
      url: `photo/${id}.jpg`,
      description: getRandomArrayElement(SET_DESCRIPTIONS),
      likes: getRandomInteger(15, 200),
      comments: Array.from({length: getRandomInteger(0, 30)}, createComments)
    };
    id += 1;
    return photoDescripion;
  };
};

const photoDescripions = Array.from({length: 25}, createPhotoDescriptions());
photoDescripions();
