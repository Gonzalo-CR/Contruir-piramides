function buildPyramid() {
  const character = document.getElementById("character").value;
  const count = parseInt(document.getElementById("count").value);
  const rows = [];

  for (let i = 0; i < count; i++) {
    rows.push(character.repeat(i));
  }

  let result = "";

  for (const row of rows) {
    result += row + "<br>";
  }

  document.getElementById("pyramid").innerHTML = result;
}
