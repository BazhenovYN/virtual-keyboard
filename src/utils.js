export function getLanguage() {
  return localStorage.getItem('language');
}

export function setLanguage(language) {
  localStorage.setItem('language', language);
}
