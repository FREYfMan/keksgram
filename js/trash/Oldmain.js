
'use strict';

var getRandomLike = function (min, max) {
  return Math.floor(Math.random(min) * Math.floor(max));
}

var needword = ['Всё отлично!', 'В целом всё неплохо. Но не всё.', 'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.', 'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.', 'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.', 'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'];
var getRandomComment = function (needword) {
    var take = [];
    var n = Math.floor(Math.random(0) * Math.floor(3));
    for (var i = 0; i <= n; i++) {
      take.push(needword[Math.floor(Math.random() * (needword.length))]);
    }
    return take;
  }

var descriptions = [
  'Тестим новую камеру!',
  'Затусили с друзьями на море',
  'Как же круто тут кормят',
  'Отдыхаем...',
  'Цените каждое мгновенье. Цените тех, кто рядом с вами и отгоняйте все сомненья. Не обижайте всех словами......',
  'Вот это тачка!'
]
var getDesc = function (descriptions) {
  var desc = descriptions[Math.floor(Math.random() * (descriptions.length))];
  return desc;
}

var imageBase = [
  {
    url: 'photos/' + [1] + '.jpg',
    likes: getRandomLike(15, 200),
    comments: [
      getRandomComment(needword)
    ],
    description: [
      getDesc(descriptions)
    ]
  },
  {
    url: 'photos/' + [2] + '.jpg',
    likes: getRandomLike(15, 200),
    comments: [
      getRandomComment(needword)
    ],
    description: [
      getDesc(descriptions)
    ]
  },
  {
    url: 'photos/' + [3] + '.jpg',
    likes: getRandomLike(15, 200),
    comments: [
      getRandomComment(needword)
    ],
    description: [
      getDesc(descriptions)
    ]
  },
  {
    url: 'photos/' + [4] + '.jpg',
    likes: getRandomLike(15, 200),
    comments: [
      getRandomComment(needword)
    ],
    description: [
      getDesc(descriptions)
    ]
  },
  {
    url: 'photos/' + [5] + '.jpg',
    likes: getRandomLike(15, 200),
    comments: [
      getRandomComment(needword)
    ],
    description: [
      getDesc(descriptions)
    ]
  },
  {
    url: 'photos/' + [6] + '.jpg',
    likes: getRandomLike(15, 200),
    comments: [
      getRandomComment(needword)
    ],
    description: [
      getDesc(descriptions)
    ]
  }
];



var photoBlock = document.querySelector('.pictures');
var photoTemplate = document.querySelector('#picture')
    .content
    .querySelector('.picture');

var renderPhoto = function (imageBase) {
    var photoElement = photoTemplate.cloneNode(true);

    photoElement.querySelector('.picture__img').src = imageBase.url;
    photoElement.querySelector('.picture__likes').textContent = imageBase.likes;
    photoElement.querySelector('.picture__comments').textContent = imageBase.comments;
    return photoElement;
};

var fragment = document.createDocumentFragment();

for (var i = 0; i < imageBase.length; i++) {
    fragment.appendChild(renderPhoto(imageBase[i]));
}
photoBlock.appendChild(fragment);

var bigPicture = document.querySelector('.big-picture');
bigPicture.classList.remove('hidden');

var getRandom = function (min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
};

var commentSection = document.querySelector('.social__comments');
var listItem = '<li class="social__comment"><img class="social__picture" src="img/avatar-' + getRandom(1, 6) + '.svg" alt="Аватар комментатора фотографии"width="35" height="35"><p class="social__text">' + imageBase[0].comments + '</p></li>';
commentSection.insertAdjacentHTML('beforeend', listItem);

var commentCounter = document.querySelector('.social__comment-count');
commentCounter.classList.add('visually-hidden');
var commentLoader = document.querySelector('.comments-loader');
commentLoader.classList.add('visually-hidden');



var renderComments = function (imageBase) {
  var photoElement = photoTemplate.cloneNode(true);

  bigPicture.querySelector('.big-picture__img img').setAttribute('src',  imageBase[0].url);
  bigPicture.querySelector('.likes-count').textContent = imageBase[0].likes;
  bigPicture.querySelector('.comments-count').textContent = imageBase[0].comments.length;
  bigPicture.querySelector('.social__caption').textContent = imageBase[0].description;
  
  return photoElement;
};

var fragment1 = document.createDocumentFragment();

for (var i = 0; i < imageBase.length; i++) {
    fragment1.appendChild(renderPhoto(imageBase[i]));
}
photoBlock.appendChild(fragment1);