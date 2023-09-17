const worker = new Worker("worker.js");

const calculate = document.getElementById('calculate');
const changeBG = document.getElementById('change-bg');
const body = document.getElementsByTagName('body');

calculate.addEventListener('click', () => { 
    worker.postMessage("Please start the work...")
    //console.log(`The sum of total: ${total}`);
});

worker.onmessage = function(message) {
    console.log(`Total sum of those numbers: ${message.data}`);
}

changeBG.addEventListener('click', () => {
    if(document.body.style.background !== 'green') {
        document.body.style.background = 'green';
    } else {
        document.body.style.background = 'red';
    }
});
