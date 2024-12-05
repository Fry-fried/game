const gameZone = document.querySelector(".gamezone")
const btnNo = document.querySelector(".answer__btn-no")
const btnYes = document.querySelector(".answer__btn-yes")

function runAway() {
    const gameZoneWidth = gameZone.clientWidth;
    const gameZoneHeight = gameZone.clientHeight;

    const genTop = Math.random() * (gameZoneHeight - btnNo.offsetHeight);
    const genLeft = Math.random() * (gameZoneWidth - btnNo.offsetWidth);

    btnNo.style.top = genTop + "px"
    btnNo.style.left = genLeft + "px"
}

btnNo.addEventListener("mouseover", () => {
    btnNo.style.position = "absolute"
    btnNo.style.top = "60%"
    btnNo.style.right = "60%"

    runAway()
})

btnYes.addEventListener("click", () => {
    const appearGif = document.querySelector(".secret__gif-ricardo")
    const audio = document.querySelector(".secret__audio")

    appearGif.style.display = "block"
    audio.play()

})



