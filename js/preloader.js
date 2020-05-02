document.addEventListener('DOMContentLoaded', () => {
    let element = document.querySelector('.counter');
    let loader = document.querySelector('.loader');
    let preloader = document.querySelector('.preloader');
    let count = 0;
    let counter = setInterval(() => {
        if (count <= 100) {
            element.textContent = count + '%';
            loader.style.width = count + '%';
            count++;
        } else {
            clearInterval(counter);
            fadeOut(preloader);
        }
    },25);
    //  fadeout
    function fadeOut(element) {
        element.style.opacity = 1;

        (function fade() {
            if ((element.style.opacity -= .05) < 0) {
              // element.style.transition = "ease-in-out"
                element.style.display = 'none';
                document.body.classList.remove('body-height');
            } else {
                requestAnimationFrame(fade);
            }
        })();
    }
});