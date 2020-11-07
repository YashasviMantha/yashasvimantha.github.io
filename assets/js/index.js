const onLoadFunction = () => {
    change_heading();
    alert("Hi! Thanks for visiting. The site is still under active development so feedback would be highly appreciated. Now click on OK and hop in!");
}

function change_heading() {

    const width=screen.width;
    const h1element=document.getElementById("mainName")

    if(width<380){
        h1element.innerHTML="<p>Yashasvi</p><p> Mantha</p>"
    }

}


