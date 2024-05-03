const gasURL = 'https://script.google.com/macros/s/AKfycbxNMugKJ_Itx0_Clp63EsM8NSd9ExpGXlpGLJqExlDmTEuZEL5Ed-VubKtZV8SEo7ExUw/exec';
const fetchIpAddress = await fetch('https://domains.google.com/checkip')
const userIp = await fetchIpAddress.json()
console.log(userIp);
const userAgent = navigator.userAgent;
console.log(userAgent);
const userData = {
    "ipaddress": userIp,
    "agent": userAgent
};
doPost(gasURL, userData);
https://domains.google.com/checkip