onmessage = function (message){
    console.log(message.data);
    console.log("Start working...");
    let total = 0;
    for(let i = 0; i < 10000000000; i++) {
        total += i;
    }
    postMessage(total);
}