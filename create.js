function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

function createAccount() {
  const username = document.getElementById("input").value + getRandomInt(99999).toString();
  document.getElementById("link1").innerHTML = "https//nextlevel-457.github.io/secret-messages/" + username;
  document.getElementById("link2").innerHTML = "https//nextlevel-457.github.io/secret-messages/read.html?code=" + username;
}
