const onLoadFunction = () => {
    change_heading();

}


function change_heading() {

    const width=screen.width;
    const h1element=document.getElementById("mainName")

    if(width<380){
        h1element.innerHTML="<p>Yashasvi</p><p> Mantha</p>"
    }

}


