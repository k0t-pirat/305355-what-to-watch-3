const getRandomNumber = (from, to) => {
  return Math.round(Math.random() * (to - from) + from);
};

const getRandomArrayElement = (array) => {
  return array[getRandomNumber(0, array.length - 1)];
};

const getRandomArrayElements = (array) => {
  let randomElements = [];
  let maxNumber = array.length - 1;
  const countOfElements = getRandomNumber(0, maxNumber);

  new Array(countOfElements).fill(``).forEach(() => {
    const elementNumber = getRandomNumber(0, maxNumber);
    const addedElement = array.splice(elementNumber, 1)[0];

    randomElements.push(addedElement);
    maxNumber--;
  });

  return randomElements;
};

const mockTitles = [
  `Просто хороший фильм`,
  `Какие-то там твари`,
  `мукбуС`,
  `Расподия или что-то ещё`,
  `Строитель великой самолётной империи`,
  `Нужно поболтать`,
  `Что мы здесь делаем`,
  `Ревенунт`,
  `Английский ЙонниуС`,
];

const mockGenres = [
  `Интересные фильмы`,
  `Боевик`,
  `Комедия`,
  `Ролевики с мечами`,
  `Документалка`,
];

const mockDescriptions = [
  `Этот фильм интересный очень, очень прямо интересный и хороший, что ваще капец.`,
  `Если хотите - смотрите, если не хотите - не смотрите`,
  `Начинается фильм с того, что два человека идут вдоль дороги, а заканчивается тем, что показывают горы`,
];

const mockDirectors = [
  `Режиссёр Новиков`,
  `Режиссинский Альберт Осталопович`,
  `Гагай Игорь Игнатьевич`,
  `Пулькин Андрей Васильевич`,
  `Шмородин Борис Сергеевич`,
];

const mockActors = [
  `Валера`,
  `Дима`,
  `Сизый`,
  `Дрон`,
  `Вера`,
  `Маша`,
  `Саша`,
  `Орёл`,
  `Вилен`,
];

const mockImages = [
  `fantastic-beasts-the-crimes-of-grindelwald.jpg`,
  `macbeth.jpg`,
  `bohemian-rhapsody.jpg`,
  `aviator.jpg`,
  `we-need-to-talk-about-kevin.jpg`,
  `what-we-do-in-the-shadows.jpg`,
  `revenant.jpg`,
  `johnny-english.jpg`,
  `bg-the-grand-budapest-hotel.jpg`,
  `the-grand-budapest-hotel-poster.jpg`,
];

const generateFilm = (id, filmImage) => {
  return {
    id,
    title: getRandomArrayElement(mockTitles),
    genre: getRandomArrayElement(mockGenres),
    realeaseDate: getRandomNumber(1950, 2005),
    image: filmImage,
    bigImage: filmImage,
    posterImage: filmImage,
    description: getRandomArrayElement(mockDescriptions),
    rating: getRandomNumber(0, 100) / 10,
    votesNumber: getRandomNumber(50, 1000),
    director: getRandomArrayElement(mockDirectors),
    actors: getRandomArrayElements(mockActors)
  };
};

const generateFilms = () => {
  let generatedFilms = [];
  const randomNumber = getRandomNumber(4, 16);

  for (let i = 0; i < randomNumber; i++) {
    const filmImage = getRandomArrayElement(mockImages);
    generatedFilms.push(generateFilm(i + 1, filmImage));
  }

  return generatedFilms;
};

const films = generateFilms();
const featuredFilm = films[0];

export {featuredFilm, films};
