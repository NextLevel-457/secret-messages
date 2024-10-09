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
  const data = {
      'user': code,
      'message': document.getElementById('input').value,
    };
  fetch(`${backendUrl}/send-message`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });
  document.getElementById('sent').innerHTML = "Sent!";
}

function setup() {
  document.getElementById('to').innerHTML = "Send a secret message to " + code + "!";
}
window.onload = setup;
