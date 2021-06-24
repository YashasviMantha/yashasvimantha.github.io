const head_line = () => {
  change_headline();
};

async function change_headline() {
  var elem = document.getElementById("head_line");
  var array = [
    "a chess enthusiast",
    "a ML Researcher",
    "an amateur writer",
    "a Madrasi",
    "an extrovert",
    "a pirate",
    "a Mumbaikar",
    "a chaat lover",
    "a data hoarder",
  ];
  var i = 0;
  while (true) {
    if (i == array.length) {
      i = 0;
    } else {
      elem.innerText = "I am " + array[i] + ".";
      i = i + 1;
      await new Promise((r) => setTimeout(r, 1000));
    }
  }
}
