import { DIFFICULTY, DIFFICULTY_TYPES, THEME, THEME_TYPES } from '../data/settings';

class Settings {
    constructor() {
        this.difficulty = null;
        this.theme = null;
        this.cardsNum = null;
        this.watchTime = null;
        this.gameTime = null;
    }

    setDifficulty(difficulty) {
        this.difficulty = difficulty;

        const EASY_LVL = DIFFICULTY_TYPES.EASY;
        const MIDDLE_LVL = DIFFICULTY_TYPES.MIDDLE;
        const HARD_LVL = DIFFICULTY_TYPES.HARD;
        const CUSTOM_LVL = DIFFICULTY_TYPES.CUSTOM;

        const EASY = DIFFICULTY.EASY;
        const MIDDLE = DIFFICULTY.MIDDLE;
        const HARD = DIFFICULTY.HARD;
        const CUSTOM = DIFFICULTY.CUSTOM;

        switch(difficulty) {
            case EASY_LVL:
                this._setDifficulty(EASY);
                break;
            case MIDDLE_LVL:
                this._setDifficulty(MIDDLE);
                break;
            case HARD_LVL:
                this._setDifficulty(HARD);
                break;
            case CUSTOM_LVL:
                this._setDifficulty(CUSTOM);
                break;
        }
    }

    getDifficulty() {
        return {
            difficulty: this.difficulty,
            cardsNum: this.cardsNum,
            watchTime: this.watchTime,
            gameTime: this.gameTime,
        }
    }

    setTheme(theme) {
        const FRONTEND_THEME = THEME_TYPES.FRONTEND;
        const BACKEND_THEME = THEME_TYPES.BACKEND;
        const CARS_THEME = THEME_TYPES.CARS;
        const CITIES_THEME = THEME_TYPES.CITIES;
        const DOGS_FUNNY_THEME = THEME_TYPES.DOGS_FUNNY;
        const DOGS_CUTE_THEME = THEME_TYPES.DOGS_CUTE;
        const FOOTBALLERS_THEME = THEME_TYPES.FOOTBALLERS;
        const BILLIONAIRES_THEME = THEME_TYPES.BILLIONAIRES;

        const FRONTEND = THEME.FRONTEND;
        const BACKEND = THEME.BACKEND;
        const CARS = THEME.CARS;
        const CITIES = THEME.CITIES;
        const DOGS_FUNNY = THEME.DOGS_FUNNY;
        const DOGS_CUTE = THEME.DOGS_CUTE;
        const FOOTBALLERS = THEME.FOOTBALLERS;
        const BILLIONAIRES = THEME.BILLIONAIRES;

        switch(theme) {
            case FRONTEND_THEME:
                this._setTheme(FRONTEND);
                break;
            case BACKEND_THEME:
                this._setTheme(BACKEND);
                break;
            case CARS_THEME:
                this._setTheme(CARS);
                break;
            case CITIES_THEME:
                this._setTheme(CITIES);
                break;
            case DOGS_FUNNY_THEME:
                this._setTheme(DOGS_FUNNY);
                break;
            case DOGS_CUTE_THEME:
                this._setTheme(DOGS_CUTE);
                break;
            case FOOTBALLERS_THEME:
                this._setTheme(FOOTBALLERS);
                break;
            case BILLIONAIRES_THEME:
                this._setTheme(BILLIONAIRES);
                break;
        }
    }

    getTheme() {
        return this.theme;
    }

    _setTheme(theme) {
        this.theme = theme;
    }

    _setDifficulty(level) {
        this.cardsNum = level.cardsNum;
        this.watchTime = level.watchTime;
        this.gameTime = level.gameTime;
    }
}

export const settings = new Settings();