function arrayToList(array) {
    const ul = document.createElement("ul");

    array.forEach(item => {
        const li = document.createElement("li");
        li.textContent = item;  // Set the text of the list item
        ul.appendChild(li);  // Append the list item to the unordered list
    });

    document.getElementById("list-container").appendChild(ul);
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

function getMessages() {
    
}
