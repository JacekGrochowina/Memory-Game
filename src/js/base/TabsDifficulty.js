import { 
    TABS_DIFFICULTY,
    INPUT_NUMBER_CARDS,
    INPUT_WATCH_TIME,
    INPUT_GAME_TIME 
} from '../data/elements';
import { settings } from './Settings';

class TabsDifficulty {
    constructor(nodeElement) {
        // get nav
        this.nav = [...nodeElement.children[0].children];

        // get contents
        this.contents = [];
        [...nodeElement.children].forEach((item) => {
            if (item.classList.contains('tabs-content'))
                this.contents.push(item);
        });

        // active
        let active = 0;
        this.getActive = () => active;
        this.setActive = (value) => (active = value);
    }

    init() {
        this._setActiveTab();
        this._handlerOnClick();
        this._getDifficulty();
    }

    _setActiveTab() {
        const nav = this.nav;
        const contents = this.contents;

        const setActiveClass = (element) => {
            element.forEach((item) => item.classList.remove('active'));
            element.forEach((item) => item.setAttribute('data-selected', false));

            element[this.getActive()].classList.add('active');
            element[this.getActive()].setAttribute('data-selected', true);
        };

        setActiveClass(nav);
        setActiveClass(contents);
    }

    _handlerOnClick() {
        const nav = this.nav;

        nav.forEach((item, number) =>
            item.addEventListener('click', () => {
                this.setActive(number);
                this._setActiveTab();

                this._getDifficulty();
            }),
        );
    }

    _getDifficulty() {
        const difficulty = this.nav[this.getActive()].getAttribute('data-difficulty');

        this._getCustomDifficulty(difficulty);
        settings.setDifficulty(difficulty);
    }

    _getCustomDifficulty(difficulty) {
        const inputs = [
            INPUT_NUMBER_CARDS, 
            INPUT_WATCH_TIME, 
            INPUT_GAME_TIME
        ];

        inputs.forEach((input) => input.addEventListener('change', () => {
            settings.setDifficulty(difficulty);
        }));
    }
}

export const tabsDifficulty = new TabsDifficulty(TABS_DIFFICULTY);
