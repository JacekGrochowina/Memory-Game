export const getElement = (selector) => document.querySelector(selector);
export const getElements = (selector) => document.querySelectorAll(selector);

export const TABS_DIFFICULTY = getElement('#js-difficulty-tabs');
export const TABS_THEME = getElements('[data-theme]');
export const BTN_START_GAME = getElement('#js-start-game');

export const POPUP_WIN = getElement('#js-popup-win');
export const POPUP_LOSE = getElement('#js-popup-lose');

export const CARDS_GAME = getElement('#js-game-cards');
export const PROGRESS_BAR = getElement('#js-progress-bar');

export const INPUT_NUMBER_CARDS = getElement('#js-number-cards-input');
export const INPUT_WATCH_TIME = getElement('#js-watch-time-input');
export const INPUT_GAME_TIME = getElement('#js-game-time-input');

export const SETTINGS_DOM = {
    EASY: {
        cardsNum: getElement('#js-number-cards-easy'),
        watchTime: getElement('#js-watch-time-easy'),
        gameTime: getElement('#js-game-time-easy')
    },
    MIDDLE: {
        cardsNum: getElement('#js-number-cards-middle'),
        watchTime: getElement('#js-watch-time-middle'),
        gameTime: getElement('#js-game-time-middle')
    },
    HARD: {
        cardsNum: getElement('#js-number-cards-hard'),
        watchTime: getElement('#js-watch-time-hard'),
        gameTime: getElement('#js-game-time-hard')
    }
}