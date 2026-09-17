const video = document.getElementById("hero-video");

video.addEventListener("ended", () => {
    console.log("ВІДЕО ЗАКІНЧИЛОСЯ");
    document.body.classList.add("video-finished");
});