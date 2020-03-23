const onLoadFunction = () => {
    change_headline();
}


async function change_headline() {
    var elem = document.getElementById("head_line");
    var array = ["Chess Player", "ML Researcher", "Amature Writer", "Nerd", "Extrovert","Pirate","Prankster","Mumbaikar","Chaat Lover"];
    var i = 0;
    while(true)
    {
        if(i == array.length)
        {
            i = 0;   
        }
        else
        {
            elem.innerText = array[i].toUpperCase();
            i = i + 1;
            await new Promise(r => setTimeout(r, 1000));
        }
    }

}
