import { 
    TABS_THEME
} from '../data/elements';
import { settings } from './Settings';

class TabsTheme {
    constructor(elementsArray) {
        this.elements = elementsArray;

        // active
        let active = 0;
        this.getActive = () => active;
        this.setActive = (value) => (active = value);
    }

    init() {
        this._setActiveTab();
        this._handlerOnClick();
    }

    _setActiveTab() {
        const active = this.getActive();

        this.elements.forEach((item) => {
            item.classList.remove('active');
            item.setAttribute('data-selected', false);
        });

        this.elements[active].classList.add('active');
        this.elements[active].setAttribute('data-selected', true);

        settings.setTheme(this.elements[active].getAttribute('data-theme-name'));
    }

    _handlerOnClick() {
        this.elements.forEach((item, number) => item.addEventListener('click', () => {
            this.setActive(number);
            this._setActiveTab();
        }));
    }
}

export const tabsTheme = new TabsTheme(TABS_THEME);
