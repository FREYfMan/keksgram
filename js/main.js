'use strict';

function arrayRandElement(arr) {
  var rand = Math.floor(Math.random() * arr.length);
  return arr[rand];
}

var url = [];
for (var i = 0; i < 25; i++) {
  var item = 'photos/' + (i + 1) + '.jpg';
  url.push(item);
}

var getRandom = function (min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
};

var commentsAll = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'
];

var descriptionAll = [
  'Тестим новую камеру!',
  'Затусили с друзьями на море',
  'Как же круто тут кормят',
  'Отдыхаем...',
  'Цените каждое мгновенье.Цените тех, кто рядом с вами и отгоняйте все сомненья.Не обижайте всех словами......',
  'Вот это тачка!'
];

var usersPhotos = [];
for (i = 0; i < 25; i++) {
  var usersPhoto = {
    url: url[i],
    likes: getRandom(15, 200),
    comments: arrayRandElement(commentsAll),
    commentsAmount: getRandom(5, 30),
    description: arrayRandElement(descriptionAll)
  };
  usersPhotos.push(usersPhoto);
}

var pictureList = document.querySelector('.pictures');
var pictureTemplate = document.querySelector('#picture')
  .content
  .querySelector('.picture');

var renderPhotos = function (userPhoto) {
  for (i = 0; i < usersPhotos.length; i++) {
    var pictureElement = pictureTemplate.cloneNode(true);
    pictureElement.querySelector('.picture__img').setAttribute('src', userPhoto.url);
    pictureElement.querySelector('.picture__comments').textContent = userPhoto.commentsAmount;
    pictureElement.querySelector('.picture__likes').textContent = userPhoto.likes;
  }
  return pictureElement;
};

var getUsersPhotos = function () {
  var fragment = document.createDocumentFragment();
  for (var j = 0; j < usersPhotos.length; j++) {
    fragment.appendChild(renderPhotos(usersPhotos[j]));
  }
  pictureList.appendChild(fragment);
  return pictureList;
};

getUsersPhotos();

var mainImage = document.querySelector('.big-picture');
mainImage.classList.remove('hidden');

mainImage.querySelector('.big-picture__img img').setAttribute('src', usersPhotos[0].url);
mainImage.querySelector('.likes-count').textContent = usersPhotos[0].likes;
mainImage.querySelector('.comments-count').textContent = usersPhotos[0].commentsAmount;
mainImage.querySelector('.social__caption').textContent = usersPhotos[0].description;

var commentSection = document.querySelector('.social__comments');
var listItem = '<li class="social__comment"><img class="social__picture" src="img/avatar-' + getRandom(1, 6) + '.svg" alt="Аватар комментатора фотографии"width="35" height="35"><p class="social__text">' + usersPhotos[1].comments + '</p></li>';
commentSection.insertAdjacentHTML('beforeend', listItem);

var commentCounter = document.querySelector('.social__comment-count');
commentCounter.classList.add('visually-hidden');
var commentLoader = document.querySelector('.comments-loader');
commentLoader.classList.add('visually-hidden');