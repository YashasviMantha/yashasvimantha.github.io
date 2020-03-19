let onLoadFunction = () => {
    myMove();
  }

  function myMove() {
    
    var element = document.getElementById("movetxt");
    element.style.marginTop = screen.height - 160;  
    var pos = screen.height - 160;
    // var pos = screen.height;
    // console.log(pos);
    var id = setInterval(frame, 1);
    function frame() {
      // console.log(pos)
      
      pos -= 0.5;
      element.style.top = `${pos}px`;
      if (pos === -element.clientHeight) {
        // console.log(">>>>")
        pos = element.clientHeight;

        // pos = `${parseInt(pos) + parseInt(element.clientHeight)}`;
      }
    }
  }