let stats = {
  users: 120,
  requests: 300,
  errors: 2
};

function update() {
  stats.users += Math.floor(Math.random() * 5 - 2);
  stats.requests += Math.floor(Math.random() * 20);
  stats.errors += Math.random() < 0.1 ? 1 : 0;

  document.getElementById("users").innerText = Math.max(stats.users, 0);
  document.getElementById("requests").innerText = stats.requests;
  document.getElementById("errors").innerText = stats.errors;
}

function reset() {
  stats = { users: 0, requests: 0, errors: 0 };
  update();
}

setInterval(update, 2000);
update();
