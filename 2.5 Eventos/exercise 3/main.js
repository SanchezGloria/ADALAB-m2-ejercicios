const paragraph = document.querySelector('.content');

function showParagraph() {
  paragraph.innerHTML += paragraph.innerHTML;
  // también se puede '<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio eius ab voluptatibus cumque eaque eos quo aperiam omnis accusamus. Inventore sequi porro eligendi laboriosam labore a, dolores ducimus facilis autem?</p>'
}

paragraph.addEventListener('mouseover', showParagraph);
