function toggleMessage(obj) {
  console.log(obj.style.display);
  if (obj.style.display === "none") {
    obj.style.display = "block";
  } else {
    obj.style.display = "none";
  }
}

document.addEventListener("DOMContentLoaded", function (event) {
  const closeBtn = document.querySelector("#closeBtn");
  const messageBox = document.querySelector("#msgModal");
  const emojiBut = document.querySelector("#emoji-button");

  emojiBut.style.display = "block";
  messageBox.style.display = "none";
  console.log(emojiBut.style.display);

  // console.log(closeBtn);

  emojiBut.addEventListener("click", () => {
    toggleMessage(emojiBut);
    toggleMessage(messageBox);
    // console.log(messageBox.style.display);
    console.log("emoji button pressed");
  });

  closeBtn.addEventListener("click", () => {
    toggleMessage(messageBox);
    toggleMessage(emojiBut);
    console.log("cross pressed");
  });
});
