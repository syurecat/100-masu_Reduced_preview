const gasURL = 'https://script.google.com/macros/s/AKfycbxNMugKJ_Itx0_Clp63EsM8NSd9ExpGXlpGLJqExlDmTEuZEL5Ed-VubKtZV8SEo7ExUw/exec';
const fetchIpAddress = async() => {
    return await fetch('https://ipinfo.io?callback')
    .then(response => response.json())
    .then(json => json.ip);
}
console.log(fetchIpAddress);
const userAgent = navigator.userAgent;
console.log(userAgent);
