const firstLine = [
  {
    keyCode: 192,
    code: 'backquote',
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

export const APP_TITLE = 'RSS Virtual Keyboard';
export const FOOTER = 'Virtual keyboard created for the MS Windows\nHotkey to change input language is "Alt+Shift"';
export const keyLayout = [
  firstLine,
  secondLine,
  thirdLine,
  forthLine,
  fifthLine,
];
