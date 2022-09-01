const btn = document.querySelector('.collapsible__button');
const hidden = document.querySelector('.collapsible__action--hidden');
const visible = document.querySelector('.collapsible__action--visible');
const textContent = document.querySelector('.collapsible__content');

hidden.style.display = 'none';
textContent.style.cssText=`overflow : hidden;
  max-height: 100;
  background-color: lightcyan;
`;

const heightContent = textContent.clientHeight;

const animateContent = textContent.animate(
  { height: ["0px", `${heightContent}px`]},
  { duration: 100, fill: "both"}
);

btn.addEventListener('click', () => {
  if (hidden.style.display === 'none') {
    visible.style.display = 'none';
    hidden.style.display = 'block';
  } else {
    visible.style.display = 'block';
    hidden.style.display = 'none';
  }
  animateContent.reverse();
})