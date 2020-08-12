function longTimeWork(workFine = true, errorMessage = "test") {
    return new Promise( (resolve, reject) => {
        setTimeout( () => {
            // resolve裡面放成功後傳入的值
            (workFine) ? resolve(201) : reject(errorMessage);
        }, 1000);
    })
}

function usingLongTimeWork() {
    longTimeWork(false, "test")  // try true/false
    .then(function (e) {
        console.log(e);
    })
    .catch(function (e) {
        console.log(e);
    })
}

usingLongTimeWork();
