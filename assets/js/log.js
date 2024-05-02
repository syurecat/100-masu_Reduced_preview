'use strict';

const gasURL = 'https://script.google.com/macros/s/AKfycbyeHWh-dbz4Z9r9hy4dm1yh2V66pH2DqPtEgCeusIWK-P0WdhuWtxObicpsHuL7AlWh/exec';
const events = [
    'request.detail.show',
    'request.judgement.show'
];

collaboflow.events.on(events, function(e) {
    const fetchIpAddress = async() => {
        return await fetch('https://ipinfo.io?callback')
        .then(response => response.json())
        .then(json => json.ip);
    }

    const writeAccessLog = async() => {
        const ipAddress = await fetchIpAddress();
        const loginUser = collaboflow.getLoginUser();
        const logData = {
            'ip_address' : ipAddress,
            'user_agent' : navigator.userAgent
        };

        collaboflow.proxy.post(gasURL, {}, logData, 'json')
        .then(response => {
            console.log('logging', response);
        });
    }

    writeAccessLog();
});