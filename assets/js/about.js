const head_line = () => {
  change_headline();
};

async function change_headline() {
  var elem = document.getElementById("head_line");
  var array = [
    "a Data Scientist",
    "a ML Researcher",
    "an amateur writer",
    "a pirate",
    "a self-learning phytologist",
    "a data hoarder",
    "an AOE4 enjoyer"
  ];
  var i = 0;
  while (true) {
    if (i == array.length) {
      i = 0;
    } else {
      elem.innerText = "I am " + array[i] + ".";
      i = i + 1;
      await new Promise((r) => setTimeout(r, 1500));
    }
  }
}
