function redirect() {
 window.location.href = 'https://wxsocial.app/';
}
window.addEventListener('DOMContentLoaded', () => {
  const url = window.location.href;

    if (url.includes('https://wxsocial.app/') == false) {
 redirect();
}
  });
