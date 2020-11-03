import '../styles/index.scss';
import { game } from './base/Game';
import { settings } from './base/Settings';
import { BTN_START_GAME } from './data/elements';

window.onload = function () {
    game.init();

    BTN_START_GAME.addEventListener('click', () => {
        game.start(
            settings.getDifficulty(),
            settings.getTheme()
        );
    });
};
  