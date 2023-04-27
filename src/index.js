import './normalize.css';
import './style.scss';
import { APP_TITLE, FOOTER, keyLayout } from './const';

class Keyboard {
  constructor() {
    this.elements = {
      main: null,
      textArea: null,
      keysContainer: null,
      keys: [],
    };
    this.properties = {
      value: '',
      capsLock: false,
      language: 'en',
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

    this.elements.keys = this.elements.keysContainer.querySelectorAll('.keyboard__key');

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
    });

    document.addEventListener('keyup', (event) => {
      const activeButton = document.querySelector(`#${event.code.toLowerCase()}`);
      if (activeButton) {
        activeButton.classList.remove('active');
      }
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
        keyElement.textContent = key.label[this.properties.language];

        switch (key.code) {
          case 'shiftLeft':
          case 'shiftRight':
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
            keyElement.appendChild(light);
            keyElement.addEventListener('click', () => {
              this.properties.capsLock = !this.properties.capsLock;
              keyElement.classList.toggle('capslock_on');
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
            keyElement.addEventListener('click', () => {
              this.elements.textArea.value += this.properties.capsLock
                ? key.label[this.properties.language].toUpperCase()
                : key.label[this.properties.language].toLowerCase();
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
