let messages = []
function arrayToList(array) {
    array.forEach(item => {
        const l = document.createElement("label");
        const block = document.createElement("button");
        const ip = item.ip;
        block.setAttribute("onclick","blockUser(" + ip + ");")
        messages.push(item)
        l.innerHTML = item.message;
        block.innerHTML = "Block Sender";
        document.getElementById("message section").appendChild(l);
        document.getElementById("message section").appendChild(block);
    });
}

function blockUser(ip) {
}

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

async function getMessages() {
    const user = {
        'user': code
    }
    const response = await fetch(`${backendUrl}/get-messages`,{
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(user),
    });
    const data = await response.json();
    arrayToList(data.messages)
}

window.onload = getMessages;
