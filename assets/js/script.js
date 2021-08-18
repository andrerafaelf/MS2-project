class AudioController {
    constructor() {
        this.bgMusic = new Audio("assets/audio/bgmusic.mp3");
        this.flipSound = new Audio("assets/audio/cardflip.wav");
        this.matchSound =  new Audio("assets/audio/match.wav");
        this.victorySound = new Audio("assets/audio/victory.mp3");
        this.gameOverSound = new Audio("assets/audio/defeat.mp3");
        this.bgMusic.volume = 0.05;
        this.bgMusic.loop = true;
    }

    startMusic() {
        this.bgMusic.play();
    }
}

function ready() {
    let overlays = Array.from(document.getElementsByClassName("landing-page"));
    let cards = Array.from(document.getElementsByClassName("card1"));

    overlays.forEach(overlay => {
        overlay.addEventListener("click", () => {
            overlay.classList.remove("visible");
            // game.startGame();
            let audioController = new AudioController();
            audioController.startMusic();
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