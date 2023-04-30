const firstLine = [
  {
    keyCode: 192,
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
    keyCode: 49,
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
    keyCode: 50,
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
    keyCode: 51,
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
    keyCode: 52,
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
    keyCode: 53,
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
    keyCode: 54,
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
    keyCode: 55,
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
    keyCode: 56,
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
    keyCode: 57,
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
    keyCode: 48,
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
    keyCode: 189,
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
    keyCode: 187,
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
    keyCode: 8,
    code: 'backspace',
    system: true,
    label: {
      en: 'BACKSPACE',
      ru: 'BACKSPACE',
    },
    shiftLabel: {
      en: 'BACKSPACE',
      ru: 'BACKSPACE',
    },
  },
];
const secondLine = [
  {
    keyCode: 9,
    code: 'tab',
    system: true,
    label: {
      en: 'TAB',
      ru: 'TAB',
    },
    shiftLabel: {
      en: 'TAB',
      ru: 'TAB',
    },
  },
  {
    keyCode: 81,
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
    keyCode: 87,
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
    keyCode: 69,
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
    keyCode: 82,
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
    keyCode: 84,
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
    keyCode: 89,
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
    keyCode: 85,
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
    keyCode: 73,
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
    keyCode: 79,
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
    keyCode: 80,
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
    keyCode: 219,
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
    keyCode: 221,
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
    keyCode: 220,
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
];
const thirdLine = [
  {
    keyCode: 20,
    code: 'capsLock',
    system: true,
    label: {
      en: 'CAPS LOCK',
      ru: 'CAPS LOCK',
    },
    shiftLabel: {
      en: 'CAPS LOCK',
      ru: 'CAPS LOCK',
    },
  },
  {
    keyCode: 65,
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
    keyCode: 83,
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
    keyCode: 68,
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
    keyCode: 70,
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
    keyCode: 71,
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
    keyCode: 72,
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
    keyCode: 74,
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
    keyCode: 75,
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
    keyCode: 76,
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
    keyCode: 186,
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
    keyCode: 222,
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
    keyCode: 13,
    code: 'enter',
    system: true,
    label: {
      en: 'ENTER',
      ru: 'ENTER',
    },
    shiftLabel: {
      en: 'ENTER',
      ru: 'ENTER',
    },
  },
];
const forthLine = [
  {
    keyCode: 16,
    code: 'shiftLeft',
    system: true,
    label: {
      en: 'SHIFT',
      ru: 'SHIFT',
    },
    shiftLabel: {
      en: 'SHIFT',
      ru: 'SHIFT',
    },
  },
  {
    keyCode: 90,
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
    keyCode: 88,
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
    keyCode: 67,
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
    keyCode: 86,
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
    keyCode: 66,
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
    keyCode: 78,
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
    keyCode: 77,
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
    keyCode: 188,
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
    keyCode: 190,
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
    keyCode: 191,
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
    keyCode: 16,
    code: 'shiftRight',
    system: true,
    label: {
      en: 'SHIFT',
      ru: 'SHIFT',
    },
    shiftLabel: {
      en: 'SHIFT',
      ru: 'SHIFT',
    },
  },
];
const fifthLine = [
  {
    keyCode: 17,
    code: 'controlLeft',
    system: true,
    label: {
      en: 'CTRL',
      ru: 'CTRL',
    },
    shiftLabel: {
      en: 'CTRL',
      ru: 'CTRL',
    },
  },
  {
    keyCode: 91,
    code: 'metaLeft',
    system: true,
    label: {
      en: 'WIN',
      ru: 'WIN',
    },
    shiftLabel: {
      en: 'WIN',
      ru: 'WIN',
    },
  },
  {
    keyCode: 18,
    code: 'altLeft',
    system: true,
    label: {
      en: 'ALT',
      ru: 'ALT',
    },
    shiftLabel: {
      en: 'ALT',
      ru: 'ALT',
    },
  },
  {
    keyCode: 32,
    code: 'space',
    system: false,
    label: {
      en: '',
      ru: '',
    },
    shiftLabel: {
      en: '',
      ru: '',
    },
  },
  {
    keyCode: 18,
    code: 'altRight',
    system: true,
    label: {
      en: 'ALT',
      ru: 'ALT',
    },
    shiftLabel: {
      en: 'ALT',
      ru: 'ALT',
    },
  },
  {
    keyCode: 17,
    code: 'controlRight',
    system: true,
    label: {
      en: 'CTRL',
      ru: 'CTRL',
    },
    shiftLabel: {
      en: 'CTRL',
      ru: 'CTRL',
    },
  },
  {
    keyCode: 37,
    code: 'arrowLeft',
    system: false,
    label: {
      en: '←',
      ru: '←',
    },
    shiftLabel: {
      en: '←',
      ru: '←',
    },
  },
  {
    keyCode: 38,
    code: 'arrowUp',
    system: false,
    label: {
      en: '↑',
      ru: '↑',
    },
    shiftLabel: {
      en: '↑',
      ru: '↑',
    },
  },
  {
    keyCode: 40,
    code: 'arrowDown',
    system: false,
    label: {
      en: '↓',
      ru: '↓',
    },
    shiftLabel: {
      en: '↓',
      ru: '↓',
    },
  },
  {
    keyCode: 39,
    code: 'arrowRight',
    system: false,
    label: {
      en: '→',
      ru: '→',
    },
    shiftLabel: {
      en: '→',
      ru: '→',
    },
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
