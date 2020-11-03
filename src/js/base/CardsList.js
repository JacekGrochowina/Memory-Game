class CardsList {
    constructor(content = []) {
        this.content = content;
    }

    shuffle() {
        const content = this.content;
        for (let i = content.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [content[i], content[j]] = [content[j], content[i]];
        }
        this.content = content;
    }

    push(item) {
        this.content.push(item);
    }

    hideAll(time) {
        setTimeout(() => {
            this.content.forEach((item) => item.element.classList.add('hidden'));
        }, time);
    }

    log() {
        console.log(this.content);
    }
}

export const cardsList = new CardsList();
