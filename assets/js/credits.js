const onLoadFunction = () => {
  myMove();
}

function myMove() {
  const movetxt = document.getElementById("movetxt");
  const screenHeight = screen.height;

  let pos = screenHeight;
  let id = setInterval(() => {
    pos -= 0.5;
    movetxt.style.top = `${pos}px`;
    if (pos === -movetxt.clientHeight) {
      pos = screenHeight;
    }
  }, 1);
}