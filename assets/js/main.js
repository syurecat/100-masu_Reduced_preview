function start() {
    var quiz_x = generate_random_quiz();
    var quiz_y = generate_random_quiz();

    quiz_x.forEach((item, index) => {
        const cellId = `quiz_x${String(index + 1).padStart(2, '0')}`
        const cell = document.getElementById(cellId);
        if (cell) cell.textContent = item;
    });
    quiz_y.forEach((item, index) => {
        const cellId = `quiz_y${String(index + 1).padStart(2, '0')}`
        const cell = document.getElementById(cellId);
        if (cell) cell.textContent = item;
    });

    document.getElementById("bn_start").innerText = "Enter";
    document.getElementById("bn_start").onclick = check()
}

function check() {

}

function generate_random_quiz() {
    let ql = [0,1,2,3,4,5,6,7,8,9];
    let a = ql.length;
    while (a) {
        let j = Math.floor( Math.random() * a );
        let t = ql[--a];
        ql[a] = ql[j];
        ql[j] = t;
    }
    return ql
}

function doPost(url, data) {
    let xhr = new XMLHttpRequest();
    xhr.open("POST", url);
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.onload = () => {
        console.log("POST success!");
    };
    xhr.onerror = () => {
        console.log("POST error! status:" + xhr.status);
    };
    xhr.send(data);
}