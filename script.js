function setYear() {
  const yearNode = document.getElementById("year");
  if (!yearNode) {
    return;
  }

  yearNode.textContent = `Cryogenic Boom © ${new Date().getFullYear()}`;
}

setYear();