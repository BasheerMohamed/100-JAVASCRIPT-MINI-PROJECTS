function playSound(e) {
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key = document.querySelector(`div[data-key="${e.keyCode}"]`);
    if (!audio) return;    // To stop the function
    key.classList.add('playing');
    audio.currentTime = 0;    // Rewind to start
    audio.play();
}

function removeTransition(e) {
    if (e.propertyName !== 'transform') return;    // Skip it if it's not transform
    e.target.classList.remove('playing');
}

const keys = Array.from(document.querySelectorAll('.key'));
keys.forEach(key => key.addEventListener('transitionend', removeTransition));

window.addEventListener('keydown', playSound);
