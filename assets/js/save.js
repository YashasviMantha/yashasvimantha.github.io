function save_text() {}

document.addEventListener("DOMContentLoaded", function (event) {
  const savebtn = document.querySelector("#save_btn");

  savebtn.addEventListener("click", () => {
    toggleMessage(emojiBut);
    toggleMessage(messageBox);
    // console.log(messageBox.style.display);
    // console.log("emoji button pressed");
  });
});
