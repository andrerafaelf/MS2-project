

function ready() {
    let overlays = Array.from(document.getElementsByClassName("landing-page"));
    let cards = Array.from(document.getElementsByClassName("card1"));

    overlays.forEach(overlay => {
        overlay.addEventListener("click", () => {
            overlay.classList.remove("visible");
            // game.startGame();
        });
    });

    cards.forEach(card => {
        card.addEventListener("click", () => {
            // game.flipCard(card);
        });
    });
}

if(document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", ready());
} else {
    ready();
}