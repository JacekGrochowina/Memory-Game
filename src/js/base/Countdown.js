import { PROGRESS_BAR } from '../data/elements';
import { game } from './Game';

class Countdown {
    constructor() {
        this.interval = null;
    }

    init(time) {
        let step = 100 / time;
        let i = 100;

        this.interval = setInterval(() => {
            i = i - step;

            if(i <= 0) {
                setTimeout(() => {
                    game.finishGame(false);
                }, 1000)
                PROGRESS_BAR.style.width = '0%';
                clearInterval(this.interval);
            };
            
            PROGRESS_BAR.style.width = `${i}%`;
        }, 1000);
    }

    stop() {
        clearInterval(this.interval);
    }

    reset() {
        this.interval = null;
        PROGRESS_BAR.style.width = '100%';
    }
}

export const countdown = new Countdown();
