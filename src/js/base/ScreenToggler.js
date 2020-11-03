import { getElement, POPUP_LOSE, POPUP_WIN } from '../data/elements';

const SCREEN_SETTINGS = 'SETTINGS';
const SCREEN_GAME = 'GAME';

export class ScreenToggler {
    constructor() {
        this._showScreen = (screen) => {
            const SETTINGS = getElement('#js-settings-screen');
            const GAME = getElement('#js-game-screen');

            switch(screen) {
                case 'SETTINGS':
                    SETTINGS.classList.remove('hidden');
                    GAME.classList.add('hidden');
                    break;
                case 'GAME':
                    SETTINGS.classList.add('hidden');
                    GAME.classList.remove('hidden');
                    break;
            }
        }

        this.showScreen = {
            settings: () => this._showScreen(SCREEN_SETTINGS),
            game: () => this._showScreen(SCREEN_GAME),
        }

        this._showPopupWin = () => {
            POPUP_WIN.classList.add('visible');

            setTimeout(() => {
                POPUP_WIN.classList.remove('visible');
            }, 2000);
        }

        this._showPopupLose = () => {
            POPUP_LOSE.classList.add('visible');

            setTimeout(() => {
                POPUP_LOSE.classList.remove('visible');
            }, 2000);
        }

        this.showPopup = {
            win: () => this._showPopupWin(),
            lose: () => this._showPopupLose(),
        }
    }
}