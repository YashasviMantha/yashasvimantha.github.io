const head_line = () => {
    change_headline();
}


async function change_headline() {
    var elem = document.getElementById("head_line");
    var array = ["a chess Player", "a ML Researcher", "an amature writer", "a nerd", "an extrovert","a pirate","a prankster","a Mumbaikar","a chaat lover"];
    var i = 0;
    while(true)
    {
        if(i == array.length)
        {
            i = 0;   
        }
        else
        {
            elem.innerText = "I am " + array[i]+".";
            i = i + 1;
            await new Promise(r => setTimeout(r, 1000));
        }
    }

}