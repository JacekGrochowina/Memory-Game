import { Common } from './Common';
import { Card } from './Card';
import { cardsList } from './CardsList';
import { tabsDifficulty } from './TabsDifficulty';
import { tabsTheme } from './TabsTheme';
import { countdown } from './Countdown';
import { CARDS_GAME } from '../data/elements';

class Game extends Common {
    constructor() {
        super();

        this.settings = {
            cardsNum: null,
            watchTime: null,
            gameTime: null
        }

        this.solved = [];
        this.guessed = [];
    }

    init() {
        tabsDifficulty.init();
        tabsTheme.init();
    }

    start(selectDifficulty, selectTheme) {
        const settings = this.settings;
        settings.cardsNum = selectDifficulty.cardsNum;
        settings.watchTime = selectDifficulty.watchTime;
        settings.gameTime = selectDifficulty.gameTime;

        const watchTime = selectDifficulty.watchTime * 1000;

        this.showScreen.game();

        for(let i = 0; i < selectDifficulty.cardsNum; i++) {
            const cardOne = new Card(selectTheme[i], i);
            const cardTwo = new Card(selectTheme[i], i);

            cardOne.render();
            cardTwo.render();

            setTimeout(() => {
                cardOne.element.addEventListener('click', () => {
                    this._handleClick(cardOne);
                });
    
                cardTwo.element.addEventListener('click', () => {
                    this._handleClick(cardTwo);
                });
            }, watchTime);

            cardsList.push(cardOne);
            cardsList.push(cardTwo);
        }

        cardsList.shuffle();
        cardsList.hideAll(watchTime);
        cardsList.content.forEach((card) => CARDS_GAME.appendChild(card.element));

        setTimeout(() => {
            countdown.init(this.settings.gameTime);
        }, watchTime);
    }

    _handleClick(card) {
        if(card.solved) return;

        card.show();
        this.guessed.push(card);

        if(this.guessed.length === 2) {
            const cardOne = this.guessed[0];
            const cardTwo = this.guessed[1];

            const isPair = this._isPair(cardOne, cardTwo);

            if(isPair) {
                cardOne.solved = true;
                cardTwo.solved = true;

                this.solved.push(cardOne);
                this.solved.push(cardTwo);
            } else {
                setTimeout(() => {
                    cardOne.hide();
                    cardTwo.hide();
                }, 500);
            }
            this.guessed = [];
        }

        if(this._isWin()) {
            setTimeout(() => {
                game.finishGame(true);
            }, 500);
        }
    }

    _isPair(cardOne, cardTwo) {
        if(cardOne.pairID === cardTwo.pairID && cardOne.element != cardTwo.element) {
            return true
        }
        return false;
    }

    _isWin() {
        return this.solved.length === this.settings.cardsNum * 2;
    }

    finishGame(result) {
        countdown.stop();
        countdown.reset();

        this._reset();
        this.showScreen.settings();

        switch(result) {
            case true:
                this.showPopup.win();
                break;
            case false:
                this.showPopup.lose();
                break;
        }
    }

    _reset() {
        this.solved = [];
        this.guessed = [];
        cardsList.content = [];
        CARDS_GAME.innerHTML = null;
    }
}

export const game = new Game();
