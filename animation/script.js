const block = document.getElementById('block');
const controlButton = document.getElementById('controlButton');

let Moved = false;

  controlButton.addEventListener('click', function() {
  if (!Moved) {
    block.style.transform = 'translateX(200px)';
  } else {
    block.style.transform = 'translateX(0)';
  }
  
  Moved = !Moved;
});
