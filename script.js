// const video = document.getElementById("hero-video");

// video.addEventListener("ended", () => {
//     console.log("ВІДЕО ЗАКІНЧИЛОСЯ");
//     document.body.classList.add("video-finished");
// });

document.body.classList.add("video-finished");


const burger = document.querySelector('.burger');
const menu = document.querySelector('.desktop-menu');

burger.addEventListener('click', () => {
    burger.classList.toggle('active');
    menu.classList.toggle('active');
});

menu.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
        burger.classList.remove('active');
        menu.classList.remove('active');
    });
});