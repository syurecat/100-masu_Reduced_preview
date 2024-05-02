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