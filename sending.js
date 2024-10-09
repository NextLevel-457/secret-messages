function getUrlParameter(name) {
  name = name.replace(/[\[\]]/g, '\\$&');
  const regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)');
  const results = regex.exec(window.location.href);
  if (!results) return null;
  if (!results[2]) return '';
  return decodeURIComponent(results[2].replace(/\+/g, ' '));
}

const backendUrl = 'https://nextlevel457-secret-messages.glitch.me/';

const code = getUrlParameter("code")

function sendMessage() {
  fetch(`${backendUrl}/send-message`, {
    method: 'POST',
    body: {
      'user': code,
      'message': document.getElementById('input').value,
    },
  });
}
