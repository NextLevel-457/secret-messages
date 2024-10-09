function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

function createAccount() {
  const username = document.getElementById("input").value + getRandomInt(99999).toString();
  document.getElementById("link1").innerHTML = "Share this link with your friends so that they can send you secret messages: https://nextlevel-457.github.io/secret-messages/" + username;
  document.getElementById("link2").innerHTML = "Use this link to see your secret messages: https://nextlevel-457.github.io/secret-messages/read.html?code=" + username;
  document.getElementById("tip").innerHTML = "It's worth bookmarking this so that you can come back to it later!"
}
