class AudioController {
    constructor() {
        this.bgMusic = new Audio("assets/audio/bgmusic.mp3");
        this.flipSound = new Audio("assets/audio/cardflip.wav");
        this.matchSound =  new Audio("assets/audio/match.wav");
        this.victorySound = new Audio("assets/audio/victory.mp3");
        this.gameOverSound = new Audio("assets/audio/defeat.mp3");
        this.bgMusic.volume = 0.05;
        this.bgMusic.loop = true;
        this.flipSound.volume = 0.6;
    }

    startMusic() {
        this.bgMusic.play();
    }

    stopMusic() {
        this.bgMusic.pause();
        this.bgMusic.currentTime = 0;
    }

    flip() {
        this.flipSound.play();
    }

    match() {
        this.matchSound.play();
    }

    victory() {
        this.stopMusic();
        this.victory.play();
    }

    gameOver() {
        this.stopMusic();
        this.gameOverSound.play();
    }
}

class MixOrMatch {
    constructor(totalTime, cards) {
        this.cardsArray = cards;
        this.totalTime = totalTime;
        this.timeRemaining = totalTime;
        this.timer = document.getElementById("timer");
        this.ticker = document.getElementById("attempts");
        this.audioController = new AudioController();
    }

    startGame() {
        this.cardToCheck = null;
        this.totalClicks = 0;
        this.timeRemaining = this.totalTime;
        this.matchedCards = [];
        this.busy = true;

    }

    flipCard(card) {
        if (this.canFlipCard(card)) {
            this.audioController.flip();
            this.totalClicks++;
            this.ticker.innerText = this.totalClicks;
        }
    }

    canFlipCard(card) {
        return true;
        
    }
}

function ready() {
    let overlays = Array.from(document.getElementsByClassName("landing-page"));
    let cards = Array.from(document.getElementsByClassName("card1"));
    let game = new MixOrMatch(90, cards);

    overlays.forEach(overlay => {
        overlay.addEventListener("click", () => {
            overlay.classList.remove("visible");
            game.startGame();
            let audioController = new AudioController();
            audioController.startMusic();
        });
    });

    cards.forEach(card => {
        card.addEventListener("click", () => {
            game.flipCard(card);
        });
    });
}

if(document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", ready());
} else {
    ready();
}