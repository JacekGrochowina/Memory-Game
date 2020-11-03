export class Card {
    constructor(bgImg, pairID) {
        this.element = null;
        this.bgImg = bgImg;
        this.pairID = pairID;
        this.solved = false;
    }

    render() {
        const card = document.createElement('div');

        card.classList.add('game__card');
        card.style.backgroundImage = `url(${this.bgImg})`;

        this.element = card;
    }

    show() {
        this.element.classList.remove('hidden');
    }

    hide() {
        this.element.classList.add('hidden');
    }

    guessed() {
        this.guessed = true;
    }

    solved() {
        this.solved = true;
    }
}
