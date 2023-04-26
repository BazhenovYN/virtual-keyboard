import './normalize.css';
import './style.scss';
import { APP_TITLE, keyLayout } from './const';

class Keyboard {
  constructor() {
    this.elements = {
      main: null,
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

    this.elements.main.appendChild(title);
    this.elements.main.appendChild(textArea);
    this.elements.main.appendChild(this.elements.keysContainer);
    document.body.appendChild(this.elements.main);
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

        switch (key.code) {
          case 'backspace':
            keyElement.textContent = key.label[this.properties.language];
            break;
          case 'capsLock':
            keyElement.textContent = key.label[this.properties.language];
            keyElement.appendChild(light);
            break;
          default:
            keyElement.textContent = key.label[this.properties.language];
            keyElement.addEventListener('click', () => {
              this.properties.value += this.properties.capsLock
                ? key.label[this.properties.language].toUpperCase()
                : key.label[this.properties.language];
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
