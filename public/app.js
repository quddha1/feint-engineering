document.querySelector('#year').textContent = new Date().getFullYear();

const readMoreButton = document.querySelector('.read-more');
const identifierDetails = document.querySelector('#identifier-details');

readMoreButton.addEventListener('click', () => {
  const isExpanded = readMoreButton.getAttribute('aria-expanded') === 'true';
  readMoreButton.setAttribute('aria-expanded', String(!isExpanded));
  identifierDetails.hidden = isExpanded;
  readMoreButton.querySelector('span').textContent = isExpanded ? 'Read more' : 'Read less';
});
