const firstLine = [
  {
    code: 'backquote',
    system: false,
    label: {
      en: '`',
      ru: 'Ё',
    },
    shiftLabel: {
      en: '~',
      ru: 'Ё',
    },
  },
  {
    code: 'digit1',
    system: false,
    label: {
      en: '1',
      ru: '1',
    },
    shiftLabel: {
      en: '!',
      ru: '!',
    },
  },
  {
    code: 'digit2',
    system: false,
    label: {
      en: '2',
      ru: '2',
    },
    shiftLabel: {
      en: '@',
      ru: '"',
    },
  },
  {
    code: 'digit3',
    system: false,
    label: {
      en: '3',
      ru: '3',
    },
    shiftLabel: {
      en: '#',
      ru: '№',
    },
  },
  {
    code: 'digit4',
    system: false,
    label: {
      en: '4',
      ru: '4',
    },
    shiftLabel: {
      en: '$',
      ru: ';',
    },
  },
  {
    code: 'digit5',
    system: false,
    label: {
      en: '5',
      ru: '5',
    },
    shiftLabel: {
      en: '%',
      ru: '%',
    },
  },
  {
    code: 'digit6',
    system: false,
    label: {
      en: '6',
      ru: '6',
    },
    shiftLabel: {
      en: '^',
      ru: ':',
    },
  },
  {
    code: 'digit7',
    system: false,
    label: {
      en: '7',
      ru: '7',
    },
    shiftLabel: {
      en: '&',
      ru: '?',
    },
  },
  {
    code: 'digit8',
    system: false,
    label: {
      en: '8',
      ru: '8',
    },
    shiftLabel: {
      en: '*',
      ru: '*',
    },
  },
  {
    code: 'digit9',
    system: false,
    label: {
      en: '9',
      ru: '9',
    },
    shiftLabel: {
      en: '(',
      ru: '(',
    },
  },
  {
    code: 'digit0',
    system: false,
    label: {
      en: '0',
      ru: '0',
    },
    shiftLabel: {
      en: ')',
      ru: ')',
    },
  },
  {
    code: 'minus',
    system: false,
    label: {
      en: '-',
      ru: '-',
    },
    shiftLabel: {
      en: '_',
      ru: '_',
    },
  },
  {
    code: 'equal',
    system: false,
    label: {
      en: '=',
      ru: '=',
    },
    shiftLabel: {
      en: '+',
      ru: '+',
    },
  },
  {
    code: 'backspace',
    system: true,
    label: 'BACKSPACE',
  },
];
const secondLine = [
  {
    code: 'tab',
    system: true,
    label: 'TAB',
  },
  {
    code: 'KeyQ',
    system: false,
    label: {
      en: 'Q',
      ru: 'Й',
    },
    shiftLabel: {
      en: 'Q',
      ru: 'Й',
    },
  },
  {
    code: 'keyW',
    system: false,
    label: {
      en: 'W',
      ru: 'Ц',
    },
    shiftLabel: {
      en: 'W',
      ru: 'Ц',
    },
  },
  {
    code: 'keyE',
    system: false,
    label: {
      en: 'E',
      ru: 'У',
    },
    shiftLabel: {
      en: 'E',
      ru: 'У',
    },
  },
  {
    code: 'keyR',
    system: false,
    label: {
      en: 'R',
      ru: 'К',
    },
    shiftLabel: {
      en: 'R',
      ru: 'К',
    },
  },
  {
    code: 'keyT',
    system: false,
    label: {
      en: 'T',
      ru: 'Е',
    },
    shiftLabel: {
      en: 'T',
      ru: 'Е',
    },
  },
  {
    code: 'keyY',
    system: false,
    label: {
      en: 'Y',
      ru: 'Н',
    },
    shiftLabel: {
      en: 'Y',
      ru: 'Н',
    },
  },
  {
    code: 'keyU',
    system: false,
    label: {
      en: 'U',
      ru: 'Г',
    },
    shiftLabel: {
      en: 'U',
      ru: 'Г',
    },
  },
  {
    code: 'keyI',
    system: false,
    label: {
      en: 'I',
      ru: 'Ш',
    },
    shiftLabel: {
      en: 'I',
      ru: 'Ш',
    },
  },
  {
    code: 'keyO',
    system: false,
    label: {
      en: 'O',
      ru: 'Щ',
    },
    shiftLabel: {
      en: 'O',
      ru: 'Щ',
    },
  },
  {
    code: 'keyP',
    system: false,
    label: {
      en: 'P',
      ru: 'З',
    },
    shiftLabel: {
      en: 'P',
      ru: 'З',
    },
  },
  {
    code: 'bracketLeft',
    system: false,
    label: {
      en: '[',
      ru: 'Х',
    },
    shiftLabel: {
      en: '{',
      ru: 'Х',
    },
  },
  {
    code: 'bracketRight',
    system: false,
    label: {
      en: ']',
      ru: 'Ъ',
    },
    shiftLabel: {
      en: '}',
      ru: 'Ъ',
    },
  },
  {
    code: 'backslash',
    system: false,
    label: {
      en: '\\',
      ru: '\\',
    },
    shiftLabel: {
      en: '|',
      ru: '/',
    },
  },
  {
    code: 'delete',
    system: true,
    label: 'DEL',
  },
];
const thirdLine = [
  {
    code: 'capsLock',
    system: true,
    label: 'CAPS LOCK',
  },
  {
    code: 'keyA',
    system: false,
    label: {
      en: 'A',
      ru: 'Ф',
    },
    shiftLabel: {
      en: 'A',
      ru: 'Ф',
    },
  },
  {
    code: 'keyS',
    system: false,
    label: {
      en: 'S',
      ru: 'Ы',
    },
    shiftLabel: {
      en: 'S',
      ru: 'Ы',
    },
  },
  {
    code: 'keyD',
    system: false,
    label: {
      en: 'D',
      ru: 'В',
    },
    shiftLabel: {
      en: 'D',
      ru: 'В',
    },
  },
  {
    code: 'keyF',
    system: false,
    label: {
      en: 'F',
      ru: 'А',
    },
    shiftLabel: {
      en: 'F',
      ru: 'А',
    },
  },
  {
    code: 'keyG',
    system: false,
    label: {
      en: 'G',
      ru: 'П',
    },
    shiftLabel: {
      en: 'G',
      ru: 'П',
    },
  },
  {
    code: 'keyH',
    system: false,
    label: {
      en: 'H',
      ru: 'Р',
    },
    shiftLabel: {
      en: 'H',
      ru: 'Р',
    },
  },
  {
    code: 'keyJ',
    system: false,
    label: {
      en: 'J',
      ru: 'О',
    },
    shiftLabel: {
      en: 'J',
      ru: 'О',
    },
  },
  {
    code: 'keyK',
    system: false,
    label: {
      en: 'K',
      ru: 'Л',
    },
    shiftLabel: {
      en: 'K',
      ru: 'Л',
    },
  },
  {
    code: 'keyL',
    system: false,
    label: {
      en: 'L',
      ru: 'Д',
    },
    shiftLabel: {
      en: 'L',
      ru: 'Д',
    },
  },
  {
    code: 'semicolon',
    system: false,
    label: {
      en: ';',
      ru: 'Ж',
    },
    shiftLabel: {
      en: ':',
      ru: 'Ж',
    },
  },
  {
    code: 'quote',
    system: false,
    label: {
      en: '\'',
      ru: 'Э',
    },
    shiftLabel: {
      en: '"',
      ru: 'Э',
    },
  },
  {
    code: 'enter',
    system: true,
    label: 'ENTER',
  },
];
const forthLine = [
  {
    code: 'shiftLeft',
    system: true,
    label: 'SHIFT',
  },
  {
    code: 'keyZ',
    system: false,
    label: {
      en: 'Z',
      ru: 'Я',
    },
    shiftLabel: {
      en: 'Z',
      ru: 'Я',
    },
  },
  {
    code: 'keyX',
    system: false,
    label: {
      en: 'X',
      ru: 'Ч',
    },
    shiftLabel: {
      en: 'X',
      ru: 'Ч',
    },
  },
  {
    code: 'keyC',
    system: false,
    label: {
      en: 'C',
      ru: 'С',
    },
    shiftLabel: {
      en: 'C',
      ru: 'С',
    },
  },
  {
    code: 'keyV',
    system: false,
    label: {
      en: 'V',
      ru: 'М',
    },
    shiftLabel: {
      en: 'V',
      ru: 'М',
    },
  },
  {
    code: 'keyB',
    system: false,
    label: {
      en: 'B',
      ru: 'И',
    },
    shiftLabel: {
      en: 'B',
      ru: 'И',
    },
  },
  {
    code: 'keyN',
    system: false,
    label: {
      en: 'N',
      ru: 'Т',
    },
    shiftLabel: {
      en: 'N',
      ru: 'Т',
    },
  },
  {
    code: 'keyM',
    system: false,
    label: {
      en: 'M',
      ru: 'Ь',
    },
    shiftLabel: {
      en: 'M',
      ru: 'Ь',
    },
  },
  {
    code: 'comma',
    system: false,
    label: {
      en: ',',
      ru: 'Б',
    },
    shiftLabel: {
      en: '<',
      ru: 'Б',
    },
  },
  {
    code: 'period',
    system: false,
    label: {
      en: '.',
      ru: 'Ю',
    },
    shiftLabel: {
      en: '>',
      ru: 'Ю',
    },
  },
  {
    code: 'slash',
    system: false,
    label: {
      en: '/',
      ru: '.',
    },
    shiftLabel: {
      en: '?',
      ru: ',',
    },
  },
  {
    code: 'shiftRight',
    system: true,
    label: 'SHIFT',
  },
];
const fifthLine = [
  {
    code: 'controlLeft',
    system: true,
    label: 'CTRL',
  },
  {
    code: 'metaLeft',
    system: true,
    label: 'WIN',
  },
  {
    code: 'altLeft',
    system: true,
    label: 'ALT',
  },
  {
    code: 'space',
    system: true,
    label: '',
  },
  {
    code: 'altRight',
    system: true,
    label: 'ALT',
  },
  {
    code: 'controlRight',
    system: true,
    label: 'CTRL',
  },
  {
    code: 'arrowLeft',
    system: true,
    label: '←',
  },
  {
    code: 'arrowUp',
    system: true,
    label: '↑',
  },
  {
    code: 'arrowDown',
    system: true,
    label: '↓',
  },
  {
    code: 'arrowRight',
    system: true,
    label: '→',
  },
];

export const EN = 'en';
export const RU = 'ru';
export const APP_TITLE = 'RSS Virtual Keyboard';
export const FOOTER = 'Virtual keyboard created for the MS Windows\nHotkey to change input language is "Ctrl+Alt"';
export const keyLayout = [
  firstLine,
  secondLine,
  thirdLine,
  forthLine,
  fifthLine,
];
