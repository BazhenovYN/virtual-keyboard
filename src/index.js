import './normalize.css';
import './style.scss';
import {
  EN, RU, APP_TITLE, FOOTER, keyLayout,
} from './const';
import { getLanguage, setLanguage } from './utils';

class Keyboard {
  constructor() {
    this.elements = {
      main: null,
      textArea: null,
      keysContainer: null,
      capsLock: null,
      shift: null,
    };
    this.properties = {
      value: '',
      capsLock: false,
      shift: false,
      availableLanguages: [EN, RU],
      language: getLanguage() || EN,
    };
  }

  init() {
    // Create main elements
    this.elements.main = document.createElement('div');
    this.elements.keysContainer = document.createElement('div');

    // Setup main elements
    this.elements.main.classList.add('keyboard');
    this.elements.keysContainer.classList.add('keyboard__keys');
    this.elements.keysContainer.appendChild(this.createKeys());

    // Add to DOM
    const title = document.createElement('h2');
    title.innerText = APP_TITLE;
    title.classList.add('title');

    const textArea = document.createElement('textarea');
    textArea.classList.add('text');
    this.elements.textArea = textArea;

    const footer = document.createElement('div');
    footer.classList.add('footer');
    footer.innerText = FOOTER;

    this.elements.main.appendChild(title);
    this.elements.main.appendChild(textArea);
    this.elements.main.appendChild(this.elements.keysContainer);
    this.elements.main.appendChild(footer);
    document.body.appendChild(this.elements.main);

    // Add Event Listeners
    document.addEventListener('keydown', (event) => {
      const activeButton = document.querySelector(`#${event.code.toLowerCase()}`);
      if (activeButton) {
        activeButton.classList.add('active');
      }
      if (event.code === 'CapsLock') {
        this.switchCapsLock();
      }
      if (event.code === 'ShiftLeft' || event.code === 'ShiftRight') {
        this.properties.shift = true;
        this.elements.shift = null;
        this.updateKeyLabels();
      }
    });

    document.addEventListener('keyup', (event) => {
      const activeButton = document.querySelector(`#${event.code.toLowerCase()}`);
      if (activeButton) {
        activeButton.classList.remove('active');
      }
      if (event.code === 'ShiftLeft' || event.code === 'ShiftRight') {
        this.properties.shift = false;
        this.updateKeyLabels();
      }
      if (
        (event.code === 'ControlLeft' && event.altKey)
        || (event.code === 'ControlRight' && event.altKey)
        || (event.code === 'AltLeft' && event.ctrlKey)
        || (event.code === 'AltRight' && event.ctrlKey)
      ) {
        this.switchLanguage();
      }
    });
  }

  getSymbol(key) {
    const value = this.properties.shift
      ? key.shiftLabel[this.properties.language]
      : key.label[this.properties.language];

    if (key.system) {
      return value;
    }

    const upperCase = this.properties.capsLock !== this.properties.shift;
    return upperCase ? value.toUpperCase() : value.toLowerCase();
  }

  switchCapsLock() {
    this.properties.capsLock = !this.properties.capsLock;
    this.elements.capsLock.classList.toggle('capslock_on');
    this.updateKeyLabels();
  }

  switchLanguage() {
    const currLanguage = this.properties.language;
    const index = this.properties.availableLanguages.indexOf(currLanguage);
    if (index < this.properties.availableLanguages.length - 1) {
      this.properties.language = this.properties.availableLanguages[index + 1];
    } else {
      [this.properties.language] = this.properties.availableLanguages;
    }
    this.updateKeyLabels();
    setLanguage(this.properties.language);
  }

  updateKeyLabels() {
    keyLayout.forEach((keyRow) => {
      keyRow.forEach((key) => {
        const keyElement = document.querySelector(`#${key.code.toLowerCase()}`);
        if (keyElement.childNodes[0]) {
          keyElement.childNodes[0].textContent = this.getSymbol(key);
        }
      });
    });
  }

  createKeys() {
    const fragment = document.createDocumentFragment();

    const light = document.createElement('span');
    light.classList.add('light');

    keyLayout.forEach((keyRow) => {
      const keyLine = document.createElement('div');
      keyLine.classList.add('keyboard__line');

      keyRow.forEach((key) => {
        const keyElement = document.createElement('button');
        keyElement.classList.add('keyboard__key');
        keyElement.id = key.code.toLowerCase();
        keyElement.textContent = this.getSymbol(key);

        switch (key.code) {
          case 'controlLeft':
          case 'controlRight':
          case 'altLeft':
          case 'altRight':
          case 'metaLeft':
            break;
          case 'tab':
            keyElement.addEventListener('click', () => {
              this.elements.textArea.value += '\t';
            });
            break;
          case 'backspace':
            keyElement.addEventListener('click', () => {
              this.elements.textArea.value = this.elements.textArea.value.slice(0, -1);
            });
            break;
          case 'capsLock':
            this.elements.capsLock = keyElement;
            keyElement.appendChild(light);
            keyElement.addEventListener('click', () => {
              this.switchCapsLock();
            });
            break;
          case 'shiftLeft':
          case 'shiftRight':
            keyElement.addEventListener('click', (event) => {
              if (this.properties.shift && !this.elements.shift) {
                return; // user shift key down
              }

              if (this.properties.shift) {
                this.elements.shift.classList.remove('active');
                this.elements.shift = null;
              } else {
                event.currentTarget.classList.add('active');
              }
              this.elements.shift = event.currentTarget;
              this.properties.shift = !this.properties.shift;
              this.updateKeyLabels();
            });
            break;
          case 'space':
            keyElement.addEventListener('click', () => {
              this.elements.textArea.value += ' ';
            });
            break;
          case 'enter':
            keyElement.addEventListener('click', () => {
              this.elements.textArea.value += '\n';
            });
            break;
          default:
            keyElement.addEventListener('click', (event) => {
              this.elements.textArea.value += this.getSymbol(key);
              if (!event.shiftKey && this.properties.shift) {
                this.properties.shift = false;
                this.elements.shift.classList.remove('active');
                this.updateKeyLabels();
              }
            });
            break;
        }

        keyLine.appendChild(keyElement);
      });

      fragment.appendChild(keyLine);
    });
    return fragment;
  }
}

const keyboard = new Keyboard();

window.addEventListener('DOMContentLoaded', () => {
  keyboard.init();
});
