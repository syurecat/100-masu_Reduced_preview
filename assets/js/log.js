const gasURL = 'https://script.google.com/macros/s/AKfycbxNMugKJ_Itx0_Clp63EsM8NSd9ExpGXlpGLJqExlDmTEuZEL5Ed-VubKtZV8SEo7ExUw/exec';
const promise = fetch('https://icanhazip.com');
const userIp = promise.txt();
console.log(promise);
const userAgent = navigator.userAgent;
console.log(userAgent);
const userData = {
    "ipaddress": userIp,
    "agent": userAgent
};
doPost(gasURL, userData);