'use strict';

const imgElement = document.querySelector('.user');
let avatar = 'http://www.fillmurray.com/300/300';
const DEFAULT_AVATAR = 'http://placehold.it/300x300';

let result = avatar || DEFAULT_AVATAR;

imgElement.innerHTML = `<img class="user__avatar" src=${result} />`;

// 'use strict';

// const imgElement = document.querySelector('.user__avatar');

// const DEFAULT_AVATAR = 'http://placehold.it/300x300';

// let avatar = 'http://www.fillmurray.com/300/300';

// const profileImage = avatar || DEFAULT_AVATAR;

// imgElement.src = profileImage;
