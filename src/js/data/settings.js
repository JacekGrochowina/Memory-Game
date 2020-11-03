import { 
    INPUT_NUMBER_CARDS,
    INPUT_WATCH_TIME,
    INPUT_GAME_TIME,
    SETTINGS_DOM
} from './elements';

// ======== SETTINGS DIFFICULTY ========
export const DIFFICULTY_TYPES = {
    EASY: 'easy',
    MIDDLE: 'middle',
    HARD: 'hard',
    CUSTOM: 'custom'
}

export const DIFFICULTY = {
    EASY: {
        cardsNum: 6,
        watchTime: 1,
        gameTime: 20
    },
    MIDDLE: {
        cardsNum: 8,
        watchTime: 1,
        gameTime: 25
    },
    HARD: {
        cardsNum: 12,
        watchTime: 2,
        gameTime: 30
    },
    CUSTOM: {
        cardsNum: INPUT_NUMBER_CARDS.value,
        watchTime: INPUT_WATCH_TIME.value,
        gameTime: INPUT_GAME_TIME.value
    }
}

const updateCustom = () => {
    INPUT_NUMBER_CARDS.addEventListener('change', () => {
        DIFFICULTY.CUSTOM.cardsNum = INPUT_NUMBER_CARDS.value;
    });

    INPUT_WATCH_TIME.addEventListener('change', () => {
        DIFFICULTY.CUSTOM.watchTime = INPUT_WATCH_TIME.value;
    });

    INPUT_GAME_TIME.addEventListener('change', () => {
        DIFFICULTY.CUSTOM.gameTime = INPUT_GAME_TIME.value;
    });
}

const injectSettingsToDOM = () => {

    SETTINGS_DOM.EASY.cardsNum.textContent = DIFFICULTY.EASY.cardsNum;
    SETTINGS_DOM.EASY.watchTime.textContent = DIFFICULTY.EASY.watchTime;
    SETTINGS_DOM.EASY.gameTime.textContent = DIFFICULTY.EASY.gameTime;

    SETTINGS_DOM.MIDDLE.cardsNum.textContent = DIFFICULTY.MIDDLE.cardsNum;
    SETTINGS_DOM.MIDDLE.watchTime.textContent = DIFFICULTY.MIDDLE.watchTime;
    SETTINGS_DOM.MIDDLE.gameTime.textContent = DIFFICULTY.MIDDLE.gameTime;

    SETTINGS_DOM.HARD.cardsNum.textContent = DIFFICULTY.HARD.cardsNum;
    SETTINGS_DOM.HARD.watchTime.textContent = DIFFICULTY.HARD.watchTime;
    SETTINGS_DOM.HARD.gameTime.textContent = DIFFICULTY.HARD.gameTime;
}
// =====================================



// ======== SETTINGS THEME =============
const themePaths = (theme) => {
    const paths = [];
    for(let i = 1; i <= 12; i++) {
        paths.push(`./assets/theme/${theme}/image${i}.jpg`);
    }
    return paths;
};

export const THEME_TYPES = {
    FRONTEND: 'frontend',
    BACKEND: 'backend',
    CARS: 'cars',
    CITIES: 'cities',
    DOGS_FUNNY: 'dogsFunny',
    DOGS_CUTE: 'dogsCute',
    FOOTBALLERS: 'footballers',
    BILLIONAIRES: 'billionaires'
}

export const THEME = {
    FRONTEND: themePaths(THEME_TYPES.FRONTEND),
    BACKEND: themePaths(THEME_TYPES.BACKEND),
    CARS: themePaths(THEME_TYPES.CARS),
    CITIES: themePaths(THEME_TYPES.CITIES),
    DOGS_FUNNY: themePaths(THEME_TYPES.DOGS_FUNNY),
    DOGS_CUTE: themePaths(THEME_TYPES.DOGS_CUTE),
    FOOTBALLERS: themePaths(THEME_TYPES.FOOTBALLERS),
    BILLIONAIRES: themePaths(THEME_TYPES.BILLIONAIRES)
}
// =====================================



injectSettingsToDOM();
updateCustom();