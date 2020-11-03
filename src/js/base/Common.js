import { ScreenToggler } from './ScreenToggler';

export class Common extends ScreenToggler {
    constructor() {
        super();
    }

    injectToDOM(elementDOM, textContent) {
        elementDOM.textContent = textContent;
    }

    saveLocalStorage(name, value) {
        if (typeof name === 'string') {
            localStorage[name] = JSON.stringify(value);
        } else {
            throw new Error(
                `Property "name" expected be typeof string: ${name} is ${typeof name}`,
            );
        }
    }

    readLocalStorage(name) {
        if (typeof name === 'string') {
            let stored = localStorage[name];
            if (stored) return JSON.parse(stored);
        } else {
            throw new Error(
                `Property "name" expected be typeof string: ${name} is ${typeof name}`,
            );
        }
    }

    logLocalStorage() {
        console.log(localStorage);
    }

    clearLocalStorage() {
        window.localStorage.clear();
    }
}