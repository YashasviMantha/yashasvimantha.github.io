const onLoadFunction = () => {
    change_headline();
}


async function change_headline() {
    var elem = document.getElementById("head_line");
    var array = ["Chess Player", "ML Researcher", "Amature Writer", "Nerd", "Extrovert","Pirate","Prankster"];

    setInterval(() => {
        // for (let i = 0; i < 5; i++) {
            elem.innerText = array[Math.floor(array.length * Math.random())];
    
    }, 1000);

}

const promiseReturningFunction = (element) => {
    return new Promise((resolve, reject) => {
        resolve(setTimeout(() => {
            return element;
        }), 200)
    })

}